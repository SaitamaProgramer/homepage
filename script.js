// ============================================
// Interactive Resume - Matías Stebé
// Cinematic Edition: Comics, Movies & Coffee
// ============================================

document.addEventListener('DOMContentLoaded', function() {

  // 1. THEME TOGGLE (Light/Dark Mode)
  initThemeToggle();

  // 2. PRINT BUTTON
  createPrintButton();

  // 3. EASTER EGG HINT
  createEasterEggHint();

  // 4. ADD TOOLTIPS TO PROJECT LINKS
  addTooltipsToProjects();

  // 5. ADD CLICK EFFECT ON SKILLS SECTION
  addSkillsClickEffect();

  // 6. ADD HOVER EFFECT ON SECTION HEADERS
  addSectionHeaderEffect();

  // 7. EASTER EGG - Avatar 3 clicks
  createEasterEgg();

  // 8. WELCOME MESSAGE IN CONSOLE
  console.log('%c🎬 MATÍAS STEBÉ — CINEMATIC RESUME', 'color: #c9a96e; font-size: 18px; font-weight: bold; font-family: monospace;');
  console.log('%c"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."', 'color: #8a8070; font-size: 12px; font-style: italic;');
  console.log('%c🎁 Secrets:', 'color: #c9a96e; font-size: 14px; font-weight: bold;');
  console.log('%c   • Click avatar 3x → Easter Egg', 'color: #b8b0a0; font-size: 11px;');
  console.log('%c   • Click coffee meter → Power up', 'color: #b8b0a0; font-size: 11px;');
  console.log('%c   • Click clapperboard → Cinema mode', 'color: #b8b0a0; font-size: 11px;');
  console.log('%c   • Click 🎬 badge → Movie quotes', 'color: #b8b0a0; font-size: 11px;');
  console.log('%c   • Konami Code (↑↑↓↓←→←→BA) → Hero mode', 'color: #b8b0a0; font-size: 11px;');
  console.log('%c   • Click POW! button → Comic effects', 'color: #b8b0a0; font-size: 11px;');

  // 9. SHOW TOAST NOTIFICATION ON PAGE LOAD
  showToast('🎬 Welcome to my cinematic resume!', 4000);

  // 10. COFFEE COUNTER
  initCoffeeCounter();

  // 11. MOVIE QUOTES — Badge clickeable en subtítulo
  initMovieQuotes();

  // 12. KONAMI CODE
  initKonamiCode();

  // 13. SPOILER EFFECT
  initSpoilerEffect();

  // 14. CLAPPERBOARD BUTTON (Cinema Mode)
  initClapperboardButton();

  // 15. COMIC TRIGGER BUTTON
  initComicTrigger();
});

// ============================================
// THEME TOGGLE — Light/Dark
// ============================================
function initThemeToggle() {
  const button = document.getElementById('themeToggle');
  if (!button) return;

  const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    button.innerHTML = moonIcon;
  } else {
    button.innerHTML = sunIcon;
  }

  button.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
      button.innerHTML = moonIcon;
      showToast('☀️ Light mode activated', 2000);
      localStorage.setItem('theme', 'light');
    } else {
      button.innerHTML = sunIcon;
      showToast('🌙 Cinematic mode activated', 2000);
      localStorage.setItem('theme', 'dark');
    }
  });
}

