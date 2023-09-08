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

setTimeout(function () {
    const menuItems = document.querySelectorAll(".menu__item");
    menuItems.forEach(function (item, index) {
        setTimeout(function () {
            item.classList.add("visible");
        }, index * 100); 
    });
}, 6000);
