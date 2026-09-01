// =========================================
//   FOOTER COMPONENT (Studio Namma - Pixel Perfect)
// =========================================

(() => {
    const footerVideos = [
        "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa249c8ad1d2624abf3d5_Footer-Service-designV2-transcode.mp4",
        "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa1926bb2adbd4315d488_Zefir%20footerV2-transcode.mp4",
        "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa2440a49684a10b9e055_FOOTER%20-%20BRANDINGV2-transcode.mp4",
        "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa20fc54b7796aaa5edf6_SILVR-Video%201%20footersV3-transcode.mp4",
        "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa0feb2681e0616dc3b3a_Footer-supercomics-transcode.mp4",
        "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa22f852959114b6c7b56_OSOL-COVER-footer-V2-transcode.mp4"
    ];

    const footerPageLinks = [
        { title: "HOME", href: "index.html" },
        { title: "WORK", href: "work.html" },
        { title: "SERVICES", href: "index.html#services" },
        { title: "STUDIO", href: "#" },
        { title: "PLANS", href: "#" },
        { title: "APPROACH", href: "#" },
        { title: "NEWS", href: "#" }
    ];

    const footerSocialLinks = [
        { title: "YOUTUBE", href: "https://www.youtube.com" },
        { title: "LINKEDIN", href: "https://www.linkedin.com" },
        { title: "INSTAGRAM", href: "https://www.instagram.com" },
        { title: "LEGAL", href: "#" },
        { title: "SITE EN FRANÇAIS", href: "#" }
    ];

    const cities = [
        { name: 'PARIS, FRANCE', tz: 'Europe/Paris' },
        { name: 'BARCELONA, SPAIN', tz: 'Europe/Madrid' },
        { name: 'LOS ANGELES, CA', tz: 'America/Los_Angeles' },
        { name: 'HONG KONG, CHINA', tz: 'Asia/Hong_Kong' },
        { name: 'LONDON, UK', tz: 'Europe/London' }
    ];
    let currentCityIndex = 0;

    function initFooter() {
        let footerEl = document.querySelector(".site-footer");
        if (!footerEl) {
            footerEl = document.createElement("footer");
            footerEl.className = "site-footer";
            footerEl.id = "footer";
            document.body.appendChild(footerEl);
        }

        footerEl.innerHTML = "";

        // =========================================
        // BOX 1: PITCH & LET'S WORK TOGETHER
        // =========================================
        const box1 = document.createElement("div");
        box1.className = "footer-box1";

        // Left: LET'S WORK + [IMAGE] TOGETHER
        const box1Left = document.createElement("div");
        box1Left.className = "footer-box1-left";

        const title1 = document.createElement("h1");
        title1.className = "footer-box1-title footer-animate";
        title1.textContent = "LET'S WORK";

        const row2 = document.createElement("div");
        row2.className = "footer-box1-row2";

        const imageWrap = document.createElement("div");
        imageWrap.className = "footer-box1-image footer-animate-image";

        const img = document.createElement("img");
        img.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80";
        img.alt = "Studio Namma Team";
        img.loading = "lazy";
        imageWrap.appendChild(img);

        const title2 = document.createElement("h1");
        title2.className = "footer-box1-title footer-animate";
        title2.textContent = "TOGETHER";

        row2.append(imageWrap, title2);
        box1Left.append(title1, row2);

        // Right: Pitch text & Say Hello link
        const box1Right = document.createElement("div");
        box1Right.className = "footer-box1-right";

        const p1 = document.createElement("p");
        p1.textContent = "Work with us if average isn’t your thing.";

        const p2 = document.createElement("p");
        p2.textContent = "Drop it, we'll build it!";

        const sayHelloLink = document.createElement("a");
        sayHelloLink.className = "footer-box1-right-link";
        sayHelloLink.textContent = "SAY HELLO  -->";
        sayHelloLink.href = "mailto:HELLO@STUDIONAMMA.COM";

        box1Right.append(p1, p2, sayHelloLink);
        box1.append(box1Left, box1Right);
        footerEl.appendChild(box1);

        // =========================================
        // BOX 2: HORIZONTAL VIDEO REEL
        // =========================================
        const box2 = document.createElement("div");
        box2.className = "footer-box2";

        footerVideos.forEach((videoUrl) => {
            const card = document.createElement("div");
            card.className = "footer-video-card";

            const video = document.createElement("video");
            video.src = videoUrl;
            video.autoplay = true;
            video.loop = true;
            video.muted = true;
            video.playsInline = true;

            card.appendChild(video);
            box2.appendChild(card);
        });

        footerEl.appendChild(box2);

        // =========================================
        // BOX 3: NAVIGATION & INFO
        // =========================================
        const box3 = document.createElement("div");
        box3.className = "footer-box3";

        // Left Links
        const box3Left = document.createElement("div");
        box3Left.className = "footer-box3-left";

        const pageLinksCol = document.createElement("div");
        pageLinksCol.className = "footer-links-col";
        footerPageLinks.forEach((link) => {
            const a = document.createElement("a");
            a.textContent = link.title;
            a.href = link.href;
            pageLinksCol.appendChild(a);
        });

        const socialLinksCol = document.createElement("div");
        socialLinksCol.className = "footer-links-col";
        footerSocialLinks.forEach((link) => {
            const a = document.createElement("a");
            a.textContent = link.title;
            a.href = link.href;
            if (link.href.startsWith("http")) {
                a.target = "_blank";
                a.rel = "noopener noreferrer";
            }
            socialLinksCol.appendChild(a);
        });

        box3Left.append(pageLinksCol, socialLinksCol);

        // Right Info Details
        const box3Right = document.createElement("div");
        box3Right.className = "footer-box3-right";

        const infoP1 = document.createElement("p");
        infoP1.innerHTML = "WE ARE A CREATIVE STUDIO BASED IN PARIS, BARCELONA<br>& LONDON.";

        const infoP2 = document.createElement("p");
        infoP2.innerHTML = "BIG PROJECT? CRAZY THOUGHT? OR JUST FEEL LIKE<br>CHATTING?";

        const infoP3 = document.createElement("p");
        infoP3.textContent = "LET'S TALK!";

        const infoP4 = document.createElement("p");
        const mailLink = document.createElement("a");
        mailLink.href = "mailto:HELLO@STUDIONAMMA.COM";
        mailLink.textContent = "HELLO@STUDIONAMMA.COM";
        infoP4.appendChild(mailLink);

        const infoP5 = document.createElement("p");
        infoP5.innerHTML = "COPYRIGHT 2025<br>STUDIO NAMMA";

        box3Right.append(infoP1, infoP2, infoP3, infoP4, infoP5);
        box3.append(box3Left, box3Right);
        footerEl.appendChild(box3);

        // =========================================
        // BOX 4: BIG "NAMMA" DISPLAY
        // =========================================
        const box4 = document.createElement("div");
        box4.className = "footer-box4";
        box4.textContent = "NAMMA";
        footerEl.appendChild(box4);

        // =========================================
        // SCROLL REVEAL OBSERVERS
        // =========================================
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("footer-show");
                    footerObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        footerEl.querySelectorAll(".footer-animate").forEach((el) => {
            footerObserver.observe(el);
        });

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("footer-show-image");
                    }, 300);
                    imageObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        footerEl.querySelectorAll(".footer-animate-image").forEach((el) => {
            imageObserver.observe(el);
        });

        // =========================================
        // FIXED TICKER BAR
        // =========================================
        let tickerBar = document.querySelector(".site-ticker-bar");
        if (!tickerBar) {
            tickerBar = document.createElement("div");
            tickerBar.className = "site-ticker-bar";
            tickerBar.innerHTML = `
                <div class="site-ticker-bar__left">WE CRAFT BOLD DESIGN & CLEAN WEBFLOW</div>
                <div class="site-ticker-bar__right">
                    <span class="ticker-city">PARIS, FRANCE</span>
                    <span class="ticker-time">17:44:49</span>
                </div>
            `;
            document.body.appendChild(tickerBar);
        }

        function updateTickerTime() {
            const cityEl = document.querySelector(".ticker-city");
            const timeEl = document.querySelector(".ticker-time");
            if (!cityEl || !timeEl) return;

            const city = cities[currentCityIndex];
            cityEl.textContent = city.name;
            const timeString = new Intl.DateTimeFormat('en-GB', {
                hour: '2-digit', minute: '2-digit', second: '2-digit',
                hour12: false, timeZone: city.tz
            }).format(new Date());

            timeEl.textContent = timeString;
        }

        setInterval(updateTickerTime, 1000);
        setInterval(() => {
            currentCityIndex = (currentCityIndex + 1) % cities.length;
            updateTickerTime();
        }, 5000);
        updateTickerTime();

        // =========================================
        // FLOATING WHATSAPP BUTTON & CHAT MODAL
        // =========================================
        if (!document.querySelector(".floating-whatsapp-btn")) {
            const waBtn = document.createElement("div");
            waBtn.className = "floating-whatsapp-btn";
            waBtn.innerHTML = `<img src="images/whatsapp.png" alt="WhatsApp">`;

            const waModal = document.createElement("div");
            waModal.className = "whatsapp-modal";
            waModal.innerHTML = `
                <div class="whatsapp-modal__header">
                    <div class="whatsapp-modal__avatar">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Gabriel">
                    </div>
                    <div class="whatsapp-modal__info">
                        <h4>Gabriel (Studio Namma)</h4>
                        <span>Online</span>
                    </div>
                    <button class="whatsapp-modal__close" type="button">&times;</button>
                </div>
                <div class="whatsapp-modal__body">
                    <div class="whatsapp-modal__bubble">
                        Hello, welcome to Namma! Do you want to tell us about your project? Write to us directly here 😊 (Si tu parles français, nous aussi !)
                    </div>
                </div>
                <div class="whatsapp-modal__footer">
                    <a class="whatsapp-modal__action-btn" href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                        Chat on WhatsApp
                    </a>
                </div>
            `;

            let waOpen = false;
            waBtn.addEventListener("click", () => {
                waOpen = !waOpen;
                waModal.style.display = waOpen ? "block" : "none";
            });

            const closeBtn = waModal.querySelector(".whatsapp-modal__close");
            if (closeBtn) {
                closeBtn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    waOpen = false;
                    waModal.style.display = "none";
                });
            }

            document.body.append(waBtn, waModal);
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initFooter);
    } else {
        initFooter();
    }
})();