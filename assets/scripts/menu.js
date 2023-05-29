

const openMenuBtn = document.querySelector('.bx-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenuBtn = document.querySelector('.bx-x');

const openMenu = () => {
  if (mobileMenu.className.includes('open-mobile-menu')) {
    mobileMenu.classList.remove('open-mobile-menu');
  } else {
    mobileMenu.classList.add('open-mobile-menu');
  }
};

openMenuBtn.addEventListener('click', () => openMenu());
closeMenuBtn.addEventListener('click', () => openMenu());