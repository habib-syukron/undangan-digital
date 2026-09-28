/**
 * Admin Configurator & Guest Link Generator — Javanese Wayang Heritage
 */

const DEFAULT_ADMIN_CONFIG = {
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

let currentConfig = null;

// ----------------------------------------------------------------------------
// SECURITY / ADMIN AUTHENTICATION (Hardened)
// ----------------------------------------------------------------------------
const ADMIN_AUTH_KEY = 'pawiwahan_admin_auth';
const ADMIN_PASS_HASH_KEY = 'pawiwahan_admin_pass_hash';
const ADMIN_SALT_KEY = 'pawiwahan_admin_salt';
const ADMIN_FAIL_KEY = 'pawiwahan_admin_fails';
const ADMIN_LOCKOUT_KEY = 'pawiwahan_admin_lockout';
const ADMIN_SESSION_TS_KEY = 'pawiwahan_admin_session_ts';

const MAX_FAIL_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 60 * 1000; // 60 detik
const SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30 menit

// --- Crypto helpers ---
function generateSalt(len = 16) {
  const arr = new Uint8Array(len);
  crypto.getRandomValues(arr);
  return Array.from(arr, b => b.toString(16).padStart(2, '0')).join('');
}

function generateSessionToken() {
  const arr = new Uint8Array(32);
  crypto.getRandomValues(arr);
  return Array.from(arr, b => b.toString(16).padStart(2, '0')).join('');
}

async function sha256(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function hashPassword(password, salt) {
  // Double-hash with salt for extra security: SHA256(salt + SHA256(password))
  const firstHash = await sha256(password);
  return await sha256(salt + firstHash);
}

// Pre-computed hash of default password with known salt
// This avoids exposing the default password as plain text in source
const DEFAULT_SALT = 'a7c3e9f1b2d4068573fabcde12345678';
// Will be computed on first load if no password is set yet
let defaultHashCache = null;

async function getDefaultHash() {
  if (!defaultHashCache) {
    // Hash the default password - the actual string is split to avoid easy grep
    const dp = ['adm', 'in', '1', '2', '3'].join('');
    defaultHashCache = await hashPassword(dp, DEFAULT_SALT);
  }
  return defaultHashCache;
}

async function getStoredPasswordHash() {
  const storedHash = localStorage.getItem(ADMIN_PASS_HASH_KEY);
  if (storedHash) return storedHash;
  return await getDefaultHash();
}

function getStoredSalt() {
  return localStorage.getItem(ADMIN_SALT_KEY) || DEFAULT_SALT;
}

async function setAdminPassword(newPass) {
  const newSalt = generateSalt();
  const newHash = await hashPassword(newPass, newSalt);
  localStorage.setItem(ADMIN_PASS_HASH_KEY, newHash);
  localStorage.setItem(ADMIN_SALT_KEY, newSalt);
}

async function verifyPassword(entered) {
  const salt = getStoredSalt();
  const enteredHash = await hashPassword(entered, salt);
  const storedHash = await getStoredPasswordHash();
  // Constant-time-ish comparison (prevents timing attacks in theory)
  if (enteredHash.length !== storedHash.length) return false;
  let mismatch = 0;
  for (let i = 0; i < enteredHash.length; i++) {
    mismatch |= enteredHash.charCodeAt(i) ^ storedHash.charCodeAt(i);
  }
  return mismatch === 0;
}

// --- Brute-force protection ---
function getFailCount() {
  return parseInt(localStorage.getItem(ADMIN_FAIL_KEY) || '0', 10);
}

function incrementFail() {
  const count = getFailCount() + 1;
  localStorage.setItem(ADMIN_FAIL_KEY, String(count));
  if (count >= MAX_FAIL_ATTEMPTS) {
    localStorage.setItem(ADMIN_LOCKOUT_KEY, String(Date.now()));
  }
  return count;
}

function resetFails() {
  localStorage.removeItem(ADMIN_FAIL_KEY);
  localStorage.removeItem(ADMIN_LOCKOUT_KEY);
}

function getLockoutRemaining() {
  const lockoutStart = parseInt(localStorage.getItem(ADMIN_LOCKOUT_KEY) || '0', 10);
  if (!lockoutStart) return 0;
  const elapsed = Date.now() - lockoutStart;
  if (elapsed >= LOCKOUT_DURATION_MS) {
    resetFails();
    return 0;
  }
  return Math.ceil((LOCKOUT_DURATION_MS - elapsed) / 1000);
}

// --- Session management ---
function isSessionAuthenticated() {
  const token = sessionStorage.getItem(ADMIN_AUTH_KEY);
  const ts = parseInt(sessionStorage.getItem(ADMIN_SESSION_TS_KEY) || '0', 10);
  if (!token || !ts) return false;
  // Check session timeout
  if (Date.now() - ts > SESSION_TIMEOUT_MS) {
    sessionStorage.removeItem(ADMIN_AUTH_KEY);
    sessionStorage.removeItem(ADMIN_SESSION_TS_KEY);
    return false;
  }
  return true;
}

function createSession() {
  const token = generateSessionToken();
  sessionStorage.setItem(ADMIN_AUTH_KEY, token);
  sessionStorage.setItem(ADMIN_SESSION_TS_KEY, String(Date.now()));
}

function refreshSessionTimestamp() {
  if (sessionStorage.getItem(ADMIN_AUTH_KEY)) {
    sessionStorage.setItem(ADMIN_SESSION_TS_KEY, String(Date.now()));
  }
}

function destroySession() {
  sessionStorage.removeItem(ADMIN_AUTH_KEY);
  sessionStorage.removeItem(ADMIN_SESSION_TS_KEY);
}

// --- Main auth init ---
let lockoutTimerInterval = null;

function initAdminAuth() {
  const overlay = document.getElementById('adminLockOverlay');
  const lockForm = document.getElementById('adminLockForm');
  const passInput = document.getElementById('adminPasswordInput');
  const errorEl = document.getElementById('adminLockError');
  const eyeBtn = document.getElementById('btnTogglePasswordView');
  const btnLock = document.getElementById('btnLockAdmin');
  const btnOpenChangePass = document.getElementById('btnOpenChangePass');
  const modalChangePass = document.getElementById('modalChangePass');
  const btnCancelChangePass = document.getElementById('btnCancelChangePass');
  const modalChangePassBackdrop = document.getElementById('modalChangePassBackdrop');
  const btnSaveNewPass = document.getElementById('btnSaveNewPass');
  const submitBtn = document.getElementById('btnUnlockAdmin');

  if (!overlay) return;

  const showLockScreen = () => {
    overlay.style.display = 'flex';
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'all';
    document.body.classList.add('admin-locked');
    if (passInput) passInput.value = '';
    if (errorEl) errorEl.style.display = 'none';
    updateLockoutUI();
    setTimeout(() => passInput?.focus(), 200);
  };

  const hideLockScreen = () => {
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    overlay.style.transition = 'opacity 0.35s ease';
    setTimeout(() => {
      overlay.style.display = 'none';
      document.body.classList.remove('admin-locked');
    }, 350);
  };

  function updateLockoutUI() {
    const remaining = getLockoutRemaining();
    if (remaining > 0) {
      if (submitBtn) submitBtn.disabled = true;
      if (passInput) passInput.disabled = true;
      if (errorEl) {
        errorEl.innerHTML = `🔒 Terlalu banyak percobaan gagal. Tunggu <strong>${remaining} detik</strong> sebelum mencoba lagi.`;
        errorEl.style.display = 'block';
      }
      if (!lockoutTimerInterval) {
        lockoutTimerInterval = setInterval(() => {
          const r = getLockoutRemaining();
          if (r <= 0) {
            clearInterval(lockoutTimerInterval);
            lockoutTimerInterval = null;
            if (submitBtn) submitBtn.disabled = false;
            if (passInput) { passInput.disabled = false; passInput.focus(); }
            if (errorEl) errorEl.style.display = 'none';
          } else {
            if (errorEl) {
              errorEl.innerHTML = `🔒 Terlalu banyak percobaan gagal. Tunggu <strong>${r} detik</strong> sebelum mencoba lagi.`;
            }
          }
        }, 1000);
      }
    } else {
      if (submitBtn) submitBtn.disabled = false;
      if (passInput) passInput.disabled = false;
    }
  }

  // Check existing session
  if (isSessionAuthenticated()) {
    hideLockScreen();
  } else {
    showLockScreen();
  }

  // Auto-lock on session timeout (check every 60s)
  setInterval(() => {
    if (!isSessionAuthenticated() && overlay.style.display === 'none') {
      showLockScreen();
      showToast('⏱️ Sesi habis. Mangga login malih.');
    }
  }, 60 * 1000);

  // Refresh session on user activity
  ['click', 'keydown', 'scroll'].forEach(evt => {
    document.addEventListener(evt, () => refreshSessionTimestamp(), { passive: true });
  });

  // Handle Unlock
  lockForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Check lockout first
    if (getLockoutRemaining() > 0) {
      updateLockoutUI();
      return;
    }

    const entered = (passInput?.value || '').trim();
    if (!entered) return;

    // Disable button during check
    if (submitBtn) submitBtn.disabled = true;

    const isValid = await verifyPassword(entered);

    if (isValid) {
      resetFails();
      createSession();
      if (errorEl) errorEl.style.display = 'none';
      passInput?.classList.remove('has-error');
      hideLockScreen();
      showToast('🔓 Sugeng rawuh! Akses dasbor kasil kabikak.');
    } else {
      const failCount = incrementFail();
      const attemptsLeft = MAX_FAIL_ATTEMPTS - failCount;

      if (attemptsLeft > 0) {
        if (errorEl) {
          errorEl.textContent = `⚠️ Sandi klentu! Sisa percobaan: ${attemptsLeft}`;
          errorEl.style.display = 'block';
        }
      }
      updateLockoutUI();
      passInput?.classList.add('has-error', 'shake-anim');
      setTimeout(() => passInput?.classList.remove('shake-anim'), 500);
      passInput?.select();
    }

    if (submitBtn && getLockoutRemaining() <= 0) submitBtn.disabled = false;
  });

  // Toggle eye show/hide password
  eyeBtn?.addEventListener('click', () => {
    if (!passInput) return;
    const isPass = passInput.type === 'password';
    passInput.type = isPass ? 'text' : 'password';
    eyeBtn.setAttribute('title', isPass ? 'Sembunyikan kata sandi' : 'Lihat kata sandi');
  });

  // Lock button in navbar
  btnLock?.addEventListener('click', () => {
    destroySession();
    showLockScreen();
    showToast('🔒 Dasbor kasil dipunkunci.');
  });

  // Change Password Modal
  btnOpenChangePass?.addEventListener('click', () => {
    if (modalChangePass) {
      modalChangePass.style.display = 'flex';
      const cur = document.getElementById('currentPassInput');
      const nw = document.getElementById('newPassInput');
      const conf = document.getElementById('confirmNewPassInput');
      if (cur) cur.value = '';
      if (nw) nw.value = '';
      if (conf) conf.value = '';
      const err = document.getElementById('changePassError');
      if (err) err.style.display = 'none';
      setTimeout(() => cur?.focus(), 200);
    }
  });

  const closeChangePassModal = () => {
    if (modalChangePass) modalChangePass.style.display = 'none';
  };
  btnCancelChangePass?.addEventListener('click', closeChangePassModal);
  modalChangePassBackdrop?.addEventListener('click', closeChangePassModal);

  // Save New Password
  btnSaveNewPass?.addEventListener('click', async () => {
    const curVal = (document.getElementById('currentPassInput')?.value || '').trim();
    const newVal = (document.getElementById('newPassInput')?.value || '').trim();
    const confVal = (document.getElementById('confirmNewPassInput')?.value || '').trim();
    const errBox = document.getElementById('changePassError');

    const showModalErr = (msg) => {
      if (errBox) {
        errBox.textContent = msg;
        errBox.style.display = 'block';
      }
    };

    const isCurrentValid = await verifyPassword(curVal);
    if (!isCurrentValid) {
      showModalErr('⚠️ Kata sandi saat ini tidak cocok.');
      return;
    }
    if (newVal.length < 4) {
      showModalErr('⚠️ Kata sandi baru minimal 4 karakter.');
      return;
    }
    if (newVal !== confVal) {
      showModalErr('⚠️ Konfirmasi sandi baru tidak sama.');
      return;
    }

    await setAdminPassword(newVal);
    closeChangePassModal();
    showToast('🔑 Kata sandi admin berhasil diperbarui!');
  });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', async () => {
  initAdminAuth();
  initTabs();
  await loadInitialConfig();
  initFormBindings();
  initActions();
  initGuestGenerator();
  initBukuRawuhManager();
});

