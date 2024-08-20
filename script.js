// script.js
const typedTextElement = document.getElementById('typed-text');
const phrases = ["programmer", "gamer", "developer", "guitarist"];
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = '';
let isDeleting = false;
let delay = 200;

function type() {
  currentPhrase = phrases[phraseIndex];
  
  if (!isDeleting && letterIndex < currentPhrase.length) {
    typedTextElement.textContent += currentPhrase.charAt(letterIndex);
    letterIndex++;
    delay = 200;
  } else if (isDeleting && letterIndex > 0) {
    typedTextElement.textContent = currentPhrase.substring(0, letterIndex - 1);
    letterIndex--;
    delay = 100;
  }

  if (letterIndex === currentPhrase.length && !isDeleting) {
    isDeleting = true;
    delay = 1000; // Delay before starting to delete
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 500; // Delay before starting to type next phrase
  }

  setTimeout(type, delay);
}

type();


// script.js

//script.js
document.getElementById('navbar-toggle').addEventListener('click', function() {
  var navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('show');
});
//script.js