// menu hambuguer
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu_burgue');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});
