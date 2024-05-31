console.log ("Connected");
/*-----------------------------------------------//
Tamagotchi & Where is Waldo Game
Tân Pham
//-----------------------------------------------*/
//-------------------- const ----------------------//
const naamElement = document.getElementById('naam');
const happinessElement = document.getElementById('happiness');
const hungerElement = document.getElementById('hunger');
const energyElement = document.getElementById('energy');

//-------------------- let ------------------------//
let veranderNaam = document.getElementById("veranderNaam");
let greetings = "hello, ";
let imagesArray = ['char0.png','char1.png','char2.png','char3.png','char4.png','char5.png','char6.png','char6.png'];
let secondsPassed=0;

// Tamagotchi stats, hier wordt 
let tamagotchi = {
    tamagotchiName: (userName),
    happiness: 10,
    hunger: 0,
    energy: 10,
    interval: null
};

//------------------ functions --------------------//

function showNamePopup() {
    let userName = prompt("Geef je capybara een naam:");
    if (userName) {
        let namePlate = document.getElementById("veranderNaam");
        namePlate.textContent = greetings + userName;
    }
}

// tamagotchi 

function updateDisplay() {
    nameElement.textContent = tamagotchi.name;
    happinessElement.textContent = tamagotchi.happiness;
    hungerElement.textContent = tamagotchi.hunger;
    energyElement.textContent = tamagotchi.energy;
}

function feed() {
    tamagotchi.hunger = Math.max(0, tamagotchi.hunger - 2);
    tamagotchi.happiness = Math.min(10, tamagotchi.happiness + 1);
    updateDisplay();
}

function play() {
    if (tamagotchi.energy > 0) {
        tamagotchi.happiness = Math.min(10, tamagotchi.happiness + 2);
        tamagotchi.hunger = Math.min(10, tamagotchi.hunger + 1);
        tamagotchi.energy = Math.max(0, tamagotchi.energy - 2);
    } else {
        alert("Tamagotchi is too tired to play!");
    }
    updateDisplay();
}

function rest() {
    tamagotchi.energy = Math.min(10, tamagotchi.energy + 3);
    tamagotchi.happiness = Math.max(0, tamagotchi.happiness - 1);
    updateDisplay();
}

function decreaseStats() {
    tamagotchi.hunger = Math.min(10, tamagotchi.hunger + 1);
    tamagotchi.happiness = Math.max(0, tamagotchi.happiness - 1);
    tamagotchi.energy = Math.max(0, tamagotchi.energy - 1);

    if (tamagotchi.hunger === 10 || tamagotchi.happiness === 0 || tamagotchi.energy === 0) {
        clearInterval(tamagotchi.interval);
        alert("Game over! Your Tamagotchi is not in a good state.");
    }

    updateDisplay();
}

tamagotchi.interval = setInterval(decreaseStats, 5000);
updateDisplay();

function showHint () {
    hintP.textcontent = "wow"
    setTimeout(hideHint, 3000)
}

function hideHint() {
    hintP.textcontent = "lll"
}

//-----------Button interaction-------------//


//button om de timer te stoppen
btnStop.addEventListener('click', stopCountingTime);


function randomizeImage() {
    let imagesArray = math.floor(math.random())

}


/*
//timer hint//
//Stop timer wanneer Waldo gevonden is

function stopCountingTime() {
    clearInterval(timer)
    stopTimer.textContent = "Timer gestopt";
    console.log(stop);
};

function startCounter() {
    (timer)
    console.log("Timer gestart");
};

function countSeconds () {
    console.log (secondsPassed);
    secondsPassed += 1;
};


*/ 
