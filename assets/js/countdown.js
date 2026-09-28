/**
 * Countdown Timer Engine — Javanese Wayang Heritage
 */

class WeddingCountdown {
  constructor(targetDateString) {
    this.targetDate = new Date(targetDateString).getTime();
    this.daysEl = document.getElementById('cdDays');
    this.hoursEl = document.getElementById('cdHours');
    this.minutesEl = document.getElementById('cdMinutes');
    this.secondsEl = document.getElementById('cdSeconds');
    this.timerInterval = null;

    this.start();
  }

  start() {
    this.update();
    this.timerInterval = setInterval(() => this.update(), 1000);
  }

  update() {
    const now = new Date().getTime();
    const distance = this.targetDate - now;

    if (distance < 0) {
      if (this.timerInterval) clearInterval(this.timerInterval);
      if (this.daysEl) this.daysEl.textContent = '00';
      if (this.hoursEl) this.hoursEl.textContent = '00';
      if (this.minutesEl) this.minutesEl.textContent = '00';
      if (this.secondsEl) this.secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (this.daysEl) this.daysEl.textContent = this.pad(days);
    if (this.hoursEl) this.hoursEl.textContent = this.pad(hours);
    if (this.minutesEl) this.minutesEl.textContent = this.pad(minutes);
    if (this.secondsEl) this.secondsEl.textContent = this.pad(seconds);
  }

  pad(n) {
    return n < 10 ? '0' + n : n;
  }
}

window.WeddingCountdown = WeddingCountdown;
