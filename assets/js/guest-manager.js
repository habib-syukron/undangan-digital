/**
 * Guest Personalization Manager — Javanese Wayang Heritage
 * Handles URL query parameters: ?to=Nama+Tamu&p=VIP
 */

const GuestManager = {
  getGuestInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    let guestName = urlParams.get('to') || urlParams.get('guest') || urlParams.get('u');
    let category = urlParams.get('p') || urlParams.get('k') || ''; // e.g. VIP, Keluarga, Sahabat

    if (guestName) {
      guestName = decodeURIComponent(guestName.replace(/\+/g, ' ')).trim();
      // Sanitize simple text
      guestName = this.escapeHtml(guestName);
    } else {
      guestName = 'Tamu Undangan';
    }

    return {
      name: guestName,
      category: category ? this.escapeHtml(category) : null
    };
  },

  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  },

  applyGuestToUI() {
    const guest = this.getGuestInfo();
    const guestNameEl = document.getElementById('guestNameDisplay');
    const rsvpNameInput = document.getElementById('rsvpNama');

    if (guestNameEl) {
      guestNameEl.textContent = guest.name;
    }

    if (rsvpNameInput && guest.name !== 'Tamu Undangan') {
      rsvpNameInput.value = guest.name;
    }

    this.checkSecretAdminAccess();
  },

  checkSecretAdminAccess() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === '1' || urlParams.get('kelola') === '1' || urlParams.get('panel') === '1') {
      window.location.href = 'admin.html';
      return;
    }

    // Keyboard shortcut: Ctrl + Shift + A
    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        window.location.href = 'admin.html';
      }
    });

    // 5x click secret trigger on footer credits
    const footerCredits = document.getElementById('footerCredits');
    if (footerCredits) {
      let clickCount = 0;
      let clickTimer = null;
      footerCredits.addEventListener('click', () => {
        clickCount++;
        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => { clickCount = 0; }, 2000);
        if (clickCount >= 5) {
          window.location.href = 'admin.html';
        }
      });
    }
  }
};

window.GuestManager = GuestManager;

