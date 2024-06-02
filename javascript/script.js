/*-------------------------------------------------//
Tamagotchi game
Tân Pham
//-------------------------------------------------*/
//-------------------- const ----------------------//
const greetings = "hello, ";
const naamElement = document.getElementById('naam');
const happinessElement = document.getElementById('happiness');
const hungerElement = document.getElementById('hunger');
const energyElement = document.getElementById('energy');

//-------------------- let ------------------------//
let characterState = document.querySelector("#state");
let myAudio = document.querySelector('#myAudio');
let imageState = ["default.png", "eating.png", "playing.png", "sleeping.png"];
let states = imageState[0];
myAudio.volume = 0.2;

// Tamagotchi stats, in de let wordt opgeslagen welke stats er zijn, je kan ze roepen doormiddlen van tamagotchi. te typen//
//-------Het limiet van elke stat is hier gelijk aangegeven-----//
//-------De null is een placeholder voor de setInterval
let tamagotchi = {
    happiness: 10,
    hunger: 0,
    energy: 10,
    interval: null
};

//------------------ functions ---------------------------------//
//Verander naam popup Let zit in de scope van de functie
function showNamePopup() {
    let userName = prompt("Geef je capybara een naam:");
    if (userName) {
        let namePlate = document.getElementById("veranderNaam");
        namePlate.textContent = greetings + userName;
    }
};

//---------------tamagotchi interaction functions---------------//
function updateDisplay() {
    happinessElement.textContent = tamagotchi.happiness;
    hungerElement.textContent = tamagotchi.hunger;
    energyElement.textContent = tamagotchi.energy;
};

function play() {
    if (tamagotchi.energy > 0) {
        tamagotchi.happiness = Math.min(10, tamagotchi.happiness + 2);
        tamagotchi.hunger = Math.min(10, tamagotchi.hunger + 1);
        tamagotchi.energy = Math.max(0, tamagotchi.energy - 2);
        document.getElementById('tamagotchi').src = "./images/characterState/playing.png";
    } else {
        alert("Tamagotchi is too tired to play!");
    } updateDisplay();
};

function rest() {
    tamagotchi.energy = Math.min(10, tamagotchi.energy + 3);
    tamagotchi.happiness = Math.max(0, tamagotchi.happiness - 1);
    document.getElementById('tamagotchi').src = "./images/characterState/sleeping.png";
    updateDisplay();
};

function feed() {
    if (tamagotchi.energy > 0) {
    tamagotchi.hunger = Math.max(0, tamagotchi.hunger - 2);
    tamagotchi.happiness = Math.min(10, tamagotchi.happiness + 1);
    document.getElementById('tamagotchi').src = "./images/characterState/eating.png";
    } else {
        alert("Tamagotchi is too tired to eat!");
    } updateDisplay();
};

//---------------Het verminderen van de stats----------------------//
//---------------De gameover state zorgt dat de timer stops-----------------------//
function decreaseStats() {
    tamagotchi.hunger = Math.min(10, tamagotchi.hunger + 1);
    tamagotchi.happiness = Math.max(0, tamagotchi.happiness - 1);
    tamagotchi.energy = Math.max(0, tamagotchi.energy - 1);
    if (tamagotchi.hunger === 10 || tamagotchi.happiness === 0 || tamagotchi.energy === 0) {
        clearInterval(tamagotchi.interval);
        alert("Game over! Your Tamagotchi is not in a good state.");
    } updateDisplay();
};

function playPause() {
    let audio = document.getElementById("myAudio");
    if (audio.paused) {
      audio.play();
      musicButton.textcontent = "Pause music";
    } else {
      audio.pause();
      musicButton.textcontent = "Play music";
    }
};

tamagotchi.interval = setInterval(decreaseStats, 3000);
updateDisplay();

//Einde Tamagotchi interactions//

//-----------Button interaction-------------//
buttonPlay.addEventListener("click", play);
buttonEat.addEventListener("click", feed);
buttonRest.addEventListener ("click", rest);
musicButton.addEventListener ("click", playPause);