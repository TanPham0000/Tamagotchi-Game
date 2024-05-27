console.log ("Connected");
/*-----------------------------------------------//
Tamagotchi & Where is Waldo Game
Tân Pham
//-----------------------------------------------*/



//-------------------- const ----------------------//


//-------------------- let ------------------------//

let secondsPassed=0;
let namePlate = document.getElementById("veranderNaam");
let bericht = "hello, ";
let waldo = document.querySelector("Waldo")
let plaatjesArray = ['char0.png','char1.png','char2.png','char3.png','char4.png','char5.png','char6.png','char6.png'];

//------------------ functions --------------------//

function logInput() {
    let userName = nameInput.value; //past de naam aan//
    namePlate.textContent = bericht + userName;
}


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

function hideHint() {
    hintP.textcontent = "lll"
};

//buttons
geefNaam.addEventListener ("click", logInput);
btnStart.addEventListener('click', countSeconds);

//button om de timer te stoppen
btnStop.addEventListener('click', stopCountingTime);


function randomizeImage() {
    let plaatjesArray = math.floor(math.random())

}