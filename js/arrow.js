window.addEventListener("scroll", function () {
  const arrow = document.querySelector(".arrow__wrapper");
  const header = document.querySelector("#header");

  if (arrow && header) {
    const headerHeight = header.offsetHeight;

    if (window.scrollY > headerHeight) {
      arrow.classList.remove("hide-arrow");
    } else {
      arrow.classList.add("hide-arrow");
    }
  }
});