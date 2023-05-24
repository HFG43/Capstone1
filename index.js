const hamburguer = document.querySelector('.hamburguer-menu');
const indexContainer = document.querySelector('.mobile-menu-container');
const closeButton = document.getElementById('mobile-close-cross');
const homeButton = document.querySelector('.home');
const aboutButton = document.querySelector('.about');
const programButton = document.querySelector('.program');
const sponsorButton = document.querySelector('.sponsor');

function mobileMenu () {
  indexContainer.classList.remove('show');
}
hamburguer.addEventListener('click',mobileMenu);

function closeMobileMenu () {
  indexContainer.classList.add('show');
}
closeButton.addEventListener('click',closeMobileMenu);
homeButton.addEventListener('click',closeMobileMenu);
aboutButton.addEventListener('click',closeMobileMenu);
programButton.addEventListener('click',closeMobileMenu);
sponsorButton.addEventListener('click',closeMobileMenu);
