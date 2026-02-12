// script.js
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const heroButtons = document.querySelector('.buttons');
function stackButtons() {
  if (window.innerWidth < 500) {
    heroButtons.classList.add('stack');
  } else {
    heroButtons.classList.remove('stack');
  }
}
window.addEventListener('resize', stackButtons);
stackButtons();