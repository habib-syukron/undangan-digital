# 📖 Panduan Integrasi Google Sheets untuk Buku Rawuh & RSVP Online

Dengan panduan ini, setiap tamu undangan yang mengisi ucapan doa restu dan konfirmasi kehadiran (RSVP) di website undangan digital Anda akan **tersimpan secara permanen di Google Spreadsheet** dan **dapat dibaca oleh semua tamu maupun pemilik undangan secara realtime** (Rp 0 / Gratis selamanya).

---

## 🚀 Langkah 1: Buat Google Spreadsheet Baru
1. Buka browser dan kunjungi: **[https://sheets.new](https://sheets.new)** (otomatis membuat file spreadsheet baru di Google Drive Anda).
2. Beri judul spreadsheet Anda di pojok kiri atas, misalnya: `Buku Rawuh Undangan Pernikahan`.

---

## 💻 Langkah 2: Buka Apps Script
1. Di menu atas Google Sheets, klik **Ekstensi** (*Extensions*) &rarr; pilih **Apps Script**.
2. Anda akan diarahkan ke halaman editor kode Google Apps Script.
3. Hapus semua kode bawaan yang ada di editor tersebut (`function myFunction() { ... }`).
4. Buka file **`google-apps-script.js`** yang sudah disediakan di folder proyek Anda (atau salin kode di bawah ini), lalu **tempelkan (paste)** ke editor Apps Script:

```javascript
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
```

5. Klik ikon **Simpan (Save / Disket)** di toolbar atas.

---

## 🌐 Langkah 3: Terapkan (Deploy) Sebagai Aplikasi Web
1. Klik tombol biru **Terapkan** (*Deploy*) di pojok kanan atas &rarr; pilih **Penerapan baru** (*New deployment*).
2. Di jendela pop-up:
   - Klik ikon roda gigi (*Select type*) &rarr; pilih **Aplikasi Web** (*Web app*).
   - **Deskripsi**: `Buku Rawuh API`
   - **Jalankan sebagai** (*Execute as*): **Saya** (*Me*)
   - **Yang memiliki akses** (*Who has access*): **Siapa saja** (*Anyone*) &larr; **PENTING: Wajib pilih "Siapa saja"!**
3. Klik tombol **Terapkan** (*Deploy*).
4. Jika Google meminta izin akses akun:
   - Klik **Beri akses** (*Authorize access*).
   - Pilih akun Google Anda.
   - Jika muncul peringatan *"Google hasn't verified this app"*, klik tautan **Advanced** (Lanjutan) di bawah kiri &rarr; klik **Go to Untitled project (unsafe)**.
   - Klik **Allow** (Izinkan).
5. Salin **URL Aplikasi Web** (*Web app URL*) yang diberikan (URL ini berakhiran `/exec`).

---

## 🔗 Langkah 4: Sambungkan ke Undangan Digital
1. Buka file **`admin.html`** di browser Anda.
2. Buka **Tab 7 (RSVP & Musik)**.
3. Tempelkan URL yang baru saja Anda salin ke kolom:
   **URL Google Sheets Web App (Database Online)**.
4. Klik tombol **"Simpan Perubahan"** di navigasi atas.
5. Klik **"Unduh config.json"**, lalu ganti file `config.json` di GitHub Anda agar link tersebut aktif untuk semua orang di internet!

---

## 🎉 Hasilnya
- Semua tamu yang mengisi formulir konfirmasi / doa restu akan otomatis tercatat ke baris Google Spreadsheet Anda secara permanen.
- Semua pengunjung web akan bisa melihat ucapan tamu lain secara bersamaan.
- Di dasbor `admin.html` pada tab **Buku Rawuh**, Anda bisa klik tombol **"📥 Tarik Google Sheets"** kapan saja untuk menyinkronkan seluruh respon tamu ke tabel dasbor dan mengunduh rekap Excel (CSV).
