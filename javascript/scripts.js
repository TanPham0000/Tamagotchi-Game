/*-----------------------------------------------//
Tamagotchi & Where is Waldo Game
Tân Pham
//-----------------------------------------------*/
//-------------------- const ----------------------//
const naamElement = document.getElementById('naam');
const happinessElement = document.getElementById('happiness');
const hungerElement = document.getElementById('hunger');
const energyElement = document.getElementById('energy');
const greetings = "hello, ";

//-------------------- let ------------------------//
let imagesArray = ['char0.png','char1.png','char2.png','char3.png','char4.png','char5.png','char6.png','char6.png'];
let secondsPassed=0;
let characterState = document.querySelector("#state");

let myAudio = document.querySelector('#audio')
myAudio.play()

// Tamagotchi stats, hier wordt 
let tamagotchi = {
    happiness: 10,
    hunger: 0,
    energy: 10,
    interval: null
};



//------------------ functions --------------------//
//Verander naam popup Let zit in de scope van de functie
function showNamePopup() {
    let userName = prompt("Geef je capybara een naam:");
    if (userName) {
        let namePlate = document.getElementById("veranderNaam");
        veranderNaam = document.getElementById("veranderNaam");
        namePlate.textContent = greetings + userName;
    }
};

// tamagotchi play functions

function updateDisplay() {
    happinessElement.textContent = tamagotchi.happiness;
    hungerElement.textContent = tamagotchi.hunger;
    energyElement.textContent = tamagotchi.energy;
};


// De 
function play() {
    if (tamagotchi.energy > 0) {
        tamagotchi.happiness = Math.min(10, tamagotchi.happiness + 2);
        tamagotchi.hunger = Math.min(10, tamagotchi.hunger + 1);
        tamagotchi.energy = Math.max(0, tamagotchi.energy - 2);
        document.getElementById('tamagotchi').src = "/images/characterState/playing.png";
    } else {
        alert("Tamagotchi is too tired to play!");
    } updateDisplay();
};

function rest() {
    tamagotchi.energy = Math.min(10, tamagotchi.energy + 3);
    tamagotchi.happiness = Math.max(0, tamagotchi.happiness - 1);
    document.getElementById('tamagotchi').src = "/images/characterState/sleeping.png";
    updateDisplay();
};

function feed() {
    if (tamagotchi.energy > 0) {
    tamagotchi.hunger = Math.max(0, tamagotchi.hunger - 2);
    tamagotchi.happiness = Math.min(10, tamagotchi.happiness + 1);
    document.getElementById('tamagotchi').src = "/images/characterState/eating.png";
    } else {
        alert("Tamagotchi is too tired to eat!");
    } updateDisplay();
};

//Defeat state

function decreaseStats() {
    tamagotchi.hunger = Math.min(10, tamagotchi.hunger + 1);
    tamagotchi.happiness = Math.max(0, tamagotchi.happiness - 1);
    tamagotchi.energy = Math.max(0, tamagotchi.energy - 1);
    if (tamagotchi.hunger === 10 || tamagotchi.happiness === 0 || tamagotchi.energy === 0) {
        clearInterval(tamagotchi.interval);
        alert("Game over! Your Tamagotchi is not in a good state.");
    }
    updateDisplay();
};

tamagotchi.interval = setInterval(decreaseStats, 3000);
updateDisplay();

//-----------Button interaction-------------//
buttonPlay.addEventListener("click", play);
buttonEat.addEventListener("click", feed);
buttonRest.addEventListener ("click", rest);
