# 🚀 Panduan Lengkap Deploy & Manajemen Undangan (Rp0 Static-First)

Aplikasi undangan digital pernikahan bertema **Javanese Wayang Heritage** ini dirancang dengan arsitektur **Static-First 100%** (HTML5, Vanilla CSS, JavaScript ES6, dan JSON). Tidak memerlukan server backend (Node.js, PHP, atau database MySQL), sehingga **100% Bebas Biaya Hosting (Rp0)**, tahan lonjakan ribuan tamu sekaligus, dan dapat dipublikasikan ke berbagai layanan cloud modern dalam hitungan detik.

---

## 📋 Alur Kerja Penggunaan (Workflow Rekomendasi)

1. **Uji Coba & Kustomisasi di Komputer**:
   - Buka berkas `admin.html` langsung di browser Anda (atau melalui server lokal).
   - Sesuaikan data mempelai pria & wanita, tanggal acara akad & resepsi, tautan Google Maps, rekening bank, dan nomor WhatsApp konfirmasi.
   - Perhatikan barcode navigasi Google Maps yang otomatis terbuat secara langsung (*live preview*).
   - Klik tombol **[ Unduh config.json ]** di bagian atas bilah navigasi.
   - Gantikan berkas `config.json` lama di folder Anda dengan berkas `config.json` yang baru saja diunduh.
2. **Pilih Layanan Hosting Statis** (lihat pilihan di bawah).
3. **Generate Tautan Tamu & Kirim via WhatsApp**:
   - Buka tab **[ 💌 Generator Tamu ]** di `admin.html`.
   - Masukkan alamat domain website yang sudah live (misal: `https://liahne-fernando.vercel.app/`).
   - Masukkan daftar nama tamu (1 nama per baris), lalu klik **[ ⚡ Generate Semua Tautan Tamu ]**.
   - Klik tombol **[ WA ]** untuk mengirim pesan undangan personal langsung ke WhatsApp tamu!

---

## 🌐 Opsi 1: Deploy ke Vercel (Sangat Direkomendasikan & Paling Cepat)

Vercel adalah platform hosting tercepat di dunia dengan CDN global dan sertifikat SSL HTTPS gratis.

