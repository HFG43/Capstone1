// ------------MobileMenu-----------

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

// -------------Dynamic Speakers--------------

const speakers = [
  {
    id: '0',
    name: ' ',
    role: '',
    role-description: ''
  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  }
];

`<div id="Invited-Speaker-5" class="speakers-container">
<div class="speaker-full-container">
  <div class="speaker-picture-container">
    <img class="race-flag" src="./Images/Pictures/Race-flag.png">
    <img class="speaker-picture" src="./Images/person-icon--icon-search-engine-3.png">
  </div>
  <div class="speaker-profile-data">
    <h3 class="speaker-profile-data-name">Alan White</h3>
    <p class="speaker-profile-data-role">National Parks Asociation Patron</p>
    <div class="separator-speaker"></div>
    <p class="speaker-profile-data-description">White spent his life dedicated to increase the restoration areas worldwide.</p>
  </div>
</div>
</div>`