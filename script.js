// =====================================
// LUXORA ESTATES - SCRIPT.JS
// =====================================


// =====================================
// MOBILE NAVIGATION
// =====================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("open");

    });

}


// Close mobile menu when link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

        if (menuToggle) {
            menuToggle.classList.remove("open");
        }

    });

});


// =====================================
// NAVBAR SCROLL EFFECT
// =====================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// =====================================
// SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    // Fallback for older browsers

    revealElements.forEach(element => {

        element.classList.add("show");

    });

}


// =====================================
// IMAGE LOAD ANIMATION
// =====================================

const images = document.querySelectorAll("img");

images.forEach(image => {

    // If image is already loaded

    if (image.complete) {

        image.classList.add("loaded");

    } else {

        image.addEventListener("load", () => {

            image.classList.add("loaded");

        });

    }

});


// =====================================
// PROPERTY CARD HOVER
// =====================================

const propertyCards = document.querySelectorAll(".property-card");

propertyCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("hover");

    });


    card.addEventListener("mouseleave", () => {

        card.classList.remove("hover");

    });

});


// =====================================
// FORM HANDLING
// =====================================

const forms = document.querySelectorAll("form");

forms.forEach(form => {

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        alert(
            "Thank you for contacting Luxora Estates. " +
            "Our team will contact you soon."
        );

        form.reset();

    });

});


// =====================================
// CURRENT YEAR
// =====================================

const yearElements = document.querySelectorAll(".copyright");

yearElements.forEach(element => {

    element.innerHTML =
        `© ${new Date().getFullYear()} Luxora Estates. All Rights Reserved.`;

});


// =====================================
// BACK TO TOP
// =====================================

const backTop = document.querySelector(".back-top");

if (backTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });


    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// =====================================
// SMOOTH ANCHOR LINKS
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", event => {

        const href = anchor.getAttribute("href");

        // Ignore empty "#"

        if (!href || href === "#") {
            return;
        }


        const target = document.querySelector(href);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


// =====================================
// GALLERY IMAGE ZOOM
// =====================================

const galleryImages =
    document.querySelectorAll(".gallery-item img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        image.classList.toggle("zoom");

    });

});
