gsap.registerPlugin(ScrollTrigger);
const tlLoader = gsap.timeline();

//Loader
tlLoader
    .set(".loader__item", { yPercent: -100 })
    .set(".loader__logo", { opacity: 0 })
    .to(".loader__item", {
        yPercent: 0,
        duration: 0.5,
        stagger: 0.25,
    })
    .to(".loader__item", {
        yPercent: 100,
        duration: 0.5,
        stagger: 0.25,
    })
    .to(".loader__logo", {
        opacity: 1,
        duration: 1,
        scale: 1.2,
    })
    .set(".loader__item", {
        yPercent: -100,
    })
    .to(".loader__logo", {
        opacity: 0,
        duration: 1,
        scale: 0.8,
    })
    .to(
        ".loader",
        {
            yPercent: -100,
            duration: 1,
        },
        "-=0.3"
    );