### Langkah-langkah:
1. Kunjungi **[vercel.com](https://vercel.com/)** dan masuk (login) dengan akun GitHub atau Google.
2. Buka dashboard Vercel, klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Jika menggunakan GitHub:
   - Pilih repositori undangan Anda, lalu klik **"Deploy"**.
4. Jika ingin unggah langsung tanpa GitHub (menggunakan Vercel CLI):
   - Buka terminal / PowerShell di folder undangan:
     ```bash
     npm i -g vercel
     vercel
     ```
   - Ikuti petunjuk di layar (tekan Enter untuk opsi default).
5. Dalam waktu kurang dari 30 detik, website undangan Anda sudah aktif dengan alamat:
   `https://nama-undangan.vercel.app/`
6. Anda juga dapat menghubungkan domain pribadi Anda (misal: `www.undanganpernikahan.com`) secara gratis di menu **Settings > Domains**.

---

## ⚡ Opsi 2: Deploy ke Netlify Drop (Paling Mudah — Tanpa Akun Git, 30 Detik)

Metode termudah jika Anda tidak ingin menggunakan Git atau terminal sama sekali.

### Langkah-langkah:
1. Buka browser dan kunjungi **[app.netlify.com/drop](https://app.netlify.com/drop)**.
2. Buka File Explorer di komputer Anda, lalu tarik (drag-and-drop) seluruh isi folder `undangan` ke area drop Netlify.
3. Tunggu proses unggah selesai (sekitar 10-15 detik).
4. Netlify akan langsung memberikan tautan website online gratis (misal: `https://amazing-wedding-12345.netlify.app`).
5. Masuk ke menu **Site configuration > Change site name** untuk mengganti nama domain sesuai nama pengantin (contoh: `https://liahne-fernando.netlify.app`).

---

## 🐙 Opsi 3: Deploy ke GitHub Pages (Gratis Selamanya)

Sangat cocok jika Anda menyimpan kode sumber di GitHub.

### Langkah-langkah:
1. Buat repositori baru di akun GitHub Anda (misal diberi nama `undangan-liahne-fernando`).
2. Unggah seluruh berkas proyek ke repositori tersebut:
   ```bash
   git init
   git add .
   git commit -m "Inisialisasi undangan pernikahan wayang"
   git branch -M main
   git remote add origin https://github.com/USERNAME/undangan-liahne-fernando.git
   git push -u origin main
   ```
3. Di halaman repositori GitHub, klik tab **Settings** (ikon roda gerigi).
4. Pada menu sebelah kiri, klik **Pages**.
5. Di bagian **Build and deployment > Branch**, pilih `main` dan folder `/ (root)`, lalu klik tombol **Save**.
6. Tunggu sekitar 1-2 menit. Undangan Anda akan aktif di:
   `https://USERNAME.github.io/undangan-liahne-fernando/`

---

## ☁️ Opsi 4: Deploy ke Cloudflare Pages

Cloudflare Pages menawarkan kecepatan akses ultra-cepat dengan jaringan server di lebih dari 300 kota di seluruh dunia.

### Langkah-langkah:
1. Masuk ke dashboard **[dash.cloudflare.com](https://dash.cloudflare.com/)**.
2. Pilih menu **Workers & Pages > Create application > Pages**.
3. Pilih opsi **"Upload assets"**.
4. Beri nama proyek Anda, lalu unggah folder `undangan`.
5. Klik **"Deploy site"**. Selesai!

---

## 🗄️ Opsi 5: Deploy ke Web Hosting Biasa / cPanel

Jika Anda sudah menyewa web hosting (seperti Niagahoster, DomaiNesia, IDCloudHost, Hostinger):

### Langkah-langkah:
1. Di komputer Anda, kompres (ZIP) seluruh isi dalam folder `undangan` menjadi satu file `undangan.zip`.
2. Masuk ke **cPanel** hosting Anda.
3. Buka menu **File Manager** dan masuk ke direktori tujuan (biasanya `public_html` atau subdomain seperti `undangan.domainanda.com`).
4. Klik tombol **Upload**, lalu pilih berkas `undangan.zip`.
5. Setelah selesai diunggah, klik kanan pada file zip tersebut lalu pilih **Extract**.
6. Pastikan file `index.html`, `admin.html`, dan `config.json` berada langsung di dalam folder root domain/subdomain tersebut.
7. Buka domain Anda di browser, undangan pernikahan siap diakses tamu!

---

## 💌 Panduan Generator Tamu & Pengiriman WhatsApp

Fitur Generator Tamu pada `admin.html` memungkinkan Anda mengirim tautan personal untuk setiap tamu dengan nama mereka tertera indah di kartu undangan (*Pakeliran Cover*).

### Format Tautan Tamu:
```text
https://domainanda.com/?to=Nama+Tamu&p=Kategori
```

Contoh:
- Tamu VIP: `https://domainanda.com/?to=Bapak+Ir.+H.+Joko+Widodo&p=VIP`
- Tamu Keluarga: `https://domainanda.com/?to=Keluarga+Bpk.+Bambang+Sutrisno&p=Keluarga+Besar`
- Sahabat: `https://domainanda.com/?to=Dimas+Suryonegoro&p=Sahabat+Karib`

### Cara Mengirim Undangan Massal:
1. Buka `admin.html` pada browser Anda, lalu klik tab **[ 💌 Generator Tamu ]**.
2. Salin daftar nama tamu dari buku tamu atau Excel Anda.
3. Tempel pada kolom **Daftar Nama Tamu (Satu Nama per Baris)**.
4. Klik tombol **[ ⚡ Generate Semua Tautan Tamu ]**.
5. Anda dapat:
   - Mengklik tombol **[ WA ]** pada baris tamu untuk membuka aplikasi WhatsApp dengan pesan dan link yang otomatis terisi.
   - Mengklik **[ Unduh CSV (Excel) ]** untuk menyimpan daftar tamu lengkap beserta tautan khususnya ke lembar kerja spreadsheet.
   - Mengklik **[ Salin Seluruh Teks Broadcast WA ]** untuk membagikan secara cepat.

---

## 🗺️ Barcode Navigasi Google Maps (Pengganti QRIS)

Pada versi terbaru ini:
- Barcode QRIS telah **dihapus** sesuai instruksi.
- Sebagai gantinya, tersedia **Barcode Google Maps** yang terletak di bagian *Wanci & Papan Palenggahan (Reroncening Adicara)*.
- Barcode ini otomatis membaca koordinat/URL Google Maps yang Anda masukkan di `admin.html` (atau `config.json`) dan merendernya menjadi QR Code berkualitas tinggi.
- Tamu yang membuka undangan melalui laptop atau tablet dapat memindai barcode menggunakan kamera ponsel pintar mereka untuk mendapatkan rute panduan jalan (*turn-by-turn navigation*) langsung ke tempat acara.

---

## 📖 Buku Rawuh Menggunakan Data Asli (Real Data)

Buku Rawuh & Donga Pamuji kini **100% menggunakan data asli**:
- Seluruh komentar dummy/tiruan telah dibersihkan.
- Jika belum ada tamu yang mengisi konfirmasi, sistem menampilkan pemberitahuan anggun: *"Dereng Wonten Serat Donga"*.
- Setiap tamu yang mengisi formulir konfirmasi RSVP di `index.html` akan langsung tercatat secara riil beserta status kehadiran, jumlah tamu/porsi, doa restu, dan waktu pengiriman nyata.
- Pengantin dapat memantau seluruh respon asli di tab **[ 📖 Buku Rawuh (Data Asli) ]** pada `admin.html`, lengkap dengan total tamu hadir, estimasi porsi katering (*pax*), serta tombol ekspor ke CSV (Excel).

---

## 🔒 Tautan Khusus Admin Panel (Tersembunyi dari Tamu di `index.html`)

Sesuai permintaan, **tidak ada tombol atau tautan navigasi ke admin panel yang ditampilkan di halaman depan (`index.html`)**, sehingga para tamu undangan tidak akan mengetahui keberadaan halaman admin.

Pengantin dapat membuka halaman admin melalui beberapa cara khusus berikut:
1. **Tautan Langsung (Direct URL)**:
   Buka alamat berkas admin secara langsung di browser:
   `https://domainanda.com/admin.html`
   *(Atau secara lokal: `http://localhost:8080/admin.html`)*
2. **Parameter Rahasia di URL**:
   Buka halaman utama dengan menambahkan parameter `?admin=1`, contoh:
   `https://domainanda.com/?admin=1`
   *(Sistem akan otomatis mengalihkan ke `admin.html`)*
3. **Pintasan Keyboard Rahasia**:
   Tekan kombinasi tombol **`Ctrl + Shift + A`** saat membuka `index.html`.
4. **Sentuhan Rahasia (Secret Tap)**:
   Klik/ketuk teks hak cipta pada bagian paling bawah (*footer credits*) sebanyak **5 kali berturut-turut**.

