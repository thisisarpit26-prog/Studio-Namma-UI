(() => {
    let darkModeVar = false;

    function initNavbar() {
        let navbar = document.querySelector(".navbar");
        if (!navbar) {
            navbar = document.createElement("nav");
            navbar.className = "navbar";
            navbar.id = "navbar";
            document.body.prepend(navbar);
        }

        navbar.innerHTML = "";

        const leftDiv = document.createElement("div");
        leftDiv.className = "navbar-left";

        const headingDiv = document.createElement("div");
        headingDiv.className = "navbar-heading-div navbar-h1-div";

        const heading = document.createElement("a");
        heading.href = "index.html";
        heading.innerText = "STUDIO NAMMA";
        heading.className = "navbar-heading navbar-h1";
        headingDiv.appendChild(heading);

        const themeDiv = document.createElement("div");
        themeDiv.className = "navbar-theme-div navbar-h1-div";

        const themeh1 = document.createElement("span");
        themeh1.innerText = "DARK MODE";
        themeh1.className = "navbar-theme-h1 navbar-h1";
        themeDiv.appendChild(themeh1);

        leftDiv.append(headingDiv, themeDiv);

        const rightDiv = document.createElement("div");
        rightDiv.className = "navbar-right";

        const menuDiv = document.createElement("div");
        menuDiv.className = "navbar-menu-div navbar-h1-div";

        const menuh1 = document.createElement("span");
        menuh1.innerText = "MENU";
        menuh1.className = "navbar-menu-h1-btn navbar-h1";
        menuDiv.appendChild(menuh1);

        const letstalkDiv = document.createElement("div");
        letstalkDiv.className = "navbar-letstalk-div navbar-h1-div";

        const letsTalkh1 = document.createElement("span");
        letsTalkh1.innerText = "LET'S TALK !";
        letsTalkh1.className = "navbar-letstalk-h1 navbar-h1";
        letstalkDiv.appendChild(letsTalkh1);

        rightDiv.append(menuDiv, letstalkDiv);
        navbar.append(leftDiv, rightDiv);

        let menuPage = document.querySelector(".navbar-menu-page");
        if (!menuPage) {
            menuPage = document.createElement("div");
            menuPage.className = "navbar-menu-page";
            document.body.appendChild(menuPage);
        }
        menuPage.innerHTML = "";

        const menuGrid = document.createElement("div");
        menuGrid.className = "navbar-menu-grid";

        const col1Data = [
            { name: "HOME", href: "index.html", video: "assets/playground-video1.mp4" },
            { name: "WORK", href: "work.html", video: "assets/playground-video2.mp4" },
            { name: "SERVICES", href: "index.html#services", video: "assets/playground-video3.mp4" },
            { name: "APPROACH", href: "#", video: "assets/playground-video4.mp4" }
        ];

        const col2Data = [
            { name: "STUDIO", href: "#", video: "assets/playground-video1.mp4" },
            { name: "PLANS", href: "#", video: "assets/playground-video2.mp4" },
            { name: "NEWS", href: "#", video: "assets/playground-video3.mp4" }
        ];

        function createMenuCol(items) {
            const col = document.createElement("div");
            col.className = "navbar-menu-col";

            items.forEach((item, i) => {
                const box = document.createElement("a");
                box.href = item.href;
                box.className = "navbar-menu-box";

                const videoWrap = document.createElement("div");
                videoWrap.className = "navbar-menu-video";

                const videoReal = document.createElement("video");
                videoReal.className = "navbar-video-real";
                videoReal.src = item.video;
                videoReal.autoplay = true;
                videoReal.loop = true;
                videoReal.muted = true;
                videoReal.playsInline = true;
                videoWrap.append(videoReal);

                const menuH1 = document.createElement("h1");
                menuH1.innerText = item.name;
                menuH1.className = "navbar-menu-h1";

                box.addEventListener("mouseenter", () => {
                    videoWrap.classList.remove("navbar-anim-video-collapse");
                    videoWrap.classList.add("navbar-anim-video-expand");
                    videoWrap.style.width = "160px";
                    videoReal.play().catch(() => {});
                });

                box.addEventListener("mouseleave", () => {
                    videoWrap.classList.remove("navbar-anim-video-expand");
                    videoWrap.classList.add("navbar-anim-video-collapse");
                    videoWrap.style.width = "0px";
                });

                box.append(videoWrap, menuH1);
                col.appendChild(box);
            });

            return col;
        }

        menuGrid.append(createMenuCol(col1Data), createMenuCol(col2Data));
        menuPage.appendChild(menuGrid);

        let menuFlag = false;

        navbar.querySelectorAll(".navbar-h1").forEach((h1) => {
            h1.addEventListener("mouseenter", () => {
                h1.classList.add("navbar-heading-animation");
                if (h1.classList.contains("navbar-menu-h1-btn")) {
                    setTimeout(() => {
                        if (!menuFlag) h1.innerText = "OPEN";
                    }, 150);
                } else if (h1.classList.contains("navbar-letstalk-h1")) {
                    setTimeout(() => {
                        h1.innerText = "CONTACT US";
                    }, 150);
                }
            });

            h1.addEventListener("mouseleave", () => {
                h1.classList.remove("navbar-heading-animation");
                if (h1.classList.contains("navbar-menu-h1-btn")) {
                    setTimeout(() => {
                        if (!menuFlag) h1.innerText = "MENU";
                    }, 150);
                } else if (h1.classList.contains("navbar-letstalk-h1")) {
                    setTimeout(() => {
                        h1.innerText = "LET'S TALK !";
                    }, 150);
                }
            });
        });

        themeDiv.addEventListener("click", () => {
            darkModeVar = !darkModeVar;
            if (darkModeVar) {
                document.documentElement.setAttribute("data-theme", "dark");
                themeh1.innerText = "LIGHT MODE";
            } else {
                document.documentElement.setAttribute("data-theme", "light");
                themeh1.innerText = "DARK MODE";
            }
        });

        menuDiv.addEventListener("click", () => {
            menuFlag = !menuFlag;
            if (menuFlag) {
                menuh1.innerText = "CLOSE";
                menuPage.style.display = "block";
            } else {
                menuh1.innerText = "MENU";
                menuPage.style.display = "none";
            }
        });

        letstalkDiv.addEventListener("click", () => {
            createContactPage();
        });
    }

    function createContactPage() {
        if (document.querySelector(".navbar-contact-page")) {
            return;
        }

        const contactPage = document.createElement("div");
        contactPage.className = "navbar-contact-page";

        const letsWork = document.createElement("h1");
        letsWork.innerText = "LET'S WORK";
        letsWork.className = "navbar-contact-letswork";

        const togetherDiv = document.createElement("div");
        togetherDiv.className = "navbar-contact-together-div";

        const videoDiv = document.createElement("div");
        videoDiv.className = "navbar-contact-video";

        const video = document.createElement("video");
        video.className = "navbar-contact-video-real";
        video.src = "assets/playground-video1.mp4";
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        videoDiv.append(video);

        const together = document.createElement("h1");
        together.innerText = "TOGETHER";
        together.className = "navbar-contact-together";

        together.addEventListener("mouseenter", () => {
            videoDiv.style.width = "150px";
            video.play().catch(() => {});
        });

        together.addEventListener("mouseleave", () => {
            videoDiv.style.width = "0px";
        });

        togetherDiv.append(videoDiv, together);
        contactPage.append(letsWork, togetherDiv);

        const close = document.createElement("div");
        close.innerText = "CLOSE [X]";
        close.className = "navbar-contact-close";
        close.addEventListener("click", () => {
            contactPage.remove();
        });
        contactPage.append(close);

        const contactForm = document.createElement("div");
        contactForm.className = "navbar-contact-form";

        const nameRow = document.createElement("div");
        nameRow.className = "navbar-contact-row";
        const nameLabel = document.createElement("label");
        nameLabel.innerText = "NAME";
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.placeholder = "CHUCK NORRIS";
        nameRow.append(nameLabel, nameInput);

        const emailRow = document.createElement("div");
        emailRow.className = "navbar-contact-row";
        const emailLabel = document.createElement("label");
        emailLabel.innerText = "EMAIL";
        const emailInput = document.createElement("input");
        emailInput.type = "email";
        emailInput.placeholder = "WALKER@TEXAS-RANGERS.COM";
        emailRow.append(emailLabel, emailInput);

        const phoneRow = document.createElement("div");
        phoneRow.className = "navbar-contact-row";
        const phoneLabel = document.createElement("label");
        phoneLabel.innerText = "PHONE";
        const phoneInput = document.createElement("input");
        phoneInput.type = "text";
        phoneInput.placeholder = "XX XX XX XX XX";
        phoneRow.append(phoneLabel, phoneInput);

        const interestRow = document.createElement("div");
        interestRow.className = "navbar-contact-row";
        const interestLabel = document.createElement("label");
        interestLabel.innerText = "INTEREST";

        const interests = document.createElement("div");
        interests.className = "navbar-interests";

        ["DESIGN", "WEBFLOW DEVELOPMENT", "FULL PACKAGE"].forEach((tag) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.innerText = tag;
            btn.addEventListener("click", () => {
                btn.classList.toggle("is-selected");
            });
            interests.appendChild(btn);
        });

        interestRow.append(interestLabel, interests);

        const msgRow = document.createElement("div");
        msgRow.className = "navbar-contact-row";
        const msgLabel = document.createElement("label");
        msgLabel.innerText = "MESSAGE";
        const msgInput = document.createElement("input");
        msgInput.type = "text";
        msgInput.placeholder = "GIVE US A SHORT BRIEF, DEADLINE, ETC.";
        msgRow.append(msgLabel, msgInput);

        contactForm.append(nameRow, emailRow, phoneRow, interestRow, msgRow);
        contactPage.append(contactForm);

        document.body.append(contactPage);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initNavbar);
    } else {
        initNavbar();
    }
})();