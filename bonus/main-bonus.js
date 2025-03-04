console.log("bonus");

const lampElement = document.querySelector(".lamp")

console.log(lampElement);

const buttonElement = document.querySelector(".button")

// buttonElement.addEventListener('click', function () {
//     lampElement.src = '../img/yellow_lamp.png';
//     lampElement.alt = 'Lampadina accesa'
// })

buttonElement.addEventListener('click', function () {
    if (lampElement.src.includes('white_lamp.png')) {
        lampElement.src = "yellow_lamp.png"
        lampElement.alt = "Accesa"
        buttonElement.innerText = 'premi';
    } else {
        lampElement.src = "white_lamp.png"
        lampElement.alt = "Spenta"
        buttonElement.innerText = 'accendi';
    }
}
)