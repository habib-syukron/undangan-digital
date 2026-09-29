// ============================================================================
// GOOGLE APPS SCRIPT: BACKEND BUKU RAWUH & RSVP UNDANGAN DIGITAL
// ============================================================================
// CARA PENGGUNAAN (CUKUP SEKALI SETUP):
// 1. Buat Google Spreadsheet baru di https://sheets.new
// 2. Beri nama spreadsheet, misalnya: "Buku Rawuh Undangan Pernikahan"
// 3. Klik menu "Ekstensi" (Extensions) -> "Apps Script"
// 4. Hapus semua teks di editor Apps Script, lalu TEMPELKAN (PASTE) seluruh kode di bawah ini.
// 5. Klik ikon Simpan (Save / Disket).
// 6. Klik tombol biru "Terapkan" (Deploy) di kanan atas -> Pilih "Penerapan baru" (New deployment).
// 7. Klik ikon gerigi di samping "Pilih jenis", pilih "Aplikasi Web" (Web app).
// 8. Atur konfigurasinya:
//    - Deskripsi: Buku Rawuh API
//    - Jalankan sebagai (Execute as): "Saya" (Me)
//    - Yang memiliki akses (Who has access): "Siapa saja" (Anyone) -> WAJIB PILIH INI!
// 9. Klik "Terapkan" (Deploy) -> Klik "Beri akses" (Authorize access) jika muncul pop-up Google.
//    (Jika muncul peringatan "Google hasn't verified this app", klik "Advanced" -> klik "Go to ... (unsafe)").
// 10. Salin "URL Aplikasi Web" (Web app URL, berakhiran /exec).
// 11. Buka admin.html di website undangan Anda -> Masuk ke Tab RSVP -> Tempelkan URL tersebut ke kolom:
//     "URL Web App Google Sheets". Lalu klik "Simpan Perubahan" & unduh config.json ke GitHub!
// ============================================================================

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Inisialisasi header kolom otomatis jika sheet masih kosong
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Waktu", "Nama Tamu", "Kehadiran", "Jumlah", "Doa & Pesan"]);
      sheet.getRange(1, 1, 1, 6).setFontWeight("bold");
    }
    
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var now = new Date();
    var waktuStr = Utilities.formatDate(now, "Asia/Jakarta", "dd MMM yyyy, HH:mm 'WIB'");
    var nama = (data.nama || "Tamu Undangan").toString().trim();
    var kehadiran = (data.kehadiran || "hadir").toString().trim();
    var jumlah = parseInt(data.jumlah, 10) || 1;
    var pesan = (data.pesan || "").toString().trim();

    sheet.appendRow([
      now.toISOString(),
      waktuStr,
      nama,
      kehadiran,
      jumlah,
      pesan
    ]);

    var response = {
      status: "success",
      message: "Data rawuh kasil kacathet.",
      data: {
        timestamp: now.getTime(),
        waktu: waktuStr,
        nama: nama,
        kehadiran: kehadiran,
        jumlah: jumlah,
        pesan: pesan
      }
    };

    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var rows = sheet.getDataRange().getValues();
    var wishes = [];

    // Header ada di baris index 0, data mulai dari baris index 1
    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      if (!row[2]) continue; // Lewati baris jika kolom nama kosong

      var timeVal = row[0];
      var timeStamp = 0;
      if (timeVal) {
        var d = new Date(timeVal);
        if (!isNaN(d.getTime())) {
          timeStamp = d.getTime();
        }
      }
      var waktuStr = row[1] || "";

      wishes.push({
        id: "wish_gsheet_" + i,
        timestamp: timeStamp || Date.now(),
        waktu: waktuStr || "-",
        nama: String(row[2]),
        kehadiran: String(row[3] || "hadir"),
        jumlah: parseInt(row[4], 10) || 1,
        pesan: String(row[5] || "")
      });
    }

    // Urutkan data dari yang paling baru ke terlama
    wishes.reverse();

    var response = {
      status: "success",
      total: wishes.length,
      data: wishes
    };

    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString(),
      data: []
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
