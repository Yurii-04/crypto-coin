const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-wrapper__item");
const bars = hamburger.querySelectorAll(".bar");

hamburger.addEventListener("mouseenter", () => {
    bars[1].style.width = "25px";
    bars[2].style.width = "25px";
});

hamburger.addEventListener("mouseleave", () => {
    if (!hamburger.classList.contains("active")) {
        bars[1].style.width = "20px";
        bars[2].style.width = "15px";
    }
});

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    if (hamburger.classList.contains("active")) {
        bars[1].style.width = "25px";
        bars[2].style.width = "25px";
        document.documentElement.style.overflow = "hidden";
    } else {
        bars[1].style.width = "20px";
        bars[2].style.width = "15px";
        document.documentElement.style.overflow = "auto";
    }
});

document.querySelectorAll(".menu__item").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        navMenu.blur();
    })
);