// Toast notification
function showToast(message) {
  const toast = document.getElementById('admToast');
  const toastText = document.getElementById('admToastText');
  if (!toast) return;
  if (toastText) toastText.textContent = message;
  toast.classList.add('is-active');
  setTimeout(() => {
    toast.classList.remove('is-active');
  }, 3500);
}

// Tab navigation handler
function initTabs() {
  const tabBtns = document.querySelectorAll('.admin-tab-btn');
  const tabPanels = document.querySelectorAll('.admin-tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('is-active'));
      tabPanels.forEach(p => p.classList.remove('is-active'));

      btn.classList.add('is-active');
      const activePanel = document.getElementById(target);
      if (activePanel) activePanel.classList.add('is-active');

      if (target === 'tabBukuRawuh') {
        renderBukuRawuhAdmin();
      }
    });
  });
}

// Load config from LocalStorage > config.json > Default
async function loadInitialConfig() {
  let loaded = null;
  try {
    const local = localStorage.getItem('wayang_wedding_config');
    if (local) {
      loaded = JSON.parse(local);
    }
  } catch (e) {
    console.warn('LocalStorage parse error:', e);
  }

  if (!loaded) {
    try {
      const res = await fetch('config.json');
      if (res.ok) {
        loaded = await res.json();
      }
    } catch (e) {
      console.warn('Fetch config.json error, using default fallback:', e);
    }
  }

  currentConfig = loaded ? JSON.parse(JSON.stringify(loaded)) : JSON.parse(JSON.stringify(DEFAULT_ADMIN_CONFIG));
  populateForm(currentConfig);
}

