// ==========================================================
//   WORK COMPONENT (Studio Namma - Scoped)
// ==========================================================

(() => {
  const textListProjects = [
    {
      name: 'MALIBOU',
      slug: 'malibou',
      video: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c349e844f77d523b18b8d9_MALIBOU-video-cover-work-transcode.mp4',
      preview: 'assets/workimages/preview-malibou.jpg',
      link: 'https://studionamma.com/work/malibou'
    },
    {
      name: 'ZEFIR',
      slug: 'zefir',
      video: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34afef65d7aef8cdf1b51_zefir-video-cover-work-transcode.mp4',
      preview: 'assets/workimages/preview-zefir.jpg',
      link: 'https://studionamma.com/work/zefir'
    },
    {
      name: 'HEYSIMON',
      slug: 'heysimon',
      video: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34c1b6d0149efa3e3ee74_hey-simon-cover-work-transcode.mp4',
      preview: 'assets/workimages/preview-heysimon.jpg',
      link: 'https://studionamma.com/work/heysimon'
    },
    {
      name: 'OSOL',
      slug: 'osol',
      video: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34c799a0fdd8c0ab752cf_OSOL-COVER-work-transcode.mp4',
      preview: 'assets/workimages/preview-osol.jpg',
      link: 'https://studionamma.com/work/osol'
    },
    {
      name: 'SUPERCOMICS',
      slug: 'supercomics',
      video: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34d6268b8fea92f3507a7_supercomics-cover-work-transcode.mp4',
      preview: 'assets/workimages/preview-supercomics.jpg',
      link: 'https://studionamma.com/work/supercomics'
    },
    {
      name: 'SILVR',
      slug: 'silvr',
      video: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34dcde68d97df2b61f466_SILVR-Reel-03-video-2-version-ciel-work-transcode.mp4',
      preview: 'assets/workimages/preview-silvr.jpg',
      link: 'https://studionamma.com/work/silvr'
    },
    {
      name: 'MATERA',
      slug: 'matera',
      video: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34e6731bcfb58b939fdae_matera-cover-work-transcode.mp4',
      preview: 'assets/workimages/preview-matera.jpg',
      link: 'https://studionamma.com/work/matera'
    },
    {
      name: 'ORUS ENERGY',
      slug: 'orus-energy',
      video: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34ef2f8b849c927427c6e_Orus-Energy-cover-work-transcode.mp4',
      preview: 'assets/workimages/preview-orus-energy.jpg',
      link: 'https://studionamma.com/work/orus-energy'
    },
    {
      name: 'CHANCE',
      slug: 'chance',
      video: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68d14f4d581e91da74de2f9f_chance-cover-transcode.mp4',
      preview: 'assets/workimages/preview-chance.jpg',
      link: 'https://studionamma.com/work/chance'
    },
    {
      name: 'INTRAMUROS',
      slug: 'intramuros',
      video: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34fa408140526badcb49a_intra-cover-work-transcode.mp4',
      preview: 'assets/workimages/preview-intramuros.jpg',
      link: 'https://studionamma.com/work/intramuros'
    },
  ];

  const archivesData = [
    {
      id: 'qonto', caption: 'Qonto, Scale-Up. 2023.',
      images: [
        { src: 'assets/workimages/archive-qonto-1.jpg', alt: 'Yosemite lake and valley reflection' },
        { src: 'assets/workimages/archive-qonto-2.jpg', alt: 'Majestic alpine mountain ridge' },
        { src: 'assets/workimages/archive-qonto-3.jpg', alt: 'Coastal sunset on sandy beach' },
      ]
    },
    {
      id: 'alan', caption: 'Alan, Scale-Up. 2022.', isRight: true,
      images: [
        { src: 'assets/workimages/archive-alan-1.jpg', alt: 'Golden desert sand dunes' },
        { src: 'assets/workimages/archive-alan-2.jpg', alt: 'Misty green mountain valley' },
        { src: 'assets/workimages/archive-alan-3.jpg', alt: 'Dramatic ocean waves surging' },
      ]
    },
    {
      id: 'jump', caption: 'Jump, Scale-Up. 2023.',
      images: [
        { src: 'assets/workimages/archive-jump-1.jpg', alt: 'Deep emerald pine forest' },
        { src: 'assets/workimages/archive-jump-2.jpg', alt: 'Rugged seaside cliffside' },
        { src: 'assets/workimages/archive-jump-3.jpg', alt: 'Rolling golden countryside hills' },
      ]
    },
    {
      id: 'bstll', caption: 'BSTLL, Architecture. 2023.', isRight: true,
      images: [
        { src: 'assets/workimages/archive-bstll-1.jpg', alt: 'Snowy winter mountain summits' },
        { src: 'assets/workimages/archive-bstll-2.jpg', alt: 'Sunlight filtering through autumn trees' },
        { src: 'assets/workimages/archive-bstll-3.jpg', alt: 'Vibrant spring wildflower field' },
      ]
    },
    {
      id: 'co2ai', caption: 'CO2 AI, Scale-Up. 2023.',
      images: [
        { src: 'assets/workimages/archive-co2ai-1.jpg', alt: 'Luminous green northern lights' },
        { src: 'assets/workimages/archive-co2ai-2.jpg', alt: 'Turquoise ocean water texture' },
        { src: 'assets/workimages/archive-co2ai-3.jpg', alt: 'Towering river canyon gorge' },
      ]
    },
    {
      id: 'elevate', caption: 'Elevate, Sport. 2025.', isRight: true,
      images: [
        { src: 'assets/workimages/archive-elevate-1.jpg', alt: 'Powerful forest waterfall' },
        { src: 'assets/workimages/archive-elevate-2.jpg', alt: 'Glacier peaks under clear sky' },
        { src: 'assets/workimages/archive-elevate-3.jpg', alt: 'Golden lake sunset panorama' },
      ]
    },
    {
      id: 'antartic', caption: 'Antartic, Agency. 2023.',
      images: [
        { src: 'assets/workimages/archive-antartic-1.jpg', alt: 'Utah red rock canyons' },
        { src: 'assets/workimages/archive-antartic-2.jpg', alt: 'Lush sunlit forest path' },
        { src: 'assets/workimages/archive-antartic-3.jpg', alt: 'Ocean coastline sea cliffs' },
      ]
    },
    {
      id: 'gotosell', caption: 'Go To Sell, Services. 2024.', isRight: true,
      images: [
        { src: 'assets/workimages/archive-gotosell-1.jpg', alt: 'Terraced emerald green hills' },
        { src: 'assets/workimages/archive-gotosell-2.jpg', alt: 'Sunlight over wild mountain landscape' },
        { src: 'assets/workimages/archive-gotosell-3.jpg', alt: 'Deep green mountain rainforest' },
      ]
    },
    {
      id: 'yieldstudio', caption: 'Yield Studio, Agency. 2022.',
      images: [
        { src: 'assets/workimages/archive-yieldstudio-1.jpg', alt: 'Pristine mountain lake reflection' },
        { src: 'assets/workimages/archive-yieldstudio-2.jpg', alt: 'Scenic coastal bay aerial' },
        { src: 'assets/workimages/archive-yieldstudio-3.jpg', alt: 'Pink spring blossoms' },
      ]
    },
    {
      id: 'intramuros-old', caption: 'Intramuros, Media. 2021.', isRight: true,
      images: [
        { src: 'assets/workimages/archive-intramuros-old-1.jpg', alt: 'Atmospheric foggy alpine summits' },
        { src: 'assets/workimages/archive-intramuros-old-2.jpg', alt: 'Sunrise warmth over valley horizon' },
        { src: 'assets/workimages/archive-intramuros-old-3.jpg', alt: 'Misty evergreen forest expanse' },
      ]
    },
  ];

  const playgroundCardsData = [
    { video: 'assets/playground-video1.mp4', photo: 'assets/playground-photo1.webp', alt: 'Studio Namma Project 1' },
    { video: 'assets/playground-video2.mp4', photo: 'assets/playground-photo2.webp', alt: 'Studio Namma Project 2' },
    { video: 'assets/playground-video3.mp4', photo: 'assets/playground-photo3.webp', alt: 'Studio Namma Project 3' },
    { video: 'assets/playground-video4.mp4', photo: 'assets/playground-photo4.webp', alt: 'Studio Namma Project 4' }
  ];

  function renderPlaygroundCards() {
    const container = document.getElementById('homePlaygroundCards') || document.querySelector('.home-playground-cards-container');
    if (!container) return;
    container.innerHTML = '';
    playgroundCardsData.forEach(item => {
      const card = document.createElement('div');
      card.className = 'home-playground-card';
      card.innerHTML = `
        <video class="home-playground-video" src="${item.video}" autoplay muted loop playsinline></video>
        <img src="${item.photo}" alt="${item.alt}" loading="lazy">
      `;
      container.appendChild(card);
    });
  }

  function renderTextList() {
    const container = document.getElementById('workProjectItems') || document.querySelector('.work-text-list__items');
    if (!container) return;

    container.innerHTML = textListProjects.map((proj, i) => `
      <a href="${proj.link}" target="_blank" rel="noopener"
         class="work-text-list__item ${i === 0 ? 'active' : ''}"
         id="list-${proj.slug}"
         data-slug="${proj.slug}">
        ${proj.name}
      </a>
    `).join('');
  }

  function renderArchives() {
    const container = document.getElementById('workArchivesList') || document.querySelector('.work-archives__list');
    if (!container) return;

    const widthPatterns = [
      [1.4, 0.9, 1.2],
      [0.9, 1.3, 1.0],
      [1.2, 0.8, 1.4],
      [1.0, 1.4, 0.9],
      [1.3, 0.9, 1.1],
    ];

    container.innerHTML = archivesData.map((entry, i) => {
      const isRight = entry.isRight ? 'is-right' : '';
      const pattern = widthPatterns[i % widthPatterns.length];

      const imagesHTML = entry.images.map((img, j) => `
        <div class="work-archives__img-wrap" style="flex: ${pattern[j]}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async" class="work-archives__img" draggable="false" onload="this.classList.add('is-loaded')" />
        </div>
      `).join('');

      return `
        <div class="work-archives__row ${isRight}" id="ar-${entry.id}">
          <div class="work-archives__row-label">${entry.caption}</div>
          <div class="work-archives__images">${imagesHTML}</div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.work-archives__img').forEach(img => {
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add('is-loaded');
      }
    });
  }

  function initSplitTextAnimation() {
    const elements = document.querySelectorAll('[data-split-animate]');

    elements.forEach(el => {
      const nodes = Array.from(el.childNodes);
      el.innerHTML = '';

      let currentWord = document.createElement('span');
      currentWord.className = 'work-split-word';

      nodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'BR') {
          el.appendChild(currentWord);
          currentWord = document.createElement('span');
          currentWord.className = 'work-split-word';
        } else if (node.nodeType === Node.TEXT_NODE) {
          const chars = node.textContent.split('');
          chars.forEach(ch => {
            if (ch === ' ') {
              const space = document.createElement('span');
              space.innerHTML = '&nbsp;';
              currentWord.appendChild(space);
              return;
            }
            const mask = document.createElement('span');
            mask.className = 'work-split-char-mask';

            const charSpan = document.createElement('span');
            charSpan.className = 'work-split-char';
            charSpan.textContent = ch;

            mask.appendChild(charSpan);
            currentWord.appendChild(mask);
          });
        }
      });

      el.appendChild(currentWord);
    });

    const splitObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const allChars = entry.target.querySelectorAll('.work-split-char');
          const stagger = 45;
          allChars.forEach((charSpan, i) => {
            setTimeout(() => {
              charSpan.classList.add('risen');
            }, 60 + i * stagger);
          });
          splitObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    elements.forEach(el => splitObserver.observe(el));
  }

  function initTextListHover() {
    const container = document.getElementById('workProjectList');
    const items = document.querySelectorAll('.work-text-list__item');
    const video1 = document.getElementById('workShowcaseVideo1');
    const video2 = document.getElementById('workShowcaseVideo2');
    const imgEl = document.getElementById('workShowcaseImg');

    if (!items.length) return;

    let activeVideoEl = video1;
    let inactiveVideoEl = video2;
    let currentSlug = '';
    let isUserHovering = false;
    let hoverTimeout = null;

    let cursorX = 0;
    let cursorY = 0;
    let hasCursor = false;

    window.addEventListener('mousemove', (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      hasCursor = true;
    }, { passive: true });

    function switchVideo(url, poster) {
      if (!url) {
        if (imgEl && poster) {
          imgEl.src = poster;
          imgEl.style.display = 'block';
        }
        if (video1) video1.classList.remove('active');
        if (video2) video2.classList.remove('active');
        return;
      }

      const nextVideo = inactiveVideoEl;
      const currentVideo = activeVideoEl;

      if (!nextVideo) return;

      nextVideo.src = url;
      nextVideo.currentTime = 0;
      nextVideo.load();

      const playPromise = nextVideo.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            nextVideo.classList.add('active');
            if (currentVideo) {
              currentVideo.classList.remove('active');
              setTimeout(() => {
                if (!currentVideo.classList.contains('active')) {
                  currentVideo.pause();
                }
              }, 500);
            }
            if (imgEl) imgEl.style.display = 'none';

            activeVideoEl = nextVideo;
            inactiveVideoEl = currentVideo;
          })
          .catch(() => {
            if (imgEl && poster) {
              imgEl.src = poster;
              imgEl.style.display = 'block';
            }
          });
      }
    }

    function activateProject(proj, index) {
      if (!proj || proj.slug === currentSlug) return;
      currentSlug = proj.slug;

      items.forEach((el, i) => {
        if (i === index) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });

      switchVideo(proj.video, proj.preview);
    }

    if (textListProjects.length > 0) {
      activateProject(textListProjects[0], 0);
    }

    items.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        isUserHovering = true;
        clearTimeout(hoverTimeout);

        const slug = item.dataset.slug;
        const proj = textListProjects.find(p => p.slug === slug);
        if (proj) {
          activateProject(proj, index);
        }
      });

      item.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
          isUserHovering = false;
        }, 400);
      });
    });

    function handleScroll() {
      if (window.innerWidth < 769 || !container) return;

      if (hasCursor && cursorX > 0 && cursorY > 0) {
        const elUnderCursor = document.elementFromPoint(cursorX, cursorY);
        const hoveredItem = elUnderCursor ? elUnderCursor.closest('.work-text-list__item') : null;

        if (hoveredItem) {
          const slug = hoveredItem.dataset.slug;
          const itemIndex = Array.from(items).indexOf(hoveredItem);
          const proj = textListProjects.find(p => p.slug === slug);
          if (proj && itemIndex >= 0) {
            activateProject(proj, itemIndex);
            return;
          }
        }
      }

      if (!isUserHovering) {
        const windowHeight = window.innerHeight;
        const focalY = windowHeight * 0.5;

        let closestIndex = 0;
        let minDistance = Infinity;

        items.forEach((item, index) => {
          const rect = item.getBoundingClientRect();
          const itemCenter = rect.top + rect.height / 2;
          const distance = Math.abs(itemCenter - focalY);

          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        });

        const proj = textListProjects[closestIndex];
        if (proj) {
          activateProject(proj, closestIndex);
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  function initArchivesParallax() {
    const rows = document.querySelectorAll('.work-archives__row');
    if (!rows.length) return;

    const MAX_OFFSET = 180;
    const LERP_FACTOR = 0.075;

    const rowStates = Array.from(rows).map(row => ({
      row,
      imagesEl: row.querySelector('.work-archives__images'),
      isRight: row.classList.contains('is-right'),
      currentTx: 0,
      targetTx: 0,
      initialized: false
    }));

    function updateTargets() {
      const vh = window.innerHeight;

      rowStates.forEach(state => {
        if (!state.imagesEl) return;
        const rect = state.row.getBoundingClientRect();
        
        const rowCenter = rect.top + rect.height / 2;
        const raw = (rowCenter - vh * 0.5) / (vh * 0.7);
        const progress = Math.max(-1, Math.min(1, raw));

        state.targetTx = state.isRight ? progress * MAX_OFFSET : -progress * MAX_OFFSET;

        if (!state.initialized) {
          state.currentTx = state.targetTx;
          state.imagesEl.style.transform = `translate3d(${state.currentTx.toFixed(2)}px, 0, 0)`;
          state.initialized = true;
        }
      });
    }

    let isRunning = false;
    function animate() {
      let hasMovement = false;

      rowStates.forEach(state => {
        if (!state.imagesEl) return;

        const diff = state.targetTx - state.currentTx;
        if (Math.abs(diff) > 0.05) {
          state.currentTx += diff * LERP_FACTOR;
          state.imagesEl.style.transform = `translate3d(${state.currentTx.toFixed(2)}px, 0, 0)`;
          hasMovement = true;
        } else if (state.currentTx !== state.targetTx) {
          state.currentTx = state.targetTx;
          state.imagesEl.style.transform = `translate3d(${state.currentTx.toFixed(2)}px, 0, 0)`;
        }
      });

      if (hasMovement) {
        requestAnimationFrame(animate);
      } else {
        isRunning = false;
      }
    }

    function onScroll() {
      updateTargets();
      if (!isRunning) {
        isRunning = true;
        requestAnimationFrame(animate);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => {
      updateTargets();
      if (!isRunning) {
        isRunning = true;
        requestAnimationFrame(animate);
      }
    }, { passive: true });

    updateTargets();
    onScroll();
  }

  function initPushableImages() {
    const imageWrappers = document.querySelectorAll('.work-archives__img-wrap');
    if (!imageWrappers.length) return;

    let prevMouseX = 0;
    let prevMouseY = 0;
    let mouseVx = 0;
    let mouseVy = 0;
    let lastMoveTime = performance.now();

    window.addEventListener('pointermove', (e) => {
      const now = performance.now();
      const dt = Math.max(now - lastMoveTime, 8);
      
      const instantVx = ((e.clientX - prevMouseX) / dt) * 16;
      const instantVy = ((e.clientY - prevMouseY) / dt) * 16;

      mouseVx = mouseVx * 0.3 + instantVx * 0.7;
      mouseVy = mouseVy * 0.3 + instantVy * 0.7;

      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
      lastMoveTime = now;
    }, { passive: true });

    const states = Array.from(imageWrappers).map(wrap => ({
      wrap,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0
    }));

    let isPhysicsRunning = false;

    function physicsLoop() {
      let anyActive = false;

      states.forEach(state => {
        const speed = Math.hypot(state.vx, state.vy);
        const dist = Math.hypot(state.x, state.y);

        if (speed > 0.05 || dist > 0.05) {
          state.x += state.vx;
          state.y += state.vy;

          state.vx *= 0.80;
          state.vy *= 0.80;

          state.x *= 0.86;
          state.y *= 0.86;

          const maxD = 120;
          const currentD = Math.hypot(state.x, state.y);
          if (currentD > maxD) {
            state.x = (state.x / currentD) * maxD;
            state.y = (state.y / currentD) * maxD;
          }

          const rot = (state.x * 0.04 + state.vx * 0.1).toFixed(2);
          const scale = (1 + Math.min(currentD * 0.0004, 0.05)).toFixed(3);

          state.wrap.style.transform = `translate3d(${state.x.toFixed(2)}px, ${state.y.toFixed(2)}px, 0) rotate(${rot}deg) scale(${scale})`;
          anyActive = true;
        } else {
          if (state.x !== 0 || state.y !== 0 || state.vx !== 0 || state.vy !== 0) {
            state.x = 0;
            state.y = 0;
            state.vx = 0;
            state.vy = 0;
            state.wrap.style.transform = '';
          }
        }
      });

      if (anyActive) {
        requestAnimationFrame(physicsLoop);
      } else {
        isPhysicsRunning = false;
      }
    }

    function ensurePhysicsRunning() {
      if (!isPhysicsRunning) {
        isPhysicsRunning = true;
        requestAnimationFrame(physicsLoop);
      }
    }

    states.forEach(state => {
      const { wrap } = state;

      function applyPushImpulse() {
        const mouseSpeed = Math.hypot(mouseVx, mouseVy);
        if (mouseSpeed > 1.2) {
          const pushStrength = 0.85;
          state.vx += mouseVx * pushStrength;
          state.vy += mouseVy * pushStrength;

          const maxV = 40;
          const currentV = Math.hypot(state.vx, state.vy);
          if (currentV > maxV) {
            state.vx = (state.vx / currentV) * maxV;
            state.vy = (state.vy / currentV) * maxV;
          }

          ensurePhysicsRunning();
        }
      }

      wrap.addEventListener('pointermove', applyPushImpulse);
      wrap.addEventListener('pointerenter', applyPushImpulse);
    });
  }

  function initPlaygroundCards() {
    const cards = document.querySelectorAll('.home-playground-card');
    if (!cards.length) return;

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('risen');
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    cards.forEach(card => cardObserver.observe(card));
  }

  function initRevealObserver() {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.02, rootMargin: '0px 0px -20px 0px' }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));
  }

  function initCursorFollower() {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const cursor = document.getElementById('workCustomCursor') || document.querySelector('.work-custom-cursor');
    if (!cursor) return;

    const cursorText = cursor.querySelector('.work-custom-cursor__text');

    let mouseX = -100, mouseY = -100;
    let cursorX = -100, cursorY = -100;

    const CURSOR_LERP = 0.18;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!cursor.classList.contains('is-active')) {
        cursor.classList.add('is-active');
      }
    });

    document.addEventListener('mouseleave', () => {
      cursor.classList.remove('is-active');
    });

    document.addEventListener('mouseenter', () => {
      cursor.classList.add('is-active');
    });

    function animate() {
      cursorX += (mouseX - cursorX) * CURSOR_LERP;
      cursorY += (mouseY - cursorY) * CURSOR_LERP;

      cursor.style.left = (cursorX + 12) + 'px';
      cursor.style.top = (cursorY + 12) + 'px';

      requestAnimationFrame(animate);
    }

    function setupHoverListeners() {
      const hoverTargets = document.querySelectorAll(
        'a, button, [role="button"], [data-cursor-hover]'
      );

      hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => {
          const hoverText = target.getAttribute('data-cursor-hover');
          if (hoverText && cursorText) {
            cursorText.textContent = hoverText;
            cursor.classList.add('is-hover');
          } else {
            cursor.style.width = '24px';
            cursor.style.height = '24px';
          }
        });

        target.addEventListener('mouseleave', () => {
          cursor.classList.remove('is-hover');
          cursor.style.width = '';
          cursor.style.height = '';
          if (cursorText) cursorText.textContent = '';
        });
      });
    }

    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('a, button, [role="button"], [data-cursor-hover]');
      if (target) {
        const hoverText = target.getAttribute('data-cursor-hover');
        if (hoverText && cursorText) {
          cursorText.textContent = hoverText;
          cursor.classList.add('is-hover');
        } else {
          cursor.style.width = '24px';
          cursor.style.height = '24px';
        }
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('a, button, [role="button"], [data-cursor-hover]');
      if (target && !target.contains(e.relatedTarget)) {
        cursor.classList.remove('is-hover');
        cursor.style.width = '';
        cursor.style.height = '';
        if (cursorText) cursorText.textContent = '';
      }
    });

    setupHoverListeners();
    requestAnimationFrame(animate);
  }

  function initWork() {
    renderPlaygroundCards();
    renderTextList();
    renderArchives();
    initSplitTextAnimation();
    initPlaygroundCards();
    initRevealObserver();
    initTextListHover();
    initArchivesParallax();
    initPushableImages();
    initCursorFollower();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWork);
  } else {
    initWork();
  }
})();