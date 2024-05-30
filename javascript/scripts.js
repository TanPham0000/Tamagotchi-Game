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
let waldo = document.querySelector("Waldo")
let greetings = "hello, ";
let imagesArray = ['char0.png','char1.png','char2.png','char3.png','char4.png','char5.png','char6.png','char6.png'];
let secondsPassed=0;

//------------------ functions --------------------//

function showNamePopup() {
    let userName = prompt("Geef je capybara een naam:");
    if (userName) {
        let namePlate = document.getElementById("veranderNaam");
        namePlate.textContent = greetings + userName;
    }
}

function feed() {
    tamagotchi.hunger = Math.max(0, tamagotchi.hunger - 2);
    tamagotchi.happiness = Math.min(10, tamagotchi.happiness + 1);
    updateDisplay();
}

function hideHint() {
    hintP.textcontent = "lll"
};

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

function showHint () {
    hintP.textcontent = "wow"
    setTimeout(hideHint, 3000)
}
*/ 
