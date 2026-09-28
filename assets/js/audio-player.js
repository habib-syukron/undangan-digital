/**
 * Audio Controller & Gamelan Synthesizer — Javanese Wayang Heritage
 * Plays background audio (HTML5 Audio) or synthesizes authentic ambient Slendro Gamelan via Web Audio API.
 */

class WayangAudioPlayer {
  constructor() {
    this.isPlaying = false;
    this.audioElement = document.getElementById('weddingBgAudio') || null;
    this.audioCtx = null;
    this.synthInterval = null;
    this.mode = this.audioElement ? 'file' : 'synthesizer';
    this.toggleBtn = document.getElementById('audioToggleBtn');
    
    this.init();
  }

  init() {
    if (this.audioElement) {
      this.mode = 'file';
      this.audioElement.volume = 0;
      this.audioElement.loop = true;
    }
    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggle());
    }
  }

  configure(audioConfig) {
    if (audioConfig && audioConfig.src && audioConfig.src.trim() !== '') {
      this.mode = 'file';
      if (!this.audioElement) {
        this.audioElement = new Audio(audioConfig.src);
      } else {
        this.audioElement.src = audioConfig.src;
      }
      this.audioElement.loop = true;
      this.audioElement.volume = 0;
    } else if (audioConfig && audioConfig.mode === 'synthesizer') {
      this.mode = 'synthesizer';
    }
  }

  play() {
    if (this.isPlaying) return;

    if (this.mode === 'file' && this.audioElement) {
      this.audioElement.play().then(() => {
        this.isPlaying = true;
        this.fadeInFileAudio();
        this.updateUI(true);
      }).catch(err => {
        console.warn('Audio playback requires user gesture or fallback to synth:', err);
        this.startSynth();
      });
    } else {
      this.startSynth();
    }
  }

  pause() {
    if (!this.isPlaying) return;

    if (this.mode === 'file' && this.audioElement) {
      this.audioElement.pause();
    } else {
      this.stopSynth();
    }

    this.isPlaying = false;
    this.updateUI(false);
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  fadeInFileAudio() {
    let vol = 0;
    const interval = setInterval(() => {
      vol += 0.05;
      if (vol >= 0.65) {
        vol = 0.65;
        clearInterval(interval);
      }
      if (this.audioElement) {
        this.audioElement.volume = vol;
      }
    }, 100);
  }

  /* --------------------------------------------------------------------------
     Authentic Ambient Slendro Gamelan Synthesizer (Web Audio API)
     Pitches: Slendro scale (1=Panunggul, 2=Gulu, 3=Dhadha, 5=Lima, 6=Nem)
     Rich metallic overtones with exponential decay (Gong, Kempul, Kenong)
     -------------------------------------------------------------------------- */
  startSynth() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!this.audioCtx) {
        this.audioCtx = new AudioContext();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      this.isPlaying = true;
      this.updateUI(true);

      // Slendro Frequencies in Hz (Warm meditative octave)
      // 1 (Nem low: 220Hz), 2 (Gulu: 247Hz), 3 (Dhadha: 277Hz), 5 (Lima: 330Hz), 6 (Nem: 370Hz), 7 (Barang: 415Hz)
      const scale = [220.0, 247.5, 278.0, 329.6, 370.0, 440.0, 495.0];
      const melody = [
        { note: scale[0], type: 'gong', delay: 0 },
        { note: scale[3], type: 'kenong', delay: 1800 },
        { note: scale[4], type: 'saron', delay: 3200 },
        { note: scale[2], type: 'saron', delay: 4600 },
        { note: scale[1], type: 'kempul', delay: 6000 },
        { note: scale[3], type: 'saron', delay: 7400 },
        { note: scale[4], type: 'kenong', delay: 8800 },
        { note: scale[0], type: 'gong', delay: 10400 }
      ];

      let beatIndex = 0;
      const stepTime = 1400; // Peaceful, gentle Javanese tempo

      const playGamelanBeat = () => {
        if (!this.isPlaying || !this.audioCtx) return;

        const current = melody[beatIndex % melody.length];
        this.strikeBronzeInstrument(current.note, current.type);
        beatIndex++;
      };

      // Initial strike
      playGamelanBeat();
      this.synthInterval = setInterval(playGamelanBeat, stepTime);

    } catch (e) {
      console.warn('Web Audio API not supported on this device:', e);
    }
  }

  stopSynth() {
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }

  strikeBronzeInstrument(freq, type = 'saron') {
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;

    // Harmonic bell partials for authentic Javanese bronze resonance
    const partials = type === 'gong' 
      ? [1, 1.48, 2.02, 2.76, 3.45] 
      : [1, 2.14, 2.96, 4.2];

    const masterGain = this.audioCtx.createGain();
    const duration = type === 'gong' ? 4.5 : (type === 'kempul' ? 3.0 : 1.8);
    const volume = type === 'gong' ? 0.35 : 0.2;

    masterGain.gain.setValueAtTime(0.001, now);
    masterGain.gain.exponentialRampToValueAtTime(volume, now + 0.04);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    masterGain.connect(this.audioCtx.destination);

    partials.forEach((mult, i) => {
      const osc = this.audioCtx.createOscillator();
      const partialGain = this.audioCtx.createGain();
      
      osc.type = i === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq * mult, now);
      
      const pVol = 1 / (i + 1);
      partialGain.gain.setValueAtTime(pVol, now);
      partialGain.gain.exponentialRampToValueAtTime(0.001, now + (duration / (i * 0.4 + 1)));

      osc.connect(partialGain);
      partialGain.connect(masterGain);

      osc.start(now);
      osc.stop(now + duration);
    });
  }

  updateUI(playing) {
    if (!this.toggleBtn) return;

    if (playing) {
      this.toggleBtn.classList.add('is-playing');
      this.toggleBtn.setAttribute('title', 'Matikan Musik');
      this.toggleBtn.setAttribute('aria-label', 'Matikan Musik');
    } else {
      this.toggleBtn.classList.remove('is-playing');
      this.toggleBtn.setAttribute('title', 'Putar Musik');
      this.toggleBtn.setAttribute('aria-label', 'Putar Musik');
    }
  }
}

window.WayangAudioPlayer = WayangAudioPlayer;
