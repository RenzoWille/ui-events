/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a:nth-of-type(12)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener('animationend', jumpHandler)



// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt

// Stap 1: querySelector
// let bibberLink = document.querySelector...

let bibberLink = document.querySelector('a:nth-of-type(1)')

// Stap 2: addEventListener
// bibberLink.addEventListener...
bibberLink.addEventListener('click', trillen)

function trillen(){

  bibberLink.classList.toggle('shake')
}

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...


let colorChange = document.querySelector('a:nth-of-type(2)')

colorChange.addEventListener('click', differentColor)

console.log(differentColor)
function differentColor(){
  colorChange.classList.toggle('colorchange')
}

let upDown = document.querySelector('a:nth-of-type(3)')
upDown.addEventListener('click', goingUp)
function goingUp(){
  upDown.classList.toggle('updown')
}

let flip = document.querySelector('a:nth-of-type(4)')
flip.addEventListener('keyup', invert)
function invert(){
  flip.classList.toggle('flip')
}

let spacen = document.querySelector('a:nth-of-type(5)')

spacen.addEventListener('wheel', scroll)
function scroll(){
  spacen.classList.toggle('space')
}


const anchor = document.querySelector('a:nth-of-type(6)');

anchor.addEventListener("focus", function () {
  anchor.style.transition = "transform 0.3s";
  anchor.style.transform = "scale(1.5)";
});

anchor.addEventListener("blur", function () {
  anchor.style.transform = "scale(1)";
});


document.querySelector("a:nth-of-type(7)").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default navigation
  this.style.transform = "translateY(-20px)"; // Move upward
  this.style.opacity = "0"; // Fade out

  // Optional: Reset after animation for repeated interactions
  setTimeout(() => {
    this.style.transform = "";
    this.style.opacity = "";
  }, 500); // Matches the CSS transition duration
});



document.querySelector("a:nth-of-type(8)").addEventListener("click", function(event) {
  // Get the anchor element's bounding box
  const rect = this.getBoundingClientRect();
  
  // Calculate the click position relative to the anchor element
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  // Create a new div for the ripple
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + "px";
  ripple.style.left = `${x - rect.width / 2}px`;
  ripple.style.top = `${y - rect.height / 2}px`;
  
  // Add the ripple to the anchor element
  this.appendChild(ripple);
  
  // Remove the ripple after animation
  ripple.addEventListener("animationend", () => ripple.remove());
});


document.querySelector("a:nth-of-type(9)").addEventListener("click", function() {
  this.style.animation = "bounce 0.5s";
  this.addEventListener("animationend", () => this.style.animation = "");
});

document.querySelector("a:nth-of-type(10)").addEventListener("mousemove", function(event) {
  const rect = this.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  this.style.transition = "border-color 0.3s";
  this.style.borderColor = `rgb(${x % 255}, ${y % 255}, 150)`; // Change the border color based on mouse position
});



