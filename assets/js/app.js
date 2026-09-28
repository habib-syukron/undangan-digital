/**
 * Main Application Orchestrator — Javanese Wayang Heritage Invitation Engine
 */

const DEFAULT_FALLBACK_CONFIG = {
  theme: "Javanese Wayang Heritage",
  version: "1.0.0",
  mempelai: {
    pria: {
      namaLengkap: "Raden Fernando Pratama, S.T.",
      namaPanggilan: "Fernando",
      gelar: "Putra Pertama",
      orangTua: "Bapak Ir. H. Bambang Wijaya & Ibu Hj. Siti Rahayu",
      instagram: "fernandopratama",
      foto: "assets/images/wayang-pria.svg",
      deskripsi: "Seorang pria yang memegang teguh nilai kesantunan, berjiwa ksatria, dan setia membimbing bahtera cinta."
    },
    wanita: {
      namaLengkap: "Raden Ayu Liahne Kusumaningrum, S.Psi.",
      namaPanggilan: "Liahne",
      gelar: "Putri Kedua",
      orangTua: "Bapak Dr. H. Soedirman Hadiningrat & Ibu Hj. Endang Sulastri",
      instagram: "liahnekusuma",
      foto: "assets/images/wayang-wanita.svg",
      deskripsi: "Wanita berhati lembut, anggun dalam tutur kata dan laku, laksana Dewi Kamaratih pembawa ketenteraman jiwa."
    }
  },
  quotes: {
    teks: "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    sumber: "QS. Ar-Rum: 21",
    falsafah: "Cakra Manggilingan Tresna — Manunggaling Roso, Cipto, lan Karso tumuju ing Kamulyan."
  },
  acara: {
    akad: {
      judul: "Ijab Kabul / Akad Nikah",
      hari: "Sabtu Legi",
      tanggal: "24 Oktober 2026",
      waktu: "08.00 - 10.00 WIB",
      tempat: "Pendopo Agung Royal Ambarrukmo",
      alamat: "Jl. Laksda Adisucipto No.81, Ambarukmo, Caturtunggal, Kec. Depok, Kabupaten Sleman, D.I. Yogyakarta",
      googleMapsUrl: "https://maps.google.com/?q=Pendopo+Agung+Royal+Ambarrukmo+Yogyakarta",
      calendar: {
        title: "Akad Nikah Liahne & Fernando",
        description: "Akad Nikah Liahne & Fernando di Pendopo Agung Royal Ambarrukmo Yogyakarta",
        location: "Pendopo Agung Royal Ambarrukmo Yogyakarta",
        startDate: "20261024T010000Z",
        endDate: "20261024T030000Z"
      }
    },
    resepsi: {
      judul: "Pahargyan Temanten / Resepsi",
      hari: "Sabtu Legi",
      tanggal: "24 Oktober 2026",
      waktu: "11.00 - 14.00 WIB",
      tempat: "Bale Mangunharjo, Royal Ambarrukmo",
      alamat: "Jl. Laksda Adisucipto No.81, Ambarukmo, Caturtunggal, Kec. Depok, Kabupaten Sleman, D.I. Yogyakarta",
      googleMapsUrl: "https://maps.google.com/?q=Pendopo+Agung+Royal+Ambarrukmo+Yogyakarta",
      calendar: {
        title: "Resepsi Pernikahan Liahne & Fernando",
        description: "Resepsi Pernikahan Liahne & Fernando di Pendopo Agung Royal Ambarrukmo Yogyakarta",
        location: "Bale Mangunharjo, Royal Ambarrukmo Yogyakarta",
        startDate: "20261024T040000Z",
        endDate: "20261024T070000Z"
      }
    },
    gmapsBarcode: {
      tampilkan: true,
      judul: "Pindai Barcode Google Maps",
      keterangan: "Arahkan kodhak / kamera ponsel panjenengan dhateng kode barcode ing ngandhap menika kagem mbikak rute navigasi Google Maps tumuju sasana pahargyan.",
      url: "https://maps.google.com/?q=Pendopo+Agung+Royal+Ambarrukmo+Yogyakarta"
    }
  },
  countdownTarget: "2026-10-24T08:00:00+07:00",
  kisah: [
    {
      tahun: "2021",
      judul: "Pitepangan (Awal Perjumpaan)",
      deskripsi: "Garis takdir mempertemukan kami di sebuah simfoni gamelan Yogyakarta. Berawal dari tutur sapa sederhana, terajut rasa saling mengerti dan menghormati."
    },
    {
      tahun: "2024",
      judul: "Kidung Tresna (Mengikat Janji)",
      deskripsi: "Setelah melangkah bersama melalui suka dan duka, kami meyakini bahwa langkah ini adalah panggilan jiwa untuk saling membersamai hingga akhir hayat."
    },
    {
      tahun: "2026",
      judul: "Dhaup Suci (Menuju Mahligai)",
      deskripsi: "Dengan restu kedua orang tua dan leluhur, kami menyatukan dua keluarga besar dalam ikatan suci pernikahan berbalut adat Jawa adiluhung."
    }
  ],
  galeri: [
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
      caption: "Kidung Tresna ing Ngayogyakarta",
      alt: "Foto Busana Adat Jawa Pengantin"
    },
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      caption: "Manunggaling Roso lan Jiwo",
      alt: "Momen Kasih Pasangan Mempelai"
    },
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      caption: "Langkah Menuju Mahligai Suci",
      alt: "Janji Pernikahan"
    },
    {
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
      caption: "Sembah Sujud Doa Pangestu",
      alt: "Doa Restu Keluarga"
    }
  ],
  hadiah: {
    deskripsi: "Doa restu panjenengan sedaya sampun dados berkah ingkang tanpa upami tumrap kula sakaliyan. Nanging menawi panjenengan kersa paring tanda katresnan, saged lumantar rekening ing ngandhap menika:",
    rekening: [
      {
        bank: "BCA",
        nomor: "8935129481",
        atasNama: "Fernando Pratama",
        logo: "BCA"
      },
      {
        bank: "Bank Mandiri",
        nomor: "1370019284712",
        atasNama: "Liahne Kusumaningrum",
        logo: "MANDIRI"
      }
    ],
    kadoFisik: {
      penerima: "Liahne & Fernando",
      telepon: "0812-3456-7890",
      alamat: "Komplek Bale Asri No. 12, Caturtunggal, Depok, Sleman, D.I. Yogyakarta 55281"
    }
  },
  rsvp: {
    whatsappNumber: "6281234567890",
    defaultPesan: "Sugeng rawuh! Kula ngaturaken matur nuwun inggil serat sedhahanipun."
  },
  audio: {
    judul: "Wonderful Gamelan Indonesia Traditional Music",
    mode: "file",
    src: "assets/audio/gamelan.mp3"
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Personalize Guest Name from URL Query (?to=Nama+Tamu)
  if (window.GuestManager) {
    window.GuestManager.applyGuestToUI();
  }

  // 2. Load Configuration Data (Priority: localStorage > fetch config.json > fallback)
  let configData = null;
  try {
    const localSaved = localStorage.getItem('wayang_wedding_config');
    if (localSaved) {
      configData = JSON.parse(localSaved);
    }
  } catch (err) {
    console.warn('LocalStorage config read error:', err);
  }

  if (!configData) {
    try {
      const res = await fetch('config.json');
      if (res.ok) {
        configData = await res.json();
      }
    } catch (err) {
      console.warn('Could not load config.json via fetch, using default fallback data:', err);
    }
  }

  if (!configData) {
    configData = DEFAULT_FALLBACK_CONFIG;
  }

  window.__CURRENT_CONFIG__ = configData;

  // 3. Populate Dynamic Content from Config
  populateDynamicContent(configData);

  // 4. Initialize Audio Player
  const audioPlayer = new WayangAudioPlayer();
  if (configData && configData.audio) {
    audioPlayer.configure(configData.audio);
  }

  // 5. Initialize Pakeliran Opening Transition Engine
  new PakeliranEngine(audioPlayer);

  // 6. Initialize Countdown
  const targetDate = configData?.countdownTarget || '2026-10-24T08:00:00+07:00';
  new WeddingCountdown(targetDate);

  // 7. Initialize RSVP, Gift & Lightbox Manager
  new RsvpGiftManager(configData);

  // 8. Setup Scroll Animations via IntersectionObserver
  setupScrollReveal();
});

