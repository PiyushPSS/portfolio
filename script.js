const sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu() {
  sideMenu.style.transform = 'translateX(16rem)';
}