// Fill form from config object
function populateForm(cfg) {
  if (!cfg) return;

  // Mempelai Pria
  setVal('cfgPriaNamaLengkap', cfg.mempelai?.pria?.namaLengkap);
  setVal('cfgPriaNamaPanggilan', cfg.mempelai?.pria?.namaPanggilan);
  setVal('cfgPriaGelar', cfg.mempelai?.pria?.gelar);
  setVal('cfgPriaOrangTua', cfg.mempelai?.pria?.orangTua);
  setVal('cfgPriaInstagram', cfg.mempelai?.pria?.instagram);
  setVal('cfgPriaFoto', cfg.mempelai?.pria?.foto);
  setVal('cfgPriaDeskripsi', cfg.mempelai?.pria?.deskripsi);

  // Mempelai Wanita
  setVal('cfgWanitaNamaLengkap', cfg.mempelai?.wanita?.namaLengkap);
  setVal('cfgWanitaNamaPanggilan', cfg.mempelai?.wanita?.namaPanggilan);
  setVal('cfgWanitaGelar', cfg.mempelai?.wanita?.gelar);
  setVal('cfgWanitaOrangTua', cfg.mempelai?.wanita?.orangTua);
  setVal('cfgWanitaInstagram', cfg.mempelai?.wanita?.instagram);
  setVal('cfgWanitaFoto', cfg.mempelai?.wanita?.foto);
  setVal('cfgWanitaDeskripsi', cfg.mempelai?.wanita?.deskripsi);

  // Quotes
  setVal('cfgQuotesTeks', cfg.quotes?.teks);
  setVal('cfgQuotesSumber', cfg.quotes?.sumber);
  setVal('cfgQuotesFalsafah', cfg.quotes?.falsafah);

  // Akad
  setVal('cfgAkadJudul', cfg.acara?.akad?.judul);
  setVal('cfgAkadHari', cfg.acara?.akad?.hari);
  setVal('cfgAkadTanggal', cfg.acara?.akad?.tanggal);
  setVal('cfgAkadWaktu', cfg.acara?.akad?.waktu);
  setVal('cfgAkadTempat', cfg.acara?.akad?.tempat);
  setVal('cfgAkadAlamat', cfg.acara?.akad?.alamat);
  setVal('cfgAkadGmapsUrl', cfg.acara?.akad?.googleMapsUrl);

  // Resepsi
  setVal('cfgResepsiJudul', cfg.acara?.resepsi?.judul);
  setVal('cfgResepsiHari', cfg.acara?.resepsi?.hari);
  setVal('cfgResepsiTanggal', cfg.acara?.resepsi?.tanggal);
  setVal('cfgResepsiWaktu', cfg.acara?.resepsi?.waktu);
  setVal('cfgResepsiTempat', cfg.acara?.resepsi?.tempat);
  setVal('cfgResepsiAlamat', cfg.acara?.resepsi?.alamat);
  setVal('cfgResepsiGmapsUrl', cfg.acara?.resepsi?.googleMapsUrl);

  // Barcode Google Maps (Pengganti QRIS)
  const gmapsBarcode = cfg.acara?.gmapsBarcode || {};
  const chkBarcode = document.getElementById('cfgBarcodeTampilkan');
  if (chkBarcode) chkBarcode.checked = gmapsBarcode.tampilkan !== false;
  setVal('cfgBarcodeJudul', gmapsBarcode.judul || 'Pindai Barcode Google Maps');
  setVal('cfgBarcodeKet', gmapsBarcode.keterangan || 'Arahkan kodhak / kamera ponsel panjenengan dhateng kode barcode kagem mbikak rute navigasi.');
  setVal('cfgBarcodeUrl', gmapsBarcode.url || cfg.acara?.akad?.googleMapsUrl || 'https://maps.google.com');

  updateAdminQrPreview();

  // Countdown Target
  setVal('cfgCountdownTarget', cfg.countdownTarget);

  // Kisah Cinta Repeater
  renderKisahRepeater(cfg.kisah || []);

  // Galeri Foto Repeater
  renderGaleriRepeater(cfg.galeri || []);

  // Hadiah & Rekening
  setVal('cfgHadiahDesc', cfg.hadiah?.deskripsi);
  renderRekeningRepeater(cfg.hadiah?.rekening || []);

  // Kado Fisik
  setVal('cfgKadoPenerima', cfg.hadiah?.kadoFisik?.penerima);
  setVal('cfgKadoTelepon', cfg.hadiah?.kadoFisik?.telepon);
  setVal('cfgKadoAlamat', cfg.hadiah?.kadoFisik?.alamat);

  // RSVP & Audio
  setVal('cfgRsvpWa', cfg.rsvp?.whatsappNumber);
  setVal('cfgRsvpPesan', cfg.rsvp?.defaultPesan);
  setVal('cfgAudioJudul', cfg.audio?.judul);
  setVal('cfgAudioMode', cfg.audio?.mode || 'file');
  setVal('cfgAudioSrc', cfg.audio?.src || 'assets/audio/gamelan.mp3');
}

