// typing text animation for headline
const texts = [
  "Hello, I'm Aufa binti Rizwan",
  "Information Technology Student in UTP",
  "Websites Enthusiast"
];

let textIndex = 0;   
let charIndex = 0;  
let typingForward = true;

const typedElement = document.getElementById("typed");

function typeEffect() {
  const currentText = texts[textIndex];

  if (typingForward) {
    charIndex++;

    if (charIndex === currentText.length) {
      typingForward = false;
      setTimeout(typeEffect, 1000);
      return;
    }
  }

  else {
    charIndex--;

    if (charIndex === 0) {
      typingForward = true;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeEffect, 300); 
      return;
    }
  }

  typedElement.textContent = currentText.substring(0, charIndex) + "|";

  setTimeout(typeEffect, 80);
}

  setTimeout(typeEffect, 500);


// smooth scroll for navigation links
const links = document.querySelectorAll('a[href^="#"]'); // Get all internal page links

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {

    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', block: 'start'      
      });
    }
  });
}

// download cv
function downloadCV() {
  window.print();
}
