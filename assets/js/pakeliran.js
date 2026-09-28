/**
 * Pakeliran Transition Engine — Javanese Wayang Heritage
 * Coordinates the Gunungan opening, Kelir curtain reveal, and unblocking body scroll.
 */

class PakeliranEngine {
  constructor(audioPlayer) {
    this.audioPlayer = audioPlayer;
    this.coverEl = document.getElementById('pakeliranCover');
    this.btnBuka = document.getElementById('btnBukaUndangan');
    this.isOpened = false;

    this.init();
  }

  init() {
    if (!this.btnBuka || !this.coverEl) return;

    // Ensure scroll lock is active on launch
    document.body.classList.add('pakeliran-active');

    this.btnBuka.addEventListener('click', (e) => {
      e.preventDefault();
      this.openInvitation();
    });
  }

  openInvitation() {
    if (this.isOpened) return;
    this.isOpened = true;

    // Start Audio on user gesture
    if (this.audioPlayer) {
      this.audioPlayer.play();
    }

    // Step 1: Add opening class (triggers curtain parting and gunungan ascension)
    this.coverEl.classList.add('is-opening');

    // Step 2: Unlock body scroll after curtain begins opening
    setTimeout(() => {
      document.body.classList.remove('pakeliran-active');
    }, 700);

    // Step 3: Complete transition and remove cover from view
    setTimeout(() => {
      this.coverEl.classList.add('is-hidden');
      
      // Trigger animations for the hero section
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        heroSection.querySelectorAll('.reveal-on-scroll').forEach(el => {
          el.classList.add('is-revealed');
        });
      }
    }, 1400);
  }
}

window.PakeliranEngine = PakeliranEngine;