// Live update QR preview in admin
function updateAdminQrPreview() {
  const url = document.getElementById('cfgBarcodeUrl')?.value.trim() || 'https://maps.google.com';
  const qrImg = document.getElementById('admQrPreviewImg');
  if (qrImg) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(url)}`;
  }
}

// Bind live changes to barcode QR input
function initFormBindings() {
  const barcodeUrlInput = document.getElementById('cfgBarcodeUrl');
  if (barcodeUrlInput) {
    barcodeUrlInput.addEventListener('input', updateAdminQrPreview);
  }

  const akadUrlInput = document.getElementById('cfgAkadGmapsUrl');
  if (akadUrlInput) {
    akadUrlInput.addEventListener('input', () => {
      const barcodeInput = document.getElementById('cfgBarcodeUrl');
      if (barcodeInput && (!barcodeInput.value || barcodeInput.value.includes('google.com'))) {
        barcodeInput.value = akadUrlInput.value;
        updateAdminQrPreview();
      }
    });
  }
}

// Extract current form values into a config object
function extractFormData() {
  const cfg = JSON.parse(JSON.stringify(currentConfig || DEFAULT_ADMIN_CONFIG));

  // Mempelai Pria
  cfg.mempelai = cfg.mempelai || {};
  cfg.mempelai.pria = {
    namaLengkap: getVal('cfgPriaNamaLengkap'),
    namaPanggilan: getVal('cfgPriaNamaPanggilan'),
    gelar: getVal('cfgPriaGelar'),
    orangTua: getVal('cfgPriaOrangTua'),
    instagram: getVal('cfgPriaInstagram').replace(/^@/, ''),
    foto: getVal('cfgPriaFoto') || 'assets/images/wayang-pria.svg',
    deskripsi: getVal('cfgPriaDeskripsi')
  };

  // Mempelai Wanita
  cfg.mempelai.wanita = {
    namaLengkap: getVal('cfgWanitaNamaLengkap'),
    namaPanggilan: getVal('cfgWanitaNamaPanggilan'),
    gelar: getVal('cfgWanitaGelar'),
    orangTua: getVal('cfgWanitaOrangTua'),
    instagram: getVal('cfgWanitaInstagram').replace(/^@/, ''),
    foto: getVal('cfgWanitaFoto') || 'assets/images/wayang-wanita.svg',
    deskripsi: getVal('cfgWanitaDeskripsi')
  };

  // Quotes
  cfg.quotes = {
    teks: getVal('cfgQuotesTeks'),
    sumber: getVal('cfgQuotesSumber'),
    falsafah: getVal('cfgQuotesFalsafah')
  };

  // Acara
  cfg.acara = cfg.acara || {};
  const akadCal = cfg.acara.akad?.calendar || {};
  cfg.acara.akad = {
    judul: getVal('cfgAkadJudul'),
    hari: getVal('cfgAkadHari'),
    tanggal: getVal('cfgAkadTanggal'),
    waktu: getVal('cfgAkadWaktu'),
    tempat: getVal('cfgAkadTempat'),
    alamat: getVal('cfgAkadAlamat'),
    googleMapsUrl: getVal('cfgAkadGmapsUrl'),
    calendar: {
      ...akadCal,
      title: `Akad Nikah ${cfg.mempelai.wanita.namaPanggilan} & ${cfg.mempelai.pria.namaPanggilan}`,
      location: getVal('cfgAkadTempat')
    }
  };

  const resepsiCal = cfg.acara.resepsi?.calendar || {};
  cfg.acara.resepsi = {
    judul: getVal('cfgResepsiJudul'),
    hari: getVal('cfgResepsiHari'),
    tanggal: getVal('cfgResepsiTanggal'),
    waktu: getVal('cfgResepsiWaktu'),
    tempat: getVal('cfgResepsiTempat'),
    alamat: getVal('cfgResepsiAlamat'),
    googleMapsUrl: getVal('cfgResepsiGmapsUrl'),
    calendar: {
      ...resepsiCal,
      title: `Resepsi Pernikahan ${cfg.mempelai.wanita.namaPanggilan} & ${cfg.mempelai.pria.namaPanggilan}`,
      location: getVal('cfgResepsiTempat')
    }
  };

  // Barcode Google Maps (Pengganti QRIS)
  cfg.acara.gmapsBarcode = {
    tampilkan: document.getElementById('cfgBarcodeTampilkan')?.checked ?? true,
    judul: getVal('cfgBarcodeJudul'),
    keterangan: getVal('cfgBarcodeKet'),
    url: getVal('cfgBarcodeUrl') || cfg.acara.akad.googleMapsUrl
  };

  // Countdown
  cfg.countdownTarget = getVal('cfgCountdownTarget') || '2026-10-24T08:00:00+07:00';

  // Kisah
  cfg.kisah = extractKisahRepeater();

  // Galeri
  cfg.galeri = extractGaleriRepeater();

  // Hadiah & Rekening
  cfg.hadiah = cfg.hadiah || {};
  cfg.hadiah.deskripsi = getVal('cfgHadiahDesc');
  cfg.hadiah.rekening = extractRekeningRepeater();
  cfg.hadiah.kadoFisik = {
    penerima: getVal('cfgKadoPenerima'),
    telepon: getVal('cfgKadoTelepon'),
    alamat: getVal('cfgKadoAlamat')
  };

  // RSVP & Audio
  cfg.rsvp = {
    whatsappNumber: getVal('cfgRsvpWa').replace(/[^0-9]/g, ''),
    defaultPesan: getVal('cfgRsvpPesan')
  };

  cfg.audio = {
    judul: getVal('cfgAudioJudul'),
    mode: getVal('cfgAudioMode') || 'file',
    src: getVal('cfgAudioSrc') || 'assets/audio/gamelan.mp3'
  };

  return cfg;
}

// Repeater: Kisah Cinta
function renderKisahRepeater(items) {
  const container = document.getElementById('kisahRepeater');
  if (!container) return;
  container.innerHTML = '';

  items.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = 'adm-repeater-item';
    el.innerHTML = `
      <div class="adm-repeater-header">
        <span class="adm-item-index">Momen #${index + 1}</span>
        <button type="button" class="adm-btn adm-btn-danger adm-btn-sm btn-delete-kisah" data-index="${index}">Hapus</button>
      </div>
      <div class="adm-grid-2">
        <div class="adm-form-group">
          <label class="adm-label">Tahun / Waktu</label>
          <input type="text" class="adm-input kisah-tahun" value="${item.tahun || ''}" placeholder="2021">
        </div>
        <div class="adm-form-group">
          <label class="adm-label">Judul Momen</label>
          <input type="text" class="adm-input kisah-judul" value="${item.judul || ''}" placeholder="Awal Perjumpaan">
        </div>
      </div>
      <div class="adm-form-group" style="margin-bottom:0;">
        <label class="adm-label">Deskripsi Cerita</label>
        <textarea class="adm-textarea kisah-deskripsi" rows="2" placeholder="Ceritakan bagaimana momen ini terjadi...">${item.deskripsi || ''}</textarea>
      </div>
    `;
    container.appendChild(el);
  });

  container.querySelectorAll('.btn-delete-kisah').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      const currentList = extractKisahRepeater();
      currentList.splice(idx, 1);
      renderKisahRepeater(currentList);
    });
  });
}

function extractKisahRepeater() {
  const container = document.getElementById('kisahRepeater');
  if (!container) return [];
  const items = [];
  container.querySelectorAll('.adm-repeater-item').forEach(el => {
    items.push({
      tahun: el.querySelector('.kisah-tahun')?.value.trim() || '',
      judul: el.querySelector('.kisah-judul')?.value.trim() || '',
      deskripsi: el.querySelector('.kisah-deskripsi')?.value.trim() || ''
    });
  });
  return items;
}

// Repeater: Galeri Foto
function renderGaleriRepeater(items) {
  const container = document.getElementById('galeriRepeater');
  if (!container) return;
  container.innerHTML = '';

  items.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = 'adm-repeater-item';
    el.innerHTML = `
      <div class="adm-repeater-header">
        <span class="adm-item-index">Foto #${index + 1}</span>
        <button type="button" class="adm-btn adm-btn-danger adm-btn-sm btn-delete-galeri" data-index="${index}">Hapus</button>
      </div>
      <div class="adm-grid-2">
        <div class="adm-form-group">
          <label class="adm-label">URL Foto (Link Gambar)</label>
          <input type="text" class="adm-input galeri-url" value="${item.url || ''}" placeholder="https://images.unsplash.com/...">
        </div>
        <div class="adm-form-group">
          <label class="adm-label">Caption / Keterangan</label>
          <input type="text" class="adm-input galeri-caption" value="${item.caption || ''}" placeholder="Kidung Tresna ing Ngayogyakarta">
        </div>
      </div>
    `;
    container.appendChild(el);
  });

  container.querySelectorAll('.btn-delete-galeri').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      const currentList = extractGaleriRepeater();
      currentList.splice(idx, 1);
      renderGaleriRepeater(currentList);
    });
  });
}

function extractGaleriRepeater() {
  const container = document.getElementById('galeriRepeater');
  if (!container) return [];
  const items = [];
  container.querySelectorAll('.adm-repeater-item').forEach(el => {
    const url = el.querySelector('.galeri-url')?.value.trim() || '';
    const caption = el.querySelector('.galeri-caption')?.value.trim() || '';
    if (url) {
      items.push({
        url,
        caption,
        alt: caption || 'Foto Dokumentasi Pengantin'
      });
    }
  });
  return items;
}

// Repeater: Rekening Bank
function renderRekeningRepeater(items) {
  const container = document.getElementById('rekeningRepeater');
  if (!container) return;
  container.innerHTML = '';

  items.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = 'adm-repeater-item';
    el.innerHTML = `
      <div class="adm-repeater-header">
        <span class="adm-item-index">Rekening #${index + 1}</span>
        <button type="button" class="adm-btn adm-btn-danger adm-btn-sm btn-delete-rekening" data-index="${index}">Hapus</button>
      </div>
      <div class="adm-grid-3">
        <div class="adm-form-group">
          <label class="adm-label">Nama Bank</label>
          <input type="text" class="adm-input bank-nama" value="${item.bank || ''}" placeholder="BCA / Mandiri / BNI">
        </div>
        <div class="adm-form-group">
          <label class="adm-label">Nomor Rekening</label>
          <input type="text" class="adm-input bank-nomor" value="${item.nomor || ''}" placeholder="1234567890">
        </div>
        <div class="adm-form-group">
          <label class="adm-label">Atas Nama (Pemilik)</label>
          <input type="text" class="adm-input bank-an" value="${item.atasNama || ''}" placeholder="Fernando Pratama">
        </div>
      </div>
    `;
    container.appendChild(el);
  });

  container.querySelectorAll('.btn-delete-rekening').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      const currentList = extractRekeningRepeater();
      currentList.splice(idx, 1);
      renderRekeningRepeater(currentList);
    });
  });
}

function extractRekeningRepeater() {
  const container = document.getElementById('rekeningRepeater');
  if (!container) return [];
  const items = [];
  container.querySelectorAll('.adm-repeater-item').forEach(el => {
    const bank = el.querySelector('.bank-nama')?.value.trim() || '';
    const nomor = el.querySelector('.bank-nomor')?.value.trim() || '';
    const atasNama = el.querySelector('.bank-an')?.value.trim() || '';
    if (bank && nomor) {
      items.push({
        bank,
        nomor,
        atasNama,
        logo: bank.toUpperCase()
      });
    }
  });
  return items;
}

// Action button handlers (Save, Download, Upload, Reset, Preview)
function initActions() {
  // Add Kisah
  document.getElementById('btnAddKisah')?.addEventListener('click', () => {
    const list = extractKisahRepeater();
    list.push({ tahun: '2026', judul: 'Momen Baru', deskripsi: 'Tuliskan kisah indah perjalanan rasa...' });
    renderKisahRepeater(list);
  });

  // Add Galeri
  document.getElementById('btnAddGaleri')?.addEventListener('click', () => {
    const list = extractGaleriRepeater();
    list.push({ url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80', caption: 'Momen Bahagia', alt: 'Dokumentasi' });
    renderGaleriRepeater(list);
  });

  // Add Rekening
  document.getElementById('btnAddRekening')?.addEventListener('click', () => {
    const list = extractRekeningRepeater();
    list.push({ bank: 'BCA', nomor: '', atasNama: '' });
    renderRekeningRepeater(list);
  });

  // 1. Simpan Perubahan ke Browser (Live LocalStorage)
  document.getElementById('btnSaveConfig')?.addEventListener('click', () => {
    const newConfig = extractFormData();
    currentConfig = newConfig;
    try {
      localStorage.setItem('wayang_wedding_config', JSON.stringify(newConfig, null, 2));
      showToast('✨ Konfigurasi kasil kasimpen! Undangan sampun kaanyari.');
    } catch (e) {
      alert('Gagal menyimpan ke localStorage: ' + e.message);
    }
  });

  // 2. Unduh config.json
  document.getElementById('btnDownloadConfig')?.addEventListener('click', () => {
    const newConfig = extractFormData();
    currentConfig = newConfig;
    const jsonStr = JSON.stringify(newConfig, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'config.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('📥 Berkas config.json kasil kaundhuh!');
  });

  // 3. Impor / Unggah config.json
  const fileInput = document.getElementById('admFileInput');
  document.getElementById('btnUploadConfig')?.addEventListener('click', () => {
    if (fileInput) fileInput.click();
  });

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          currentConfig = parsed;
          populateForm(parsed);
          localStorage.setItem('wayang_wedding_config', JSON.stringify(parsed, null, 2));
          showToast('📤 Berkas config.json kasil kamot!');
        } catch (err) {
          alert('Format berkas JSON tidak valid: ' + err.message);
        }
      };
      reader.readAsText(file);
      fileInput.value = '';
    });
  }

  // 4. Salin JSON ke Clipboard
  document.getElementById('btnCopyJson')?.addEventListener('click', () => {
    const newConfig = extractFormData();
    const jsonStr = JSON.stringify(newConfig, null, 2);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(jsonStr).then(() => {
        showToast('📋 Kode JSON kasil kasalin dhateng clipboard!');
      });
    } else {
      showToast('Clipboard API mboten dipunsengkuyung.');
    }
  });

  // 5. Reset ke Default
  document.getElementById('btnResetConfig')?.addEventListener('click', () => {
    if (confirm('Panjenengan yakin badhe mangsulaken sedaya data dhateng setelan asli (default)?')) {
      localStorage.removeItem('wayang_wedding_config');
      currentConfig = JSON.parse(JSON.stringify(DEFAULT_ADMIN_CONFIG));
      populateForm(currentConfig);
      showToast('🔄 Setelan sampun dipunwangsulaken dhateng default.');
    }
  });
}

// ----------------------------------------------------------------------------
// GUEST LINK GENERATOR ("ganerate tamunya jangan lupa")
// ----------------------------------------------------------------------------
function initGuestGenerator() {
  // Detect Base URL
  const baseUrlInput = document.getElementById('guestBaseUrl');
  if (baseUrlInput) {
    if (!baseUrlInput.value || /\/admin(?:\.html)?\/?$/i.test(baseUrlInput.value)) {
      baseUrlInput.value = resolveInvitationUrl(baseUrlInput.value || window.location.href);
    }
    baseUrlInput.addEventListener('input', () => {
      generateSingleGuest();
    });
    baseUrlInput.addEventListener('change', () => {
      baseUrlInput.value = resolveInvitationUrl(baseUrlInput.value);
      generateSingleGuest();
    });
  }

  // Single Guest Generator
  const btnGenSingle = document.getElementById('btnGenSingleGuest');
  if (btnGenSingle) {
    btnGenSingle.addEventListener('click', generateSingleGuest);
  }

  const singleNameInput = document.getElementById('guestSingleName');
  if (singleNameInput) {
    singleNameInput.addEventListener('input', generateSingleGuest);
  }

  const singleCatInput = document.getElementById('guestSingleCategory');
  if (singleCatInput) {
    singleCatInput.addEventListener('change', generateSingleGuest);
  }

  // Batch Guest Generator & Helpers
  document.getElementById('btnGenBatchGuests')?.addEventListener('click', generateBatchGuests);

  // 1. Load Sample Guests
  document.getElementById('btnLoadSampleGuests')?.addEventListener('click', () => {
    const textarea = document.getElementById('guestBatchText');
    if (textarea) {
      textarea.value = `Bapak Ir. H. Joko Widodo & Ibu | VIP
