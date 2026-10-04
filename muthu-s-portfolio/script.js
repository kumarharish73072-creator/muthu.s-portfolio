/* =====================================
   MUTHU PORTFOLIO — INTERACTIONS
===================================== */


/* =====================================
   1. PAGE LOAD ANIMATION
===================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* =====================================
   2. CUSTOM CURSOR
===================================== */

const cursor = document.createElement("div");

cursor.classList.add("custom-cursor");

document.body.appendChild(cursor);


const cursorText = document.createElement("span");

cursorText.innerText = "VIEW";

cursor.appendChild(cursorText);


document.addEventListener("mousemove", (e) => {

    cursor.style.left = `${e.clientX}px`;

    cursor.style.top = `${e.clientY}px`;

});


/* =====================================
   3. PROJECT HOVER
===================================== */

const projectVideos =
    document.querySelectorAll(".project-video");


projectVideos.forEach((project) => {

    project.addEventListener("mouseenter", () => {

        cursor.classList.add("project-cursor");

    });


    project.addEventListener("mouseleave", () => {

        cursor.classList.remove("project-cursor");

    });

});


/* =====================================
   4. VIDEO HOVER PLAY
===================================== */

const videos =
    document.querySelectorAll(".project-video video");


videos.forEach((video) => {

    video.addEventListener("mouseenter", () => {

        video.play().catch(() => {});

    });


    video.addEventListener("mouseleave", () => {

        video.pause();

    });

});


videos.forEach((video) => {

    video.addEventListener("click", () => {

        if (video.paused) {

            video.play();

        } else {

            video.pause();

        }

    });

});


/* =====================================
   5. SCROLL REVEAL
===================================== */

const revealElements =
    document.querySelectorAll(
        ".section, .project, .skill, .lab-title"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =====================================
   6. MAGNETIC BUTTONS
===================================== */

const magneticElements =
    document.querySelectorAll(
        ".nav-contact, .email, .contact-links a"
    );


magneticElements.forEach((element) => {

    element.addEventListener("mousemove", (e) => {

        const rect =
            element.getBoundingClientRect();


        const x =
            e.clientX - rect.left - rect.width / 2;


        const y =
            e.clientY - rect.top - rect.height / 2;


        element.style.transform =
            `translate(${x * 0.15}px, ${y * 0.15}px)`;

    });


    element.addEventListener("mouseleave", () => {

        element.style.transform =
            "translate(0, 0)";

    });

});


/* =====================================
   7. SMOOTH NAVIGATION
===================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((link) => {

    link.addEventListener("click", (e) => {

        const target =
            document.querySelector(
                link.getAttribute("href")
            );


        if (!target) return;


        e.preventDefault();


        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});


/* =====================================
   8. ACTIVE NAVIGATION
===================================== */

const sections =
    document.querySelectorAll("section[id]");


const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 200;


        if (
            window.scrollY >= sectionTop
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================
   9. PARALLAX HERO
===================================== */

const heroTitle =
    document.querySelector(".hero-title");


window.addEventListener("scroll", () => {

    if (!heroTitle) return;


    const scroll =
        window.scrollY;


    heroTitle.style.transform =
        `translateY(${scroll * 0.12}px)`;

});


/* =====================================
   10. PROJECT CASE STUDY MODAL
===================================== */

const modal =
    document.getElementById("projectModal");


const modalClose =
    document.getElementById("modalClose");


const modalVideo =
    document.getElementById("modalVideo");


const modalTitle =
    document.getElementById("modalTitle");


const modalType =
    document.getElementById("modalType");


const modalNumber =
    document.getElementById("modalNumber");


const projectLinks =
    document.querySelectorAll(".open-project");


projectLinks.forEach((link) => {

    link.addEventListener("click", (e) => {

        e.preventDefault();


        const video =
            link.dataset.video;


        const title =
            link.dataset.title;


        const type =
            link.dataset.type;


        const number =
            link.dataset.number;


        modalVideo.src = video;

        modalTitle.textContent = title;

        modalType.textContent = type;

        modalNumber.textContent = number;


        modal.classList.add("active");


        document.body.style.overflow = "hidden";


        modalVideo.play().catch(() => {});

    });

});


/* CLOSE MODAL */

function closeModal() {

    if (!modal) return;

    modal.classList.remove("active");


    if (modalVideo) {

        modalVideo.pause();

        modalVideo.removeAttribute("src");

        modalVideo.load();

    }


    document.body.style.overflow = "";

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}


/* ESC KEY */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closeModal();

    }

});


/* =====================================
   11. HERO VIDEO INTERACTION
===================================== */

const heroVideo =
    document.getElementById("heroVideo");


if (heroVideo) {

    heroVideo.addEventListener(
        "mouseenter",
        () => {

            heroVideo.play().catch(() => {});

        }
    );


    heroVideo.addEventListener(
        "mouseleave",
        () => {

            heroVideo.play().catch(() => {});

        }
    );

}


/* =====================================
   12. SCROLL PROGRESS
===================================== */

window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;


    const pageHeight =
        document.documentElement.scrollHeight
        - window.innerHeight;


    const progress =
        pageHeight > 0
            ? (scrollTop / pageHeight) * 100
            : 0;


    const progressBar =
        document.querySelector(
            ".scroll-progress"
        );


    if (progressBar) {

        progressBar.style.width =
            `${progress}%`;

    }

});


/* =====================================
   13. INQUIRY FORM
===================================== */

const inquiryForm =
    document.getElementById("inquiryForm");


if (inquiryForm) {

    inquiryForm.addEventListener(
        "submit",
        async function (e) {

            e.preventDefault();


            const submitBtn =
                inquiryForm.querySelector(
                    ".submit-btn"
                );


            const originalText =
                submitBtn.innerHTML;


            submitBtn.innerHTML = `
                SENDING...
                <span>↗</span>
            `;


            submitBtn.disabled = true;


            const formData =
                new FormData(inquiryForm);


            try {

                const response =
                    await fetch(
                        inquiryForm.action,
                        {
                            method: "POST",

                            body: formData,

                            headers: {
                                "Accept":
                                    "application/json"
                            }
                        }
                    );


                if (response.ok) {

                    /* Reset form */

                    inquiryForm.reset();


                    /* Hide form */

                    inquiryForm.style.display =
                        "none";


                    /* Show success screen */

                    const formSuccess =
                        document.getElementById(
                            "formSuccess"
                        );


                    if (formSuccess) {

                        formSuccess.classList.add(
                            "active"
                        );

                    }


                } else {

                    throw new Error(
                        "Form submission failed"
                    );

                }


            } catch (error) {

                submitBtn.innerHTML = `
                    TRY AGAIN ↻
                    <span>!</span>
                `;


                submitBtn.disabled = false;


                console.error(error);

            }

        }
    );

}


/* =====================================
   14. SEND ANOTHER INQUIRY
===================================== */

const newInquiry =
    document.getElementById("newInquiry");


if (newInquiry) {

    newInquiry.addEventListener(
        "click",
        () => {

            const formSuccess =
                document.getElementById(
                    "formSuccess"
                );


            /* Show form again */

            inquiryForm.style.display =
                "block";


            /* Hide success screen */

            if (formSuccess) {

                formSuccess.classList.remove(
                    "active"
                );

            }


            /* Scroll back to form */

            inquiryForm.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });

        }
    );

}