(() => {
    const heroLinesData = [
        'WE THINK',
        'CRAFT AND',
        'DESIGN'
    ];

    const playgroundCardsData = [
        { video: 'assets/playground-video1.mp4', photo: 'assets/playground-photo1.webp', alt: 'Studio Namma Project 1' },
        { video: 'assets/playground-video2.mp4', photo: 'assets/playground-photo2.webp', alt: 'Studio Namma Project 2' },
        { video: 'assets/playground-video3.mp4', photo: 'assets/playground-photo3.webp', alt: 'Studio Namma Project 3' },
        { video: 'assets/playground-video4.mp4', photo: 'assets/playground-photo4.webp', alt: 'Studio Namma Project 4' }
    ];

    const servicesData = [
        {
            title: 'ART DIRECTION',
            tag: 'STORYTELLING',
            video: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef694221ab31dc7a0898e_Home-artdirection-transcode.webm'
        },
        {
            title: 'BRANDING',
            tag: 'IDENTITY',
            video: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef76a17912168bc67811f_Home-branding-transcode.webm'
        },
        {
            title: 'WEBFLOW',
            tag: 'INTEGRATION',
            video: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef7ea54539b4433a39276_Webflow-home-transcode.webm'
        },
        {
            title: 'UI/UX DESIGN',
            tag: 'WIREFRAMES',
            video: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef86a1717db6af24e06f2_UI-UX-Home-transcode.webm'
        },
        {
            title: 'GSAP ANIMATIONS',
            tag: 'TRANSITIONS',
            video: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F69f31d237bb976aa6e0bc834_Scene-1_webm.webm'
        },
        {
            title: 'ADVERTISING',
            tag: 'CREATIVE ADS',
            video: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68df9e1b94554da67438cec0_Ads-service-homeV3-transcode.mp4'
        },
        {
            title: 'SEO & CONTENT',
            tag: 'RANKING',
            video: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68befca9c05567e63bc4d4a0_seo%20content%20home-transcode.webm'
        }
    ];

    function renderHeroLines() {
        const container = document.getElementById('homeHeroText') || document.querySelector('.home-hero-text');
        if (!container) return;
        container.innerHTML = '';
        heroLinesData.forEach(text => {
            const lineOverflow = document.createElement('div');
            lineOverflow.className = 'home-hero-line-overflow';
            lineOverflow.innerHTML = `<p class="home-hero-line" data-split-animate>${text}</p>`;
            container.appendChild(lineOverflow);
        });
    }

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

    function renderServices() {
        const container = document.getElementById('homeServicesContainer') || document.querySelector('.home-services-container');
        if (!container) return;
        container.innerHTML = '';
        servicesData.forEach(item => {
            const serviceItem = document.createElement('div');
            serviceItem.className = 'home-service-container';
            serviceItem.setAttribute('data-tag', item.tag);
            serviceItem.innerHTML = `
                <div class="home-service-preview-box">
                    <video class="home-service-preview-video" src="${item.video}" muted loop playsinline></video>
                </div>
                <span class="home-service-title">${item.title}</span>
                <span class="home-service-tag">${item.tag}</span>
            `;
            container.appendChild(serviceItem);
        });
    }

    function renderAllDynamicContent() {
        renderHeroLines();
        renderPlaygroundCards();
        renderServices();
    }

    function initHeroLines() {
        const CHAR_STAGGER = 40;
        const START_DELAY = 80;

        document.querySelectorAll('.home-hero-text .home-hero-line').forEach(line => {
            const text = line.textContent;
            line.innerHTML = '';

            text.split('').forEach(ch => {
                if (ch === ' ') {
                    const space = document.createElement('span');
                    space.innerHTML = '&nbsp;';
                    line.appendChild(space);
                    return;
                }
                const mask = document.createElement('span');
                mask.className = 'home-split-char-mask';
                const charSpan = document.createElement('span');
                charSpan.className = 'home-split-char';
                charSpan.textContent = ch;
                mask.appendChild(charSpan);
                line.appendChild(mask);
            });

            line.querySelectorAll('.home-split-char').forEach((ch, i) => {
                setTimeout(() => ch.classList.add('risen'), START_DELAY + i * CHAR_STAGGER);
            });
        });
    }

    function initSplitTextAnimation() {
        const elements = document.querySelectorAll('[data-split-animate]');

        elements.forEach(el => {
            if (el.closest('.home-hero-text')) return;

            const text = el.textContent;
            el.innerHTML = '';

            text.split('').forEach(ch => {
                if (ch === ' ') {
                    const space = document.createElement('span');
                    space.innerHTML = '&nbsp;';
                    el.appendChild(space);
                    return;
                }
                const mask = document.createElement('span');
                mask.className = 'home-split-char-mask';
                const charSpan = document.createElement('span');
                charSpan.className = 'home-split-char';
                charSpan.textContent = ch;
                mask.appendChild(charSpan);
                el.appendChild(mask);
            });
        });

        const splitObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const chars = entry.target.querySelectorAll('.home-split-char');
                    chars.forEach((ch, i) => {
                        setTimeout(() => ch.classList.add('risen'), 40 + i * 30);
                    });
                    splitObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.02, rootMargin: '0px 0px -20px 0px' });

        document.querySelectorAll('[data-split-animate]').forEach(el => {
            if (!el.closest('.home-hero-text')) {
                splitObserver.observe(el);
            }
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

    function initServicesSection() {
        const servicesContainer = document.querySelector('.home-services-container');
        const serviceItems = document.querySelectorAll('.home-service-container');

        if (!servicesContainer || !serviceItems.length) return;

        serviceItems.forEach(item => {
            const video = item.querySelector('.home-service-preview-video');

            item.addEventListener('mouseenter', () => {
                servicesContainer.classList.add('has-hover');
                item.classList.add('is-hovered');

                if (video) {
                    video.currentTime = 0;
                    video.play().catch(() => {});
                }
            });

            item.addEventListener('mouseleave', () => {
                item.classList.remove('is-hovered');
                if (video) {
                    video.pause();
                }
            });
        });

        servicesContainer.addEventListener('mouseleave', () => {
            servicesContainer.classList.remove('has-hover');
        });
    }

    function initCursorFollower() {
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

        const cursor = document.getElementById('homeCustomCursor');
        const movingVisual = document.getElementById('homeMovingVisual');
        const cursorText = cursor ? cursor.querySelector('.home-custom-cursor__text') : null;

        if (!cursor || !movingVisual) return;

        let mouseX = -100, mouseY = -100;
        let cursorX = -100, cursorY = -100;
        let visualX = -100, visualY = -100;

        const CURSOR_LERP = 0.18;
        const VISUAL_LERP = 0.09;

        let isInHero = false;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        document.addEventListener('mouseleave', () => {
            cursor.classList.remove('is-active');
            movingVisual.classList.remove('is-active');
        });

        function getIsInHero() {
            const heroSection = document.querySelector('.home-hero');
            if (!heroSection) return false;
            const rect = heroSection.getBoundingClientRect();
            return (
                mouseX >= rect.left &&
                mouseX <= rect.right &&
                mouseY >= rect.top &&
                mouseY <= rect.bottom
            );
        }

        function updateCursorVisibility() {
            isInHero = getIsInHero();

            if (isInHero) {
                cursor.classList.remove('is-active');
                movingVisual.classList.add('is-active');
            } else {
                movingVisual.classList.remove('is-active');
                cursor.classList.add('is-active');
            }
        }

        function animate() {
            cursorX += (mouseX - cursorX) * CURSOR_LERP;
            cursorY += (mouseY - cursorY) * CURSOR_LERP;

            visualX += (mouseX - visualX) * VISUAL_LERP;
            visualY += (mouseY - visualY) * VISUAL_LERP;

            cursor.style.left = (cursorX + 12) + 'px';
            cursor.style.top = (cursorY + 12) + 'px';

            movingVisual.style.left = (visualX + 24) + 'px';
            movingVisual.style.top = (visualY + 24) + 'px';

            updateCursorVisibility();
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

        setupHoverListeners();
        requestAnimationFrame(animate);
    }

    function initHome() {
        renderAllDynamicContent();
        initHeroLines();
        initSplitTextAnimation();
        initPlaygroundCards();
        initServicesSection();
        initCursorFollower();

        const homeRevealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        homeRevealObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.02, rootMargin: '0px 0px -20px 0px' }
        );

        document.querySelectorAll('[data-reveal]').forEach((el) => homeRevealObserver.observe(el));

        const logoSection = document.querySelector('.home-logo');
        if (logoSection) {
            const logoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const logos = entry.target.querySelectorAll('.home-client-logo');
                        logos.forEach((logo, i) => {
                            setTimeout(() => logo.classList.add('risen'), i * 120);
                        });
                        logoObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.05 });
            logoObserver.observe(logoSection);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHome);
    } else {
        initHome();
    }
})();
