console.log("AAAAAA");

const lampElement = document.querySelector(".lamp")

console.log(lampElement);

lampElement.src = '../img/white_lamp.png';
lampElement.alt = 'Lampadina spenta';

const buttonElement = document.querySelector(".button")
buttonElement.addEventListener('click', function(){
    lampElement.src = '../img/yellow_lamp.png';
})