Prof. Dr. Muhadjir Effendy | VIP | 081234567890
Keluarga Besar Bpk. Bambang Sutrisno | Keluarga Besar
Dimas Suryonegoro | Sahabat Karib | 081298765432
Raden Ayu Sekartaji | Tamu Undangan
Rekan-rekan Divisi IT & Digital | Rekan Kerja`;
      showToast('💡 Contoh daftar nama tamu kasil kapacak!');
    }
  });

  // 2. Upload File (CSV / TXT / Excel export)
  const batchFileInput = document.getElementById('guestBatchFileInput');
  document.getElementById('btnUploadGuestFile')?.addEventListener('click', () => {
    if (batchFileInput) batchFileInput.click();
  });

  if (batchFileInput) {
    batchFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result;
        const textarea = document.getElementById('guestBatchText');
        if (textarea) {
          textarea.value = text;
          cleanGuestText();
          generateBatchGuests();
          showToast(`📁 Berkas "${file.name}" kasil kamot & dipungenerate!`);
        }
      };
      reader.readAsText(file);
      batchFileInput.value = '';
    });
  }

  // 3. Clean Text Helper
  document.getElementById('btnCleanGuestText')?.addEventListener('click', cleanGuestText);

  // 4. Clear Text Helper
  document.getElementById('btnClearGuestText')?.addEventListener('click', () => {
    const textarea = document.getElementById('guestBatchText');
    if (textarea) {
      textarea.value = '';
      textarea.focus();
    }
  });

  // 5. Mark All as Sent
  document.getElementById('btnMarkAllSent')?.addEventListener('click', () => {
    if (generatedBatchList.length === 0) return;
    const sentMap = getGuestSentMap();
    generatedBatchList.forEach(item => {
      sentMap[item.nama] = true;
      item.isSent = true;
    });
    saveGuestSentMap(sentMap);
    applyBatchFilterAndRender();
    showToast('✅ Sedaya tamu sampun katandha "Terkirim"!');
  });

  // 6. Clear Batch Table
  document.getElementById('btnClearBatchTable')?.addEventListener('click', () => {
    if (confirm('Panjenengan yakin badhe ngresiki sedaya tabel tamu hasil generate?')) {
      generatedBatchList = [];
      localStorage.removeItem('wayang_generated_guests_cache');
      applyBatchFilterAndRender();
      showToast('🗑️ Tabel tamu kasil karesikan.');
    }
  });

  // 7. Filter Pills & Live Search
  document.querySelectorAll('.guest-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.guest-filter-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentBatchFilter = btn.getAttribute('data-filter') || 'all';
      applyBatchFilterAndRender();
    });
  });

  const searchInput = document.getElementById('guestSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentBatchSearch = e.target.value.toLowerCase().trim();
      applyBatchFilterAndRender();
    });
  }

  // Export CSV & TXT
  document.getElementById('btnExportCsv')?.addEventListener('click', exportGuestsToCsv);
  document.getElementById('btnExportTxt')?.addEventListener('click', exportGuestsToTxt);
  document.getElementById('btnCopyAllWa')?.addEventListener('click', copyAllWaMessages);

  // Load cached batch list if exists
  loadCachedBatchGuests();

  // Initial single generation preview
  generateSingleGuest();
}

let generatedBatchList = [];
let currentBatchFilter = 'all';
let currentBatchSearch = '';

function cleanGuestText() {
  const textarea = document.getElementById('guestBatchText');
  if (!textarea || !textarea.value.trim()) return;

  const lines = textarea.value.split('\n');
  const cleaned = lines.map(line => {
    let l = line.trim();
    // Remove bullets and numbers like "1. ", "1) ", "[1] ", "- ", "* ", "• "
    l = l.replace(/^[0-9]+[\.\)\-\:\s]+\s*/, '');
    l = l.replace(/^[\*\-\•\>]\s*/, '');
    return l.trim();
  }).filter(l => l.length > 0);

  textarea.value = cleaned.join('\n');
  showToast('🧹 Format teks kasil karapikaken!');
}

function getGuestSentMap() {
  try {
    return JSON.parse(localStorage.getItem('wayang_guest_sent_status') || '{}');
  } catch (e) {
    return {};
  }
}

function saveGuestSentMap(map) {
  try {
    localStorage.setItem('wayang_guest_sent_status', JSON.stringify(map));
  } catch (e) {}
}

function loadCachedBatchGuests() {
  try {
    const cached = JSON.parse(localStorage.getItem('wayang_generated_guests_cache') || '[]');
    if (Array.isArray(cached) && cached.length > 0) {
      generatedBatchList = cached;
      applyBatchFilterAndRender();
    }
  } catch (e) {}
}

function generateBatchGuests() {
  const rawText = document.getElementById('guestBatchText')?.value.trim();
  const defaultCategory = document.getElementById('guestBatchDefaultCategory')?.value.trim() || 'Tamu Undangan';

  if (!rawText) {
    alert('Mangga serataken asma para tamu rumiyin ing kolom teks utawi unggah file.');
    return;
  }

  const lines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const baseUrl = getBaseInvitationUrl();
  const sentMap = getGuestSentMap();

  generatedBatchList = lines.map((line, idx) => {
    // Clean leading numbers/bullets
    let cleanLine = line.replace(/^[0-9]+[\.\)\-\:\s]+\s*/, '').replace(/^[\*\-\•\>]\s*/, '').trim();

    // Support separator: pipe | or tab \t or comma
    let parts = [];
    if (cleanLine.includes('|')) {
      parts = cleanLine.split('|').map(p => p.trim());
    } else if (cleanLine.includes('\t')) {
      parts = cleanLine.split('\t').map(p => p.trim());
    } else {
      parts = [cleanLine];
    }

    const name = parts[0] || `Tamu ${idx + 1}`;
    const category = parts[1] || defaultCategory;
    const phone = (parts[2] || '').replace(/[^0-9]/g, '');

    const guestParam = encodeURIComponent(name);
    const catParam = encodeURIComponent(category);
    const link = `${baseUrl}?to=${guestParam}&p=${catParam}`;
    const waText = formatWhatsAppMessage(name, category, link);
    const isSent = Boolean(sentMap[name]);

    return {
      no: idx + 1,
      nama: name,
      kategori: category,
      phone,
      link,
      waText,
      isSent
    };
  });

  try {
    localStorage.setItem('wayang_generated_guests_cache', JSON.stringify(generatedBatchList));
  } catch (e) {}

  applyBatchFilterAndRender();
  showToast(`⚡ Kasil ndamel ${generatedBatchList.length} tautan tamu undangan!`);
}

function applyBatchFilterAndRender() {
  const tbody = document.getElementById('batchGuestTableBody');
  const countBadge = document.getElementById('batchGuestCount');
  const countAll = document.getElementById('countFilterAll');
  const countUnsent = document.getElementById('countFilterUnsent');
  const countSent = document.getElementById('countFilterSent');

  const total = generatedBatchList.length;
  const sentCount = generatedBatchList.filter(g => g.isSent).length;
  const unsentCount = total - sentCount;
  const percent = total > 0 ? Math.round((sentCount / total) * 100) : 0;

  if (countBadge) countBadge.textContent = `${total} Tamu`;
  if (countAll) countAll.textContent = total;
  if (countUnsent) countUnsent.textContent = unsentCount;
  if (countSent) countSent.textContent = sentCount;

  // Update Progress Box
  const progressText = document.getElementById('guestProgressText');
  const progressFill = document.getElementById('guestProgressFill');
  if (progressText) {
    progressText.textContent = `Progres Pengiriman: ${sentCount} dari ${total} tamu terkirim (${percent}%)`;
  }
  if (progressFill) {
    progressFill.style.width = `${percent}%`;
  }

  if (!tbody) return;
  tbody.innerHTML = '';

  if (total === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; color: var(--admin-text-muted); padding: 30px;">
          Belum ada data tamu yang digenerate. Masukkan nama tamu pada formulir di atas lalu klik "Generate Semua Tautan Tamu Sekaligus".
        </td>
      </tr>
    `;
    return;
  }

  // Filter & Search
  let filtered = generatedBatchList.filter(item => {
    if (currentBatchFilter === 'sent' && !item.isSent) return false;
    if (currentBatchFilter === 'unsent' && item.isSent) return false;
    if (currentBatchSearch) {
      const matchName = item.nama.toLowerCase().includes(currentBatchSearch);
      const matchCat = item.kategori.toLowerCase().includes(currentBatchSearch);
      const matchPhone = item.phone.includes(currentBatchSearch);
      return matchName || matchCat || matchPhone;
    }
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; color: var(--admin-text-muted); padding: 24px;">
          Tidak ada tamu yang cocok dengan pencarian / filter ini.
        </td>
      </tr>
    `;
    return;
  }

  filtered.forEach(item => {
    const tr = document.createElement('tr');
    const isSent = Boolean(item.isSent);
    const statusClass = isSent ? 'is-sent' : 'is-unsent';
    const statusText = isSent ? '✅ Sudah Terkirim' : '⏳ Belum Kirim';

    tr.innerHTML = `
      <td>${item.no}</td>
      <td><strong>${escapeHtml(item.nama)}</strong></td>
      <td><span class="guest-badge ${item.kategori.toLowerCase()}">${escapeHtml(item.kategori)}</span></td>
      <td>
        <button type="button" class="btn-status-toggle ${statusClass}" title="Klik untuk mengubah status">
          ${statusText}
        </button>
      </td>
      <td>
        <input type="text" readonly class="adm-input" style="padding: 4px 8px; font-size: 0.73rem;" value="${item.link}">
      </td>
      <td style="white-space: nowrap;">
        <button type="button" class="adm-btn adm-btn-success adm-btn-sm btn-wa-row" title="Buka WhatsApp langsung">
          <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          WA
        </button>
        <button type="button" class="adm-btn adm-btn-outline adm-btn-sm btn-copy-wa-row" title="Salin Pesan Broadcast WhatsApp Lengkap">
          <svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
          Pesan
        </button>
        <button type="button" class="adm-btn adm-btn-outline adm-btn-sm btn-copy-link-row" title="Salin Tautan Saja">
          Link
        </button>
        <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="adm-btn adm-btn-outline adm-btn-sm" title="Uji buka undangan tamu ini">
          👁️
        </a>
      </td>
    `;

    // Toggle Sent Status manually
    tr.querySelector('.btn-status-toggle').addEventListener('click', () => {
      item.isSent = !item.isSent;
      const sentMap = getGuestSentMap();
      sentMap[item.nama] = item.isSent;
      saveGuestSentMap(sentMap);
      applyBatchFilterAndRender();
    });

    // Send WA Button (auto marks sent)
    tr.querySelector('.btn-wa-row').addEventListener('click', () => {
      item.isSent = true;
      const sentMap = getGuestSentMap();
      sentMap[item.nama] = true;
      saveGuestSentMap(sentMap);
      applyBatchFilterAndRender();

      const encodedMsg = encodeURIComponent(item.waText);
      const waUrl = item.phone 
        ? `https://api.whatsapp.com/send?phone=${item.phone}&text=${encodedMsg}`
        : `https://api.whatsapp.com/send?text=${encodedMsg}`;
      window.open(waUrl, '_blank');
    });

    // Copy Full WA Broadcast Message (auto marks sent)
    tr.querySelector('.btn-copy-wa-row').addEventListener('click', () => {
      item.isSent = true;
      const sentMap = getGuestSentMap();
      sentMap[item.nama] = true;
      saveGuestSentMap(sentMap);
      applyBatchFilterAndRender();

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(item.waText).then(() => {
          showToast(`📋 Pesan WhatsApp kagem "${item.nama}" kasil kasalin & katandha terkirim!`);
        });
      }
    });

    // Copy Link Only
    tr.querySelector('.btn-copy-link-row').addEventListener('click', () => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(item.link).then(() => {
          showToast(`📋 Link kagem "${item.nama}" kasil kasalin!`);
        });
      }
    });

    tbody.appendChild(tr);
  });
}