// ============================================
// PRINT BUTTON
// ============================================
function createPrintButton() {
  const button = document.createElement('button');
  button.className = 'print-btn';
  button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>`;
  button.setAttribute('aria-label', 'Print resume');
  button.setAttribute('data-tooltip', 'Print this resume');

  button.addEventListener('click', function() {
    window.print();
    showToast('🖨️ Preparing resume for printing...', 2000);
  });

  document.body.appendChild(button);
}

// ============================================
// EASTER EGG HINT
// ============================================
function createEasterEggHint() {
  const hint = document.createElement('div');
  hint.className = 'easter-egg-hint';
  hint.innerHTML = '🥚 Click the profile picture 3x';
  hint.setAttribute('data-tooltip', 'Try clicking on the avatar photo 3 times quickly!');

  hint.addEventListener('click', function() {
    showToast('🥚 Hint: Click on the profile picture 3 times quickly!', 3000);
  });

  document.body.appendChild(hint);
}

// ============================================
// EASTER EGG - Avatar 3 clicks
// ============================================
function createEasterEgg() {
  const avatar = document.querySelector('.contact-info__avatar');
  if (!avatar) return;

  let clickCount = 0;
  let timeout;

  avatar.setAttribute('data-tooltip', '🥚 Click me 3 times for a surprise!');

  avatar.addEventListener('click', function() {
    clickCount++;

    avatar.style.transform = 'scale(0.95)';
    setTimeout(() => {
      avatar.style.transform = '';
    }, 150);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      clickCount = 0;
    }, 1000);

    if (clickCount === 3) {
      triggerEasterEgg();
      clickCount = 0;
    }
  });
}

function triggerEasterEgg() {
  createConfetti();
  showToast('🎉 EASTER EGG UNLOCKED!', 3000);

  const message = document.createElement('div');
  message.textContent = '🐱‍💻 You found the secret! Awesome! 🚀';
  message.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #c9a96e, #e94560);
    color: #0a0a0f;
    padding: 25px 50px;
    border-radius: 8px;
    font-size: 22px;
    font-weight: bold;
    z-index: 2000;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
    animation: fadeInUp 0.5s ease;
    text-align: center;
    font-family: 'Inter', sans-serif;
    letter-spacing: 1px;
  `;

  document.body.appendChild(message);

  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.frequency.value = 880;
    gainNode.gain.value = 0.1;
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 0.5);
    oscillator.stop(audioContext.currentTime + 0.5);
  } catch(e) {}

  setTimeout(() => {
    message.style.animation = 'fadeOut 0.5s ease';
    setTimeout(() => {
      if (message.parentNode) message.remove();
    }, 500);
  }, 3000);

  console.log('%c🎉 EASTER EGG UNLOCKED!', 'color: #c9a96e; font-size: 20px; font-weight: bold;');
}

function createConfetti() {
  const colors = ['#c9a96e', '#e94560', '#ff9a00', '#ffd700', '#ff6b00'];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background-color: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * window.innerWidth}px;
      top: -20px;
      z-index: 1999;
      border-radius: 2px;
      pointer-events: none;
    `;
    document.body.appendChild(confetti);

    const animation = confetti.animate([
      { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
      { transform: `translateY(${window.innerHeight + 20}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
      duration: 2000 + Math.random() * 1000,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });

    animation.onfinish = () => confetti.remove();
  }
}

// ============================================
// TOOLTIPS ON PROJECT LINKS
// ============================================
function addTooltipsToProjects() {
  const projectLinks = document.querySelectorAll('.project-link');

  projectLinks.forEach(link => {
    if (link.href.includes('aularegistro.com')) {
      link.setAttribute('data-tooltip', '🔗 Visit Aula Registro');
    } else if (link.href.includes('musica-y-efemerides')) {
      link.setAttribute('data-tooltip', '🎵 Visit Music & Anniversaries');
    }

    link.addEventListener('click', function(e) {
      showToast(`🔗 Opening: ${this.textContent}`, 2000);
    });
  });
}

// ============================================
// SKILLS CLICK EFFECT
// ============================================
function addSkillsClickEffect() {
  const skillsSection = document.querySelector('.skills__text');

  if (skillsSection) {
    skillsSection.addEventListener('click', function() {
      const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MySQL', 'Python', 'PHP', 'Git'];
      const randomSkill = skills[Math.floor(Math.random() * skills.length)];
      showToast(`💡 I work with ${randomSkill}`, 2500);
    });
  }
}

// ============================================
// SECTION HEADER EFFECT
// ============================================
function addSectionHeaderEffect() {
  const headers = document.querySelectorAll('.additional-info__education-header, .additional-info__languages-header, .skills__header, .experiences__header');

  headers.forEach(header => {
    header.addEventListener('click', function() {
      const sectionName = this.textContent;
      showToast(`📖 ${sectionName}`, 1500);
    });
  });
}