/**
 * Data Binding Helper to populate HTML from config
 */
function populateDynamicContent(data) {
  if (!data) return;

  const pria = data.mempelai?.pria;
  const wanita = data.mempelai?.wanita;

  // Title tag update
  if (pria && wanita) {
    const pNama = pria.namaPanggilan || pria.namaLengkap || 'Temanten Pria';
    const wNama = wanita.namaPanggilan || wanita.namaLengkap || 'Temanten Wanita';
    document.title = `Pernikahan ${wNama} & ${pNama} — Javanese Wayang Heritage`;

    // Cover Title & Hero Header
    const coverNames = document.querySelector('.pakeliran-names');
    if (coverNames) {
      coverNames.innerHTML = `${wNama} <span>&amp;</span> ${pNama}`;
    }

    const heroNames = document.querySelector('.hero-names');
    if (heroNames) {
      heroNames.innerHTML = `${wanita.namaLengkap.split(',')[0]} <span>&amp;</span> ${pria.namaLengkap.split(',')[0]}`;
    }
  }

  // Mempelai Pria Details
  if (pria) {
    setText('mempelaiPriaNama', pria.namaLengkap);
    setText('mempelaiPriaGelar', pria.gelar);
    setText('mempelaiPriaOrtu', pria.orangTua);
    setText('mempelaiPriaDesc', pria.deskripsi);
    if (pria.instagram) {
      setLink('mempelaiPriaIg', `https://instagram.com/${pria.instagram.replace(/^@/, '')}`, `@${pria.instagram.replace(/^@/, '')}`);
    }
    const avatarPria = document.querySelector('.mempelai-card:first-of-type .mempelai-avatar-img');
    if (avatarPria && pria.foto) {
      avatarPria.src = pria.foto;
    }
  }

  // Mempelai Wanita Details
  if (wanita) {
    setText('mempelaiWanitaNama', wanita.namaLengkap);
    setText('mempelaiWanitaGelar', wanita.gelar);
    setText('mempelaiWanitaOrtu', wanita.orangTua);
    setText('mempelaiWanitaDesc', wanita.deskripsi);
    if (wanita.instagram) {
      setLink('mempelaiWanitaIg', `https://instagram.com/${wanita.instagram.replace(/^@/, '')}`, `@${wanita.instagram.replace(/^@/, '')}`);
    }
    const avatarWanita = document.querySelectorAll('.mempelai-card')[1]?.querySelector('.mempelai-avatar-img');
    if (avatarWanita && wanita.foto) {
      avatarWanita.src = wanita.foto;
    }
  }

  // Quotes
  if (data.quotes) {
    setText('quoteTeks', `"${data.quotes.teks.replace(/^"|"$/g, '')}"`);
    setText('quoteSumber', data.quotes.sumber);
    setText('quoteFalsafah', data.quotes.falsafah);
  }

  // Events (Akad & Resepsi)
  if (data.acara) {
    const akad = data.acara.akad;
    if (akad) {
      setText('akadJudul', akad.judul);
      setText('akadHari', akad.hari);
      setText('akadTanggal', akad.tanggal);
      setText('akadWaktu', akad.waktu);
      setText('akadTempat', akad.tempat);
      setText('akadAlamat', akad.alamat);
      if (akad.googleMapsUrl) setLink('akadMapsBtn', akad.googleMapsUrl);
      if (akad.calendar) {
        setLink('akadCalBtn', createGoogleCalendarUrl(akad.calendar));
      }

      // Hero date badge sync
      const heroDateBadge = document.querySelector('.hero-date-badge');
      if (heroDateBadge) {
        heroDateBadge.textContent = `${akad.hari}, ${akad.tanggal}`;
      }
    }

    const resepsi = data.acara.resepsi;
    if (resepsi) {
      setText('resepsiJudul', resepsi.judul);
      setText('resepsiHari', resepsi.hari);
      setText('resepsiTanggal', resepsi.tanggal);
      setText('resepsiWaktu', resepsi.waktu);
      setText('resepsiTempat', resepsi.tempat);
      setText('resepsiAlamat', resepsi.alamat);
      if (resepsi.googleMapsUrl) setLink('resepsiMapsBtn', resepsi.googleMapsUrl);
      if (resepsi.calendar) {
        setLink('resepsiCalBtn', createGoogleCalendarUrl(resepsi.calendar));
      }
    }

    // Google Maps Barcode / QR Code Card (Pengganti QRIS)
    const gmapsBarcode = data.acara.gmapsBarcode;
    const barcodeBox = document.getElementById('gmapsBarcodeBox');
    if (barcodeBox) {
      if (gmapsBarcode && gmapsBarcode.tampilkan === false) {
        barcodeBox.style.display = 'none';
      } else {
        barcodeBox.style.display = '';
        if (gmapsBarcode?.judul) setText('gmapsBarcodeJudul', gmapsBarcode.judul);
        if (gmapsBarcode?.keterangan) setText('gmapsBarcodeKet', gmapsBarcode.keterangan);

        const targetMapsUrl = gmapsBarcode?.url || akad?.googleMapsUrl || resepsi?.googleMapsUrl || 'https://maps.google.com';
        const qrImg = document.getElementById('gmapsBarcodeImg');
        if (qrImg) {
          qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(targetMapsUrl)}`;
        }
        setLink('gmapsDirectBtn', targetMapsUrl);
      }
    }
  }

  // Kidung Tresna / Story Timeline
  if (data.kisah && Array.isArray(data.kisah)) {
    const timelineEl = document.getElementById('timelineContainer');
    if (timelineEl) {
      timelineEl.innerHTML = '';
      data.kisah.forEach(item => {
        const div = document.createElement('div');
        div.className = 'timeline-item reveal-on-scroll';
        div.innerHTML = `
          <div class="timeline-node"></div>
          <span class="timeline-year">${item.tahun}</span>
          <h3 class="timeline-title">${item.judul}</h3>
          <p class="timeline-desc">${item.deskripsi}</p>
        `;
        timelineEl.appendChild(div);
      });
    }
  }

  // Galeri Foto Dokumentasi
  if (data.galeri && Array.isArray(data.galeri) && data.galeri.length > 0) {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
      galleryGrid.innerHTML = '';
      data.galeri.forEach(foto => {
        const item = document.createElement('div');
        item.className = 'gallery-item reveal-on-scroll';
        item.innerHTML = `
          <img src="${foto.url}" alt="${foto.alt || 'Galeri Foto Mempelai'}" loading="lazy">
          <div class="gallery-overlay">
            <span class="gallery-caption">${foto.caption || ''}</span>
          </div>
        `;
        galleryGrid.appendChild(item);
      });
    }
  }

  // Hadiah Digital (Rekening Bank)
  if (data.hadiah) {
    if (data.hadiah.deskripsi) {
      setText('hadiahDesc', data.hadiah.deskripsi);
    }

    if (Array.isArray(data.hadiah.rekening)) {
      const bankContainer = document.getElementById('bankCardsContainer');
      if (bankContainer) {
        bankContainer.innerHTML = '';
        data.hadiah.rekening.forEach(b => {
          const card = document.createElement('div');
          card.className = 'bank-card';
          card.innerHTML = `
            <div class="bank-card-header">
              <span class="bank-name">${b.bank}</span>
              <div class="bank-chip"></div>
            </div>
            <div class="bank-number-row">
              <div class="bank-number">${b.nomor}</div>
              <div class="bank-holder">a.n ${b.atasNama}</div>
            </div>
            <button type="button" class="btn btn-outline btn-sm" data-copy="${b.nomor}" style="color: #FAF6F0; border-color: var(--color-gold-light); margin-top: 10px;">
              <svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
              Salin Nomor Rekening
            </button>
          `;
          bankContainer.appendChild(card);
        });
      }
    }

    // Physical Gift Address
    if (data.hadiah.kadoFisik) {
      const kado = data.hadiah.kadoFisik;
      setText('kadoPenerima', kado.penerima);
      setText('kadoTelepon', kado.telepon);
      setText('kadoAlamat', kado.alamat);
      const copyAddrBtn = document.getElementById('copyAddressBtn');
      if (copyAddrBtn) {
        copyAddrBtn.setAttribute('data-copy', `${kado.penerima} (${kado.telepon}) - ${kado.alamat}`);
      }
    }
  }

  // Closing Families Text
  if (pria && wanita) {
    const famEl = document.querySelector('.closing-families');
    if (famEl) {
      const bapakPria = (pria.orangTua.match(/Bapak\s+([^&,]+)/i) || [])[1] || 'Bambang Wijaya';
      const bapakWanita = (wanita.orangTua.match(/Bapak\s+([^&,]+)/i) || [])[1] || 'Soedirman Hadiningrat';
      famEl.textContent = `Kulawarga Ageng ${bapakPria.trim()} & ${bapakWanita.trim()}`;
    }
  }
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined && text !== null) el.textContent = text;
}

function setLink(id, url, text) {
  const el = document.getElementById(id);
  if (el && url) {
    el.setAttribute('href', url);
    if (text) el.textContent = text;
  }
}

function createGoogleCalendarUrl(cal) {
  const title = encodeURIComponent(cal.title || 'Wedding Event');
  const details = encodeURIComponent(cal.description || '');
  const location = encodeURIComponent(cal.location || '');
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${cal.startDate}/${cal.endDate}&details=${details}&location=${location}`;
}

function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });
}
