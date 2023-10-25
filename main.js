document.addEventListener("DOMContentLoaded", function () {
    const scrollRevealOptions = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
    };

    function revealElement(selector, options, delay) {
        ScrollReveal().reveal(selector, {
            ...options,
            delay,
        });
    }

    revealElement(".header__container img", { duration: 1000 }, 0);
    revealElement(".header__container h1", scrollRevealOptions, 500);
    revealElement(".header__container p", scrollRevealOptions, 1000);
    revealElement(".header__btns", scrollRevealOptions, 1500);

    revealElement(".about__container h2", scrollRevealOptions, 0);
    revealElement(".about__container .section__subheader", scrollRevealOptions, 500);
    revealElement(".about__container p", scrollRevealOptions, 1000);

    revealElement(".inventory__container .car-listing", scrollRevealOptions, 0);

    revealElement(".contact__container img", { duration: 1000 }, 0);
    revealElement(".contact__container h2", scrollRevealOptions, 500);
    revealElement(".contact__container p", scrollRevealOptions, 1000);
    revealElement(".contact__container form", scrollRevealOptions, 1500);
});