// ============================================
// ☕ COFFEE COUNTER
// ============================================
function initCoffeeCounter() {
  const meter = document.createElement('div');
  meter.className = 'coffee-meter';
  meter.setAttribute('data-tooltip', 'Click to drink coffee ☕');
  document.body.appendChild(meter);

  let coffees = parseInt(localStorage.getItem('coffeeCount')) || 0;
  updateCoffeeDisplay(meter, coffees);

  meter.addEventListener('click', function() {
    coffees++;
    localStorage.setItem('coffeeCount', coffees);
    updateCoffeeDisplay(meter, coffees);

    meter.style.transform = 'scale(1.2) rotate(3deg)';
    setTimeout(() => meter.style.transform = '', 200);

    const messages = [
      '☕ First coffee of the day!',
      '☕☕ Energy rising...',
      '☕☕☕ Full power mode!',
      '☕☕☕☕ HULK MODE!',
      '☕☕☕☕☕ ⚠️ Jitters incoming...',
      '☕☕☕☕☕☕ Heart rate: 200 BPM',
      '☕☕☕☕☕☕☕ Coffee runs through my veins',
      '☕☕☕☕☕☕☕☕ I AM THE COFFEE',
      '☕☕☕☕☕☕☕☕☕ Transcending reality...'
    ];
    const msg = messages[Math.min(coffees - 1, messages.length - 1)] || `☕ x${coffees} LEGENDARY!`;
    showToast(msg, 2500);

    if (coffees === 10) {
      showToast('🏆 ACHIEVEMENT: Coffee Addict Unlocked!', 4000);
      triggerConfetti();
    }
    if (coffees === 20) {
      showToast('🏆🏆 ACHIEVEMENT: Coffee God Unlocked!', 5000);
      triggerConfetti();
    }
  });
}

function updateCoffeeDisplay(element, count) {
  element.innerHTML = `☕ ${count}`;
}

// ============================================
// 🎬 MOVIE QUOTES — Badge clickeable en subtítulo
// ============================================
function initMovieQuotes() {
  const quotes = [
    { text: "I'll be back... with more coffee.", movie: "Terminator" },
    { text: "May the coffee be with you.", movie: "Star Wars" },
    { text: "With great power comes great responsibility... to write clean code.", movie: "Spider-Man" },
    { text: "Why so serious? Let's debug.", movie: "The Dark Knight" },
    { text: "I am inevitable... at 3 AM coding.", movie: "Avengers" },
    { text: "Houston, we have a bug.", movie: "Apollo 13" },
    { text: "To infinity and beyond... the deadline!", movie: "Toy Story" },
    { text: "Life is like a box of chocolates... full of unexpected bugs.", movie: "Forrest Gump" },
    { text: "I see dead code.", movie: "The Sixth Sense" },
    { text: "Say hello to my little friend... console.log()", movie: "Scarface" },
    { text: "Here's looking at you, kid... and your pull request.", movie: "Casablanca" },
    { text: "You can't handle the truth... about this legacy code.", movie: "A Few Good Men" },
    { text: "There's no place like localhost.", movie: "The Wizard of Oz" },
    { text: "I love the smell of coffee in the morning.", movie: "Apocalypse Now" },
    { text: "Show me the money... and the clean architecture.", movie: "Jerry Maguire" }
  ];

  const subtitle = document.querySelector('.contact-info__sub-header');
  if (!subtitle) return;

  // Envolver el subtítulo en contenedor
  const wrapper = document.createElement('div');
  wrapper.className = 'sub-header-wrapper';
  subtitle.parentNode.insertBefore(wrapper, subtitle);
  wrapper.appendChild(subtitle);

  // Crear badge 🎬
  const badge = document.createElement('span');
  badge.className = 'movie-badge';
  badge.innerHTML = '🎬';
  badge.setAttribute('data-tooltip', 'Click for movie quotes!');
  wrapper.appendChild(badge);

  // Click en badge = quote aleatoria
  badge.addEventListener('click', function(e) {
    e.stopPropagation();
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    showToast(`🎬 "${quote.text}" — ${quote.movie}`, 5000);

    badge.style.transform = 'scale(1.3) rotate(-10deg)';
    setTimeout(() => badge.style.transform = '', 300);
  });

  // Click en subtítulo también funciona
  subtitle.style.cursor = 'pointer';
  subtitle.setAttribute('data-tooltip', '🎬 Click for movie wisdom');
  subtitle.addEventListener('click', function() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    showToast(`🎬 "${quote.text}" — ${quote.movie}`, 5000);
  });

  // Quote aleatorio cada 45 segundos (20% chance)
  setInterval(() => {
    if (Math.random() > 0.8) {
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      showToast(`🎬 "${quote.text}" — ${quote.movie}`, 5000);
    }
  }, 45000);
}

// ============================================
// 🎮 KONAMI CODE (↑↑↓↓←→←→BA)
// ============================================
function initKonamiCode() {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
                      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
                      'b', 'a'];
  let konamiIndex = 0;

  document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        activateHeroMode();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
}

function activateHeroMode() {
  document.body.classList.remove('light-mode');
  document.body.classList.toggle('hero-mode');

  if (document.body.classList.contains('hero-mode')) {
    showToast('🦸‍♂️ HERO MODE ACTIVATED!', 3000);
    triggerConfetti();

    const hint = document.querySelector('.easter-egg-hint');
    if (hint) hint.innerHTML = '🦸‍♂️ HERO MODE — ↑↑↓↓←→←→BA to exit';
  } else {
    showToast('🌙 Returning to cinematic mode...', 2000);
    const hint = document.querySelector('.easter-egg-hint');
    if (hint) hint.innerHTML = '🥚 Click the profile picture 3x';
  }
}

