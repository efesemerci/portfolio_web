const menuButton = document.querySelector(".menu-button");
const overlayMenu = document.querySelector(".overlay-menu");

menuButton.addEventListener("click", () => {
  const isOpen = overlayMenu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

overlayMenu.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    overlayMenu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    overlayMenu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});
