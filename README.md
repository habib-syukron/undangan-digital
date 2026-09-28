# Javanese Wayang Heritage — Digital Invitation Engine (Rp0 Static-First)

Aplikasi undangan digital pernikahan bertema **Javanese Wayang Heritage (Seni Pertunjukan Wayang Jawa)** yang memadukan keagungan tradisi keraton Jawa adiluhung dengan kecanggihan teknologi web modern.

Dibangun dengan arsitektur **Static-First (HTML, CSS, JavaScript, JSON)** tanpa ketergantungan pada server, VPS, atau database berbayar (**Rp0 Total Cost**).

---

## 🏛️ Konsep & Karakter Desain

- **Pakeliran Experience**: Pembukaan undangan menggunakan konsep panggung wayang (*kelir*), dilengkapi siluet Gunungan Kayon dan efek pendar cahaya lampu minyak kelapa (*lampu blencong*).
- **Cinematic Transition**: Saat tombol **[ BUKA UNDANGAN ]** ditekan, tirai kelir wayang tersingkap lembut ke kiri dan kanan, Gunungan mengalun anggun, dan alunan gamelan Jawa mulai mengalun merdu.
- **Palet Warna Adiluhung**:
  - `Parchment` (`#F4EFE6`): Warna kertas dluwang lawas.
  - `Jawa Dark` (`#231913`): Coklat tua temaram keraton.
  - `Gold Prada` (`#B88E4B` / `#E5C77A`): Emas prada berukir.
  - `Sogan Brown` (`#583827`): Coklat sogan khas batik tulis Surakarta & Yogyakarta.
  - `Terracotta` (`#8C3F2F`): Merah bata aksen keraton.
- **Aset Vektor Mandiri**: Seluruh ornamen (Gunungan Kayon, Wayang Raden Kamajaya & Dewi Kamaratih, Motif Batik Kawung, Ukiran Sudut Jepara, Pembatas Wayang) dibuat dengan format SVG murni (0 network bloat, tajam di semua resolusi Retina).
- **Gamelan Synthesizer Bawaan**: Dilengkapi synthesizer gamelan laras Slendro berbasis Web Audio API sehingga dapat mengalun seketika tanpa memerlukan unduhan file audio besar dari pihak ketiga.

---

## 📂 Struktur Berkas

```text
undangan/
├── index.html                  # Halaman utama aplikasi undangan
├── config.json                 # Pusat data (Mempelai, Acara, Kisah, Bank, RSVP)
├── assets/
│   ├── css/
│   │   ├── variables.css       # Token warna, tipografi, dan elevasi bayangan
│   │   ├── base.css            # Reset, typography system, dan wrapper mobile
│   │   ├── pakeliran.css       # Efek layar kelir, pendar blencong, & animasi buka
│   │   ├── components.css      # Kartu berornamen, countdown, toast, modal, audio badge
│   │   └── sections.css        # Gaya visual seluruh section undangan
│   ├── js/
│   │   ├── app.js              # Orchestrator & data binding dari config.json
│   │   ├── guest-manager.js    # Personalisasi nama tamu otomatis (?to=Nama+Tamu)
│   │   ├── pakeliran.js        # Logika transisi kelir pembuka dan pembuka kunci scroll
│   │   ├── audio-player.js     # Pemutar audio file & synthesizer Gamelan Slendro
│   │   ├── countdown.js        # Hitung mundur hari pernikahan akurat
│   │   └── rsvp-gift.js        # Salin rekening 1-klik, WhatsApp RSVP, & buku doa lokal
│   ├── images/
│   │   ├── gunungan.svg        # Vektor Gunungan Wayang Kayon detail
│   │   ├── wayang-pria.svg     # Siluet Raden Kamajaya gaya keraton
│   │   ├── wayang-wanita.svg   # Siluet Dewi Kamaratih gaya keraton
│   │   ├── batik-kawung.svg    # Motif seamless Batik Kawung
│   │   ├── ornament-corner.svg # Ornamen sudut ukiran Jepara emas
│   │   └── ornament-divider.svg# Pembatas section wayang emas prada
│   └── audio/
│       └── (opsional: file .mp3 jika ingin menggunakan lagu kustom)
└── README.md                   # Petunjuk penggunaan dan deployment
```

---

## ⚙️ Cara Mengubah Data (`config.json`)

Cukup buka berkas `config.json` untuk mengganti seluruh konten undangan:

1. **Nama Mempelai & Orang Tua**:
   Ubah pada bagian `"mempelai" -> "pria"` dan `"mempelai" -> "wanita"`.
2. **Jadwal & Lokasi Acara**:
   Ubah pada bagian `"acara" -> "akad"` dan `"acara" -> "resepsi"`.
3. **Kisah Perjalanan (Kidung Tresna)**:
   Ubah atau tambah item pada array `"kisah"`.
4. **Nomor Rekening & Alamat Kado**:
   Ubah pada bagian `"hadiah" -> "rekening"` dan `"hadiah" -> "kadoFisik"`.
5. **Nomor WhatsApp RSVP**:
   Ganti nomor pada `"rsvp" -> "whatsappNumber"` (gunakan format internasional diawali 62).

---

## 💌 Personalisasi Nama Tamu

Untuk mengirim undangan kepada tamu tertentu, cukup tambahkan parameter `?to=` pada tautan:

Contoh:
```text
https://nama-domain.com/?to=Bapak+Joko+Santoso
https://nama-domain.com/?to=Ibu+Siti+Rahayu&p=VIP
```

Nama tamu akan otomatis tampil di kartu ucapan cover dan pada form konfirmasi kehadiran RSVP.

---

## 🚀 Panduan Publikasi Gratis (Rp0 Hosting)

### 1. GitHub Pages (Rekomendasi)
1. Buat repositori baru di GitHub (misal: `undangan-wayang`).
2. Unggah seluruh berkas ke repositori tersebut.
3. Buka menu **Settings** > **Pages**.
4. Pada bagian **Branch**, pilih `main` dan folder `/ (root)`, lalu klik **Save**.
5. Undangan Anda akan aktif secara langsung dengan HTTPS gratis!

### 2. Vercel atau Netlify
- Drag-and-drop folder `undangan` langsung ke dashboard Netlify Drop (`app.netlify.com/drop`) untuk publikasi instan dalam 10 detik.
"# undnagan-digital" 
"# undnagan-digital" 
"# undnagan-digital" 