// ============================================
// 🎭 SPOILER EFFECT ON PROJECTS
// ============================================
function initSpoilerEffect() {
  const projectItems = document.querySelectorAll('.additional-info__languages-item a');

  projectItems.forEach(link => {
    const spoiler = document.createElement('span');
    spoiler.textContent = ' [SPOILER]';
    spoiler.style.cssText = `
      background: #1a1a2e;
      color: #1a1a2e;
      padding: 2px 8px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-left: 5px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 1px;
      border: 1px solid #333;
    `;

    link.parentNode.appendChild(spoiler);

    spoiler.addEventListener('mouseenter', function() {
      this.style.color = '#e94560';
      this.style.background = 'transparent';
      this.style.borderColor = '#e94560';
    });

    spoiler.addEventListener('mouseleave', function() {
      this.style.color = '#1a1a2e';
      this.style.background = '#1a1a2e';
      this.style.borderColor = '#333';
    });

    spoiler.addEventListener('click', function(e) {
      e.preventDefault();
      this.style.display = 'none';
      showToast('🎭 Spoiler revealed: Epic project!', 2000);
      setTimeout(() => window.open(link.href, '_blank'), 500);
    });
  });
}

// ============================================
// 🎬 CLAPPERBOARD BUTTON — Cinema Mode con botón salir
// ============================================
function initClapperboardButton() {
  const btn = document.createElement('button');
  btn.className = 'clapperboard-btn';
  btn.setAttribute('aria-label', 'Cinema mode');
  btn.setAttribute('data-tooltip', '🎬 Cinema mode');

  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M6 4L2 8"></path><path d="M12 4L8 8"></path><path d="M18 4L14 8"></path><line x1="2" y1="8" x2="22" y2="8"></line></svg>`;

  document.body.appendChild(btn);

  let cinemaActive = false;
  let exitBtn = null;
  let cinemaBars = null;

  btn.addEventListener('click', function() {
    if (!cinemaActive) {
      activateCinemaMode();
    }
  });

  function activateCinemaMode() {
    cinemaActive = true;

    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }

    showToast('🎬 CINEMA MODE — Click ✕ to exit', 3000);

    // Barras negras anamórficas — SIN pointer-events
    cinemaBars = document.createElement('div');
    cinemaBars.id = 'cinema-bars';
    cinemaBars.style.cssText = 'pointer-events: none !important; z-index: 9999;';
    cinemaBars.innerHTML = `
      <div style="position:fixed;top:0;left:0;right:0;height:12vh;background:#000;pointer-events:none !important;z-index:9999;"></div>
      <div style="position:fixed;bottom:0;left:0;right:0;height:12vh;background:#000;pointer-events:none !important;z-index:9999;"></div>
    `;
    document.body.appendChild(cinemaBars);

    // Flash de proyector
    const flash = document.createElement('div');
    flash.style.cssText = `
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: white;
      z-index: 10000;
      pointer-events: none;
      animation: projectorFlash 0.8s ease forwards;
    `;
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 800);

    // BOTÓN SALIR (X roja) — arriba derecha
    exitBtn = document.createElement('button');
    exitBtn.className = 'cinema-exit-btn';
    exitBtn.innerHTML = '✕';
    exitBtn.setAttribute('aria-label', 'Exit cinema mode');
    exitBtn.setAttribute('data-tooltip', 'Exit cinema mode');
    document.body.appendChild(exitBtn);

    exitBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      deactivateCinemaMode();
    });

    // Ocultar clapperboard
    btn.style.opacity = '0';
    btn.style.pointerEvents = 'none';
  }

  function deactivateCinemaMode() {
    cinemaActive = false;

    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }

    if (cinemaBars && cinemaBars.parentNode) {
      cinemaBars.remove();
      cinemaBars = null;
    }

    if (exitBtn && exitBtn.parentNode) {
      exitBtn.remove();
      exitBtn = null;
    }

    showToast('🌙 Cinema mode off', 2000);

    btn.style.opacity = '';
    btn.style.pointerEvents = '';
  }

  // ESC listener
  document.addEventListener('fullscreenchange', function() {
    if (!document.fullscreenElement && cinemaActive) {
      deactivateCinemaMode();
    }
  });
}

