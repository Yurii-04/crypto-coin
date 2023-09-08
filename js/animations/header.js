document.body.style.overflow = "hidden";
document.documentElement.style.overflow = "hidden";
setTimeout(function () {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
}, 6000);

const headerElement = document.querySelector(".header");

setTimeout(function () {
    headerElement.classList.add("zoomed");

}, 3500);


