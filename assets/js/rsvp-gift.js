/**
 * RSVP, Gift & Wishes Wall Handler — Javanese Wayang Heritage
 */

class RsvpGiftManager {
  constructor(config) {
    this.config = config || {};
    this.toastEl = document.getElementById('toastNotice');
    this.toastTextEl = document.getElementById('toastNoticeText');
    this.toastTimeout = null;

    this.initCopyButtons();
    this.initRsvpForm();
    this.initWishesStream();
    this.initGalleryLightbox();
  }

  showToast(message) {
    if (!this.toastEl) return;
    if (this.toastTextEl) this.toastTextEl.textContent = message;

    this.toastEl.classList.add('is-active');
    if (this.toastTimeout) clearTimeout(this.toastTimeout);

    this.toastTimeout = setTimeout(() => {
      this.toastEl.classList.remove('is-active');
    }, 3200);
  }

  initCopyButtons() {
    const copyBtns = document.querySelectorAll('[data-copy]');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const textToCopy = btn.getAttribute('data-copy');
        if (!textToCopy) return;

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            this.showToast('Nomor rekening / alamat kasil kasalin!');
          }).catch(() => {
            this.fallbackCopy(textToCopy);
          });
        } else {
          this.fallbackCopy(textToCopy);
        }
      });
    });
  }

  fallbackCopy(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      this.showToast('Kasil kasalin!');
    } catch (err) {
      this.showToast('Gagal nyalin: ' + text);
    }
    document.body.removeChild(tempInput);
  }

  initRsvpForm() {
    const form = document.getElementById('rsvpForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nama = document.getElementById('rsvpNama')?.value.trim() || 'Tamu Undangan';
      const kehadiran = document.getElementById('rsvpKehadiran')?.value || 'hadir';
      const jumlah = document.getElementById('rsvpJumlah')?.value || '1';
      const pesan = document.getElementById('rsvpPesan')?.value.trim() || '';

      const statusMap = {
        'hadir': 'Kula badhe rawuh (Akan Hadir)',
        'tidak_hadir': 'Nyuwun pangapunten, mboten saged rawuh (Tidak Bisa Hadir)',
        'ragu': 'Taksih ragu / dereng tamtu (Masih Ragu)'
      };

      // 1. Add to local wishes stream with real data & timestamp
      const now = new Date();
      const waktuFormatted = now.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }) + ' WIB';

      this.addWish({
        id: 'wish_' + Date.now(),
        nama,
        kehadiran,
        jumlah: parseInt(jumlah, 10) || 1,
        pesan: pesan || 'Sugeng menempuh hidup baru, mugi tansah langgeng lan binarung kabagyan.',
        waktu: waktuFormatted,
        timestamp: now.getTime()
      });

      this.showToast('Matur nuwun, konfirmasi panjenengan sampun katampi!');

      // 2. Open WhatsApp if phone configured
      let rawWa = String(this.config.rsvp?.whatsappNumber || '6281234567890').replace(/[^0-9]/g, '');
      if (rawWa.startsWith('0')) {
        rawWa = '62' + rawWa.slice(1);
      }
      const waNumber = rawWa;
      const waMessage = `*KONFIRMASI KEHADIRAN (RSVP)*%0A%0A` +
        `*Nama:* ${encodeURIComponent(nama)}%0A` +
        `*Status:* ${encodeURIComponent(statusMap[kehadiran] || kehadiran)}%0A` +
        `*Jumlah Tamu:* ${encodeURIComponent(jumlah)} orang%0A` +
        `*Doa Restu:* %0A_${encodeURIComponent(pesan || '-')}_%0A%0A` +
        `_Matur nuwun sanget._`;

      const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${waMessage}`;
      
      // Delay slightly so toast is seen
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 800);

      // Reset form fields (except name)
      if (document.getElementById('rsvpPesan')) {
        document.getElementById('rsvpPesan').value = '';
      }
    });
  }

  initWishesStream(skipRemoteFetch = false) {
    this.wishesStreamEl = document.getElementById('wishesStream');
    if (!this.wishesStreamEl) return;

    // Load only REAL stored wishes (from localStorage or config.bukuRawuh)
    let stored = [];
    try {
      stored = JSON.parse(localStorage.getItem('wayang_invitation_wishes') || '[]');
    } catch (e) {
      stored = [];
    }

    // Merge with any real initial wishes defined in config
    const configWishes = Array.isArray(this.config.bukuRawuh) ? this.config.bukuRawuh : [];
    
    // Combine and deduplicate by id or content
    const combinedMap = new Map();
    [...stored, ...configWishes].forEach(item => {
      const key = item.id || `${item.nama}_${item.waktu}_${item.pesan}`;
      if (!combinedMap.has(key)) {
        combinedMap.set(key, item);
      }
    });

    const realWishes = Array.from(combinedMap.values());
    // Sort newest first
    realWishes.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

    this.renderWishes(realWishes);

    // Fetch live permanent data from Google Sheets if configured
    const gsheetUrl = (this.config.rsvp?.googleSheetUrl || '').trim();
    if (gsheetUrl && !skipRemoteFetch) {
      this.fetchFromGoogleSheet(gsheetUrl);
    }
  }

  fetchFromGoogleSheet(url) {
    fetch(url)
      .then(res => res.json())
      .then(result => {
        if (result && result.status === 'success' && Array.isArray(result.data)) {
          // Merge remote wishes with any local wishes
          let stored = [];
          try {
            stored = JSON.parse(localStorage.getItem('wayang_invitation_wishes') || '[]');
          } catch (e) {
            stored = [];
          }

          const combinedMap = new Map();
          [...result.data, ...stored].forEach(item => {
            const key = `${item.nama}_${item.waktu}_${item.pesan}`;
            if (!combinedMap.has(key)) {
              combinedMap.set(key, item);
            }
          });

          const merged = Array.from(combinedMap.values());
          merged.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

          try {
            localStorage.setItem('wayang_invitation_wishes', JSON.stringify(merged));
          } catch (e) {}

          this.renderWishes(merged);
        }
      })
      .catch(err => {
        console.warn('Google Sheets live fetch notice:', err);
      });
  }

  addWish(newWish) {
    let stored = [];
    try {
      stored = JSON.parse(localStorage.getItem('wayang_invitation_wishes') || '[]');
    } catch (e) {
      stored = [];
    }

    stored.unshift(newWish);
    try {
      localStorage.setItem('wayang_invitation_wishes', JSON.stringify(stored));
    } catch (e) {}

    this.initWishesStream(true);

    // Kirim data secara online permanen ke Google Sheets jika URL telah dipasang
    const gsheetUrl = (this.config.rsvp?.googleSheetUrl || '').trim();
    if (gsheetUrl) {
      this.sendToGoogleSheet(gsheetUrl, newWish);
    }
  }

  sendToGoogleSheet(url, newWish) {
    try {
      fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          action: 'add_rsvp',
          timestamp: newWish.timestamp,
          waktu: newWish.waktu,
          nama: newWish.nama,
          kehadiran: newWish.kehadiran,
          jumlah: newWish.jumlah,
          pesan: newWish.pesan
        })
      })
      .then(() => {
        // Re-fetch after short delay to refresh all responses from server
        setTimeout(() => {
          this.fetchFromGoogleSheet(url);
        }, 2000);
      })
      .catch(err => console.warn('GSheet POST error:', err));
    } catch (e) {
      console.warn('GSheet submit error:', e);
    }
  }

  renderWishes(wishes) {
    if (!this.wishesStreamEl) return;
    this.wishesStreamEl.innerHTML = '';

    // Update Header Counter with real count
    const headerTitle = document.querySelector('.wishes-stream-header h4');
    if (headerTitle) {
      headerTitle.textContent = `Buku Rawuh & Donga Pamuji (${wishes.length}):`;
    }

    if (!wishes || wishes.length === 0) {
      const emptyDiv = document.createElement('div');
      emptyDiv.className = 'wishes-empty-state';
      emptyDiv.style.cssText = 'text-align: center; padding: 24px 14px; background: rgba(184,142,75,0.06); border: 1px dashed rgba(184,142,75,0.3); border-radius: var(--radius-sm);';
      emptyDiv.innerHTML = `
        <svg viewBox="0 0 24 24" style="width:28px; height:28px; fill:var(--color-gold-prada); margin:0 auto 8px; display:block; opacity:0.8;"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
        <div style="font-family: var(--font-title); font-size: 0.95rem; font-weight: 700; color: var(--color-dark-jawa); margin-bottom: 4px;">Dereng Wonten Serat Donga</div>
        <div style="font-size: 0.8rem; color: var(--color-text-secondary); line-height: 1.4;">Dadosa panjenengan ingkang kaping sepisan paring donga pamuji kagem temanten sakaliyan lumantar formulir ing nginggil.</div>
      `;
      this.wishesStreamEl.appendChild(emptyDiv);
      return;
    }

    wishes.forEach(w => {
      const isAttending = w.kehadiran === 'hadir';
      const isDeclined = w.kehadiran === 'tidak_hadir';
      let badgeClass = 'wish-attending';
      let badgeText = 'Rawuh (Hadir)';

      if (isDeclined) {
        badgeClass = 'wish-declined';
        badgeText = 'Mboten Saged Rawuh';
      } else if (w.kehadiran === 'ragu') {
        badgeClass = 'wish-maybe';
        badgeText = 'Taksih Ragu';
      }

      const item = document.createElement('div');
      item.className = 'wish-item';
      item.innerHTML = `
        <div class="wish-author">
          <span>${w.nama}</span>
          <div style="display: flex; gap: 4px; align-items: center;">
            ${w.jumlah ? `<span class="wish-attendance" style="background:rgba(184,142,75,0.15); color:var(--color-gold-prada);">${w.jumlah} Tamu</span>` : ''}
            <span class="wish-attendance ${badgeClass}">${badgeText}</span>
          </div>
        </div>
        <div class="wish-text">${w.pesan}</div>
        <div class="wish-time">${w.waktu}</div>
      `;
      this.wishesStreamEl.appendChild(item);
    });
  }

  initGalleryLightbox() {
    const lightbox = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    if (!lightbox || !lightboxImg) return;

    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-caption')?.textContent || '';
        if (img) {
          lightboxImg.src = img.src;
          if (lightboxCaption) lightboxCaption.textContent = caption;
          lightbox.classList.add('is-active');
        }
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('is-active');
      });
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('is-active');
      }
    });
  }
}

window.RsvpGiftManager = RsvpGiftManager;
