// ------------MobileMenu-----------

const hamburguer = document.querySelector('.hamburguer-menu');
const indexContainer = document.querySelector('.mobile-menu-container');
const closeButton = document.getElementById('mobile-close-cross');
const homeButton = document.querySelector('.home');
const aboutButton = document.querySelector('.about');
const programButton = document.querySelector('.program');
const sponsorButton = document.querySelector('.sponsor');

function mobileMenu() {
  indexContainer.classList.remove('show');
}
hamburguer.addEventListener('click', mobileMenu);

function closeMobileMenu() {
  indexContainer.classList.add('show');
}
closeButton.addEventListener('click', closeMobileMenu);
homeButton.addEventListener('click', closeMobileMenu);
aboutButton.addEventListener('click', closeMobileMenu);
programButton.addEventListener('click', closeMobileMenu);
sponsorButton.addEventListener('click', closeMobileMenu);

// -------------Dynamic Speakers--------------

const speakers = [
  {
    id: '0',
    name: 'Jon Anderson',
    face: 'src="./Images/person-6.svg',
    role: 'Global Tax Leader at Ernst & Young',
    roleDescription: 'Anderson have been working the last 10 years implementing programs globaly.',
  },
  {
    id: '1',
    name: 'Rick Wakeman',
    face: 'src="./Images/person-2.svg',
    role: 'The Orvis Company Marketing VP',
    roleDescription: 'Wakeman has been the first to implement the 5% for Nature program.',
  },
  {
    id: '2',
    name: 'Steve Howe',
    face: 'src="./Images/person-3.svg',
    role: 'Fly Dreamers Founder',
    roleDescription: 'Howe implemented the program in a best in class Social Media company.',
  },
  {
    id: '3',
    name: 'Chris Squire',
    face: 'src="./Images/person-4.svg',
    role: 'Patagonia Managing Director',
    roleDescription: 'Squire gives a great example of value brand creation by implementing restoration.',
  },
  {
    id: '4',
    name: 'Bill Bruford',
    face: 'src="./Images/person-3.svg',
    role: 'Argentine National Parks President',
    roleDescription: 'Bruford have found a way to impact in improving the enviromental health in many communities.',
  },
  {
    id: '5',
    name: 'Alan White',``
    face: 'src="./Images/person-5.svg',
    role: 'National Parks Asociation Patron',
    roleDescription: 'White spent his life dedicated to increase the restoration areas worldwide.',
  },
];

const speakersContainer = document.querySelector('.dynamic-speakers');

function loadSpeakers(speaker) {
  speakersContainer.id = 'speaker-grid-container';
  speakersContainer.innerHTML += `<div id="${speakers[speaker].id}" class="speakers-container">
<div class="speaker-full-container">
  <div class="speaker-picture-container">
    <img class="race-flag" src="./Images/Pictures/Race-flag.png">
    <img class="speaker-picture" ${speakers[speaker].face}">
  </div>
  <div class="speaker-profile-data">
    <h3 class="speaker-profile-data-name">${speakers[speaker].name}</h3>
    <p class="speaker-profile-data-role">${speakers[speaker].role}</p>
    <div class="separator"></div>
    <p class="speaker-profile-data-description">${speakers[speaker].roleDescription}</p>
  </div>
</div>
</div>`;
}

for (let speaker = 0; speaker < speakers.length; speaker += 1) {
  loadSpeakers(speaker);
}
