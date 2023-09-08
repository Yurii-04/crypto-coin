document.body.style.overflow = "hidden";

setTimeout(() => {
    const header = document.querySelector(".header");
    header.classList.add("zoomed");
    setTimeout(() => {
        document.body.style.overflow = "auto";
    }, 2100);
}, 3500);