// ============================================
// 💥 COMIC TRIGGER BUTTON — FIX: no afecta barras de cine
// ============================================
function initComicTrigger() {
  const skillsSection = document.querySelector('.skills');
  if (!skillsSection) return;

  let wrapper = skillsSection.querySelector('.skills-wrapper');
  if (!wrapper) {
    const text = skillsSection.querySelector('.skills__text');
    wrapper = document.createElement('div');
    wrapper.className = 'skills-wrapper';
    if (text) {
      text.parentNode.insertBefore(wrapper, text);
      wrapper.appendChild(text);
    }
  }

  const btn = document.createElement('button');
  btn.className = 'comic-trigger';
  btn.setAttribute('data-tooltip', '💥 Click for comic sound effects!');
  btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
    POW! BAM! KAPOW!
  `;

  wrapper.appendChild(btn);

  const sounds = ['POW!', 'BAM!', 'ZAP!', 'WOW!', 'BOOM!', 'KAPOW!', 'WHAM!', 'CRASH!', 'BANG!', 'KA-BOOM!'];

  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    e.preventDefault();

    btn.style.transform = 'scale(0.95)';
    setTimeout(() => btn.style.transform = '', 150);

    const sound = document.createElement('div');
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    sound.textContent = randomSound;

    const rect = btn.getBoundingClientRect();
    const offsetX = (Math.random() - 0.5) * 200;
    const offsetY = (Math.random() - 0.5) * 100 - 50;

    sound.style.cssText = `
      position: fixed;
      left: ${rect.left + rect.width / 2 + offsetX}px;
      top: ${rect.top + offsetY}px;
      font-family: 'Impact', 'Arial Black', sans-serif;
      font-size: ${24 + Math.random() * 16}px;
      color: #c9a96e;
      text-shadow: 
        3px 3px 0 #000, 
        -1px -1px 0 #e94560,
        0 0 20px rgba(201, 169, 110, 0.5);
      pointer-events: none;
      z-index: 10000;
      animation: comicPop 0.8s ease forwards;
      transform: translate(-50%, -50%);
      letter-spacing: 2px;
      white-space: nowrap;
    `;

    document.body.appendChild(sound);
    setTimeout(() => sound.remove(), 800);

    // Shake sutil — solo en el body, NO en las barras de cine
    document.body.style.transform = `translate(${Math.random() * 2}px, ${Math.random() * 2}px)`;
    requestAnimationFrame(() => {
      setTimeout(() => {
        document.body.style.transform = '';
      }, 50);
    });
  });
}

// ============================================
// 🎊 CONFETTI
// ============================================
function triggerConfetti() {
  const colors = ['#c9a96e', '#e94560', '#ff9a00', '#ffd700', '#ff6b00', '#00ff88'];

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement('div');
    const size = 8 + Math.random() * 8;
    confetti.style.cssText = `
      position: fixed;
      width: ${size}px;
      height: ${size}px;
      background-color: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * window.innerWidth}px;
      top: -20px;
      z-index: 9999;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      pointer-events: none;
    `;
    document.body.appendChild(confetti);

    const endX = Math.random() * window.innerWidth;
    const rotation = Math.random() * 720;

    const animation = confetti.animate([
      { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
      { transform: `translateY(${window.innerHeight + 50}px) translateX(${(endX - parseFloat(confetti.style.left)) * 0.3}px) rotate(${rotation}deg)`, opacity: 0 }
    ], {
      duration: 2000 + Math.random() * 2000,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });

    animation.onfinish = () => confetti.remove();
  }
}

// ============================================
// TOAST NOTIFICATION
// ============================================
function showToast(message, duration = 3000) {
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    if (toast && toast.parentNode) {
      toast.remove();
    }
  }, duration);
}

// ============================================
// SCROLL ANIMATION
// ============================================
window.addEventListener('scroll', function() {
  const blocks = document.querySelectorAll('.resume__block');

  blocks.forEach(block => {
    const blockPosition = block.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (blockPosition < screenPosition - 100) {
      block.style.opacity = '1';
      block.style.transform = 'translateY(0)';
    }
  });
});

// ============================================
// KEYFRAME ANIMATIONS
// ============================================
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeOut {
    from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    to { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
  }

  @keyframes projectorFlash {
    0% { opacity: 1; }
    20% { opacity: 0.8; }
    40% { opacity: 0.3; }
    60% { opacity: 0.6; }
    80% { opacity: 0.1; }
    100% { opacity: 0; }
  }
`;
document.head.appendChild(style);