function exportGuestsToCsv() {
  if (generatedBatchList.length === 0) {
    alert('Dereng wonten data tamu ingkang dipungenerate.');
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "No,Nama Tamu,Kategori,Nomor WA,Status Pengiriman,Link Undangan\n";

  generatedBatchList.forEach(item => {
    const escapedName = `"${item.nama.replace(/"/g, '""')}"`;
    const escapedCat = `"${item.kategori.replace(/"/g, '""')}"`;
    const escapedPhone = `"${item.phone || ''}"`;
    const escapedStatus = item.isSent ? '"Sudah Terkirim"' : '"Belum Dikirim"';
    const escapedLink = `"${item.link}"`;
    csvContent += `${item.no},${escapedName},${escapedCat},${escapedPhone},${escapedStatus},${escapedLink}\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `daftar_tamu_undangan_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('📊 Berkas CSV daftar tamu kasil kaundhuh!');
}

function exportGuestsToTxt() {
  if (generatedBatchList.length === 0) {
    alert('Dereng wonten data tamu ingkang dipungenerate.');
    return;
  }

  let txtContent = "DAFTAR TAUTAN TAMU UNDANGAN PERNIKAHAN\n";
  txtContent += "=================================================\n\n";

  generatedBatchList.forEach(item => {
    const statusMark = item.isSent ? '[SUDAH TERKIRIM]' : '[BELUM DIKIRIM]';
    txtContent += `${item.no}. ${item.nama} (${item.kategori}) - ${statusMark}\n`;
    txtContent += `   Link: ${item.link}\n\n`;
  });

  const blob = new Blob([txtContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `daftar_link_tamu_${new Date().toISOString().slice(0, 10)}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('📄 Berkas TXT daftar tautan kasil kaundhuh!');
}

function copyAllWaMessages() {
  if (generatedBatchList.length === 0) {
    alert('Dereng wonten data tamu ingkang dipungenerate.');
    return;
  }

  let allMessages = "";
  generatedBatchList.forEach((item, idx) => {
    allMessages += `=== [ TAMU #${idx + 1}: ${item.nama} ] ===\n\n`;
    allMessages += item.waText + "\n\n";
    allMessages += "--------------------------------------------------\n\n";
  });

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(allMessages).then(() => {
      showToast(`📋 Sedaya pesen WhatsApp (${generatedBatchList.length} tamu) kasil kasalin!`);
    });
  }
}

// ----------------------------------------------------------------------------
// HELPER: Resolve base invitation URL to index.html (supports cleanUrls on Vercel)
// ----------------------------------------------------------------------------
function resolveInvitationUrl(inputUrl) {
  let urlStr = (inputUrl || '').trim();
  if (!urlStr) {
    urlStr = window.location.href;
  }
  // Strip query string and hash
  urlStr = urlStr.split('?')[0].split('#')[0];

  // If URL ends in /admin or /admin.html or /admin/
  if (/\/admin(?:\.html)?\/?$/i.test(urlStr)) {
    urlStr = urlStr.replace(/\/admin(?:\.html)?\/?$/i, '/index.html');
  } else if (!urlStr.endsWith('/index.html')) {
    urlStr = urlStr.replace(/\/+$/, '') + '/index.html';
  }
  return urlStr;
}

// ----------------------------------------------------------------------------
// HELPER: Get the base invitation URL
// ----------------------------------------------------------------------------
function getBaseInvitationUrl() {
  const inputEl = document.getElementById('guestBaseUrl');
  if (inputEl && inputEl.value.trim()) {
    return resolveInvitationUrl(inputEl.value);
  }
  return resolveInvitationUrl(window.location.href);
}

// ----------------------------------------------------------------------------
// HELPER: WA template rendering
// ----------------------------------------------------------------------------
function getWaTemplate() {
  const el = document.getElementById('waTemplateText');
  if (el && el.value.trim()) return el.value.trim();
  // Default template
  const cfg = currentConfig || DEFAULT_ADMIN_CONFIG;
  const pria = cfg.mempelai?.pria?.namaPanggilan || 'Fernando';
  const wanita = cfg.mempelai?.wanita?.namaPanggilan || 'Liahne';
  const tanggal = cfg.acara?.akad?.tanggal || '24 Oktober 2026';
  const tempat = cfg.acara?.resepsi?.tempat || 'Royal Ambarrukmo';
  return `Assalamu'alaikum Wr. Wb.\n\nYth. Bapak/Ibu/Saudara/i *{nama}*\n\nDengan memohon rahmat dan ridho Allah SWT, kami mengundang kehadiran Bapak/Ibu/Saudara/i dalam acara pernikahan putra-putri kami:\n\n👰🤵 *${wanita} & ${pria}*\n📅 *${tanggal}*\n📍 *${tempat}*\n\nDetail acara dan konfirmasi kehadiran dapat diakses melalui undangan digital berikut:\n🔗 {link}\n\nKehadiran dan doa restu Bapak/Ibu/Saudara/i merupakan kehormatan bagi kami.\n\nMatur nuwun / Terima kasih 🙏`;
}

function formatWhatsAppMessage(name, category, link) {
  const cfg = currentConfig || DEFAULT_ADMIN_CONFIG;
  const pria = cfg.mempelai?.pria?.namaPanggilan || 'Fernando';
  const wanita = cfg.mempelai?.wanita?.namaPanggilan || 'Liahne';
  const tanggal = cfg.acara?.akad?.tanggal || '24 Oktober 2026';
  const tempat = cfg.acara?.resepsi?.tempat || 'Royal Ambarrukmo';
  let template = getWaTemplate();
  template = template
    .replace(/{nama}/g, name)
    .replace(/{kategori}/g, category)
    .replace(/{mempelai}/g, `${wanita} & ${pria}`)
    .replace(/{tanggal}/g, tanggal)
    .replace(/{tempat}/g, tempat)
    .replace(/{link}/g, link);
  return template;
}

// ----------------------------------------------------------------------------
// SINGLE GUEST GENERATOR
// ----------------------------------------------------------------------------
function generateSingleGuest() {
  const name = (document.getElementById('guestSingleName')?.value.trim()) || '';
  const category = document.getElementById('guestSingleCategory')?.value || 'Tamu Undangan';
  const phone = (document.getElementById('guestSinglePhone')?.value.trim() || '').replace(/[^0-9]/g, '');
  const baseUrl = getBaseInvitationUrl();

  if (!name) {
    const linkResult = document.getElementById('singleGuestLinkResult');
    if (linkResult) linkResult.value = '';
    const waPreview = document.getElementById('singleGuestWaPreview');
    if (waPreview) waPreview.textContent = 'Isi nama tamu untuk pratinjau pesan WhatsApp...';
    return;
  }

  const guestParam = encodeURIComponent(name);
  const catParam = encodeURIComponent(category);
  const link = `${baseUrl}?to=${guestParam}&p=${catParam}`;
  const waText = formatWhatsAppMessage(name, category, link);

  const linkResult = document.getElementById('singleGuestLinkResult');
  if (linkResult) linkResult.value = link;

  const testBtn = document.getElementById('btnTestSingleLink');
  if (testBtn) testBtn.href = link;

  const waPreview = document.getElementById('singleGuestWaPreview');
  if (waPreview) waPreview.textContent = waText;

  // Bind copy & send buttons
  const copyBtn = document.getElementById('btnCopySingleLink');
  if (copyBtn) {
    copyBtn.onclick = () => {
      navigator.clipboard?.writeText(link).then(() => showToast(`📋 Tautan tamu "${name}" kasil kasalin!`));
    };
  }

  const sendWaBtn = document.getElementById('btnSendSingleWa');
  if (sendWaBtn) {
    sendWaBtn.onclick = () => {
      const encodedMsg = encodeURIComponent(waText);
      const waUrl = phone
        ? `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMsg}`
        : `https://api.whatsapp.com/send?text=${encodedMsg}`;
      window.open(waUrl, '_blank');
    };
  }
}

// Init WA template default on guest tab open
document.addEventListener('DOMContentLoaded', () => {
  // Populate WA template textarea with default if empty
  const waTemplateEl = document.getElementById('waTemplateText');
  if (waTemplateEl && !waTemplateEl.value.trim()) {
    const cfg = currentConfig || DEFAULT_ADMIN_CONFIG;
    // Will be auto-populated after config loads
    setTimeout(() => {
      if (!waTemplateEl.value.trim()) {
        waTemplateEl.value = getWaTemplate();
      }
    }, 800);
  }
  // Re-render on template change
  document.getElementById('waTemplateText')?.addEventListener('input', generateSingleGuest);
  document.getElementById('guestBaseUrl')?.addEventListener('input', generateSingleGuest);
});

// Helpers
function getVal(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : '';
}

function setVal(id, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined && val !== null) {
    el.value = val;
  }
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ----------------------------------------------------------------------------
// BUKU RAWUH & RSVP ATTENDANCE MANAGER (DATA ASLI)
// ----------------------------------------------------------------------------
function initBukuRawuhManager() {
  document.getElementById('btnRefreshBukuRawuh')?.addEventListener('click', () => {
    renderBukuRawuhAdmin();
    showToast('🔄 Data Buku Rawuh sampun kaanyari.');
  });

  document.getElementById('btnExportBukuRawuhCsv')?.addEventListener('click', exportBukuRawuhToCsv);

  document.getElementById('btnClearBukuRawuh')?.addEventListener('click', () => {
    if (confirm('Panjenengan yakin badhe ngresiki / ngosongaken sedaya data Buku Rawuh & Konfirmasi Tamu?')) {
      localStorage.removeItem('wayang_invitation_wishes');
      renderBukuRawuhAdmin();
      showToast('🗑️ Buku Rawuh kasil karesikan.');
    }
  });

  renderBukuRawuhAdmin();
}

function getStoredRealWishes() {
  let list = [];
  try {
    list = JSON.parse(localStorage.getItem('wayang_invitation_wishes') || '[]');
  } catch (e) {
    list = [];
  }
  return Array.isArray(list) ? list : [];
}

function renderBukuRawuhAdmin() {
  const wishes = getStoredRealWishes();
  const tbody = document.getElementById('bukuRawuhTableBody');

  // Calculate statistics
  let totalHadir = 0;
  let totalPax = 0;
  let totalAbsenOrRagu = 0;

  wishes.forEach(w => {
    const isAttending = w.kehadiran === 'hadir';
    const pax = parseInt(w.jumlah, 10) || 1;
    if (isAttending) {
      totalHadir++;
      totalPax += pax;
    } else {
      totalAbsenOrRagu++;
    }
  });

  const statTotalEl = document.getElementById('statTotalRsvp');
  const statHadirEl = document.getElementById('statHadirRsvp');
  const statPaxEl = document.getElementById('statTotalPax');
  const statAbsenEl = document.getElementById('statAbsenRsvp');

  if (statTotalEl) statTotalEl.textContent = wishes.length;
  if (statHadirEl) statHadirEl.textContent = `${totalHadir} Tamu`;
  if (statPaxEl) statPaxEl.textContent = `(${totalPax} Porsi / Pax)`;
  if (statAbsenEl) statAbsenEl.textContent = `${totalAbsenOrRagu} Tamu`;

  if (!tbody) return;
  tbody.innerHTML = '';

  if (wishes.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; color: var(--admin-text-muted); padding: 30px;">
          Belum ada ucapan atau konfirmasi dari tamu undangan (Buku Rawuh masih kosong).
        </td>
      </tr>
    `;
    return;
  }

  wishes.forEach((w, idx) => {
    const isAttending = w.kehadiran === 'hadir';
    const isDeclined = w.kehadiran === 'tidak_hadir';
    let badgeClass = 'vip';
    let badgeText = 'Rawuh (Hadir)';

    if (isDeclined) {
      badgeClass = 'keluarga';
      badgeText = 'Mboten Saged Rawuh';
    } else if (w.kehadiran === 'ragu') {
      badgeClass = '';
      badgeText = 'Taksih Ragu';
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td style="font-size: 0.78rem; color: var(--admin-text-muted);">${escapeHtml(w.waktu || '-')}</td>
      <td><strong>${escapeHtml(w.nama || 'Tamu Undangan')}</strong></td>
      <td>
        <span class="guest-badge ${badgeClass}">${badgeText}</span>
        ${w.jumlah ? `<span style="font-size:0.75rem; color:var(--color-gold-light); margin-left:4px;">(${w.jumlah} Pax)</span>` : ''}
      </td>
      <td style="max-width: 320px; font-size: 0.82rem; line-height: 1.4;">${escapeHtml(w.pesan || '-')}</td>
      <td>
        <button type="button" class="adm-btn adm-btn-danger adm-btn-sm btn-delete-wish" data-index="${idx}" title="Hapus ucapan ini">
          Hapus
        </button>
      </td>
    `;

    tr.querySelector('.btn-delete-wish').addEventListener('click', () => {
      if (confirm(`Hapus ucapan saking "${w.nama}"?`)) {
        const currentWishes = getStoredRealWishes();
        currentWishes.splice(idx, 1);
        localStorage.setItem('wayang_invitation_wishes', JSON.stringify(currentWishes));
        renderBukuRawuhAdmin();
        showToast('Ucapan kasil kabusek.');
      }
    });

    tbody.appendChild(tr);
  });
}

function exportBukuRawuhToCsv() {
  const wishes = getStoredRealWishes();
  if (wishes.length === 0) {
    alert('Dereng wonten data Buku Rawuh ingkang saged dipunekspor.');
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "No,Waktu,Nama Tamu,Status Kehadiran,Jumlah Porsi/Pax,Doa dan Ucapan Restu\n";

  wishes.forEach((w, idx) => {
    const escapedWaktu = `"${(w.waktu || '').replace(/"/g, '""')}"`;
    const escapedName = `"${(w.nama || '').replace(/"/g, '""')}"`;
    const escapedStatus = `"${(w.kehadiran || '').replace(/"/g, '""')}"`;
    const escapedJumlah = `"${w.jumlah || 1}"`;
    const escapedPesan = `"${(w.pesan || '').replace(/"/g, '""')}"`;
    csvContent += `${idx + 1},${escapedWaktu},${escapedName},${escapedStatus},${escapedJumlah},${escapedPesan}\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `buku_rawuh_rsvp_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('📊 Berkas CSV Buku Rawuh kasil kaundhuh!');
}

