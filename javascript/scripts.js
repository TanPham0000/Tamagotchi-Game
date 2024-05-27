console.log ("Connected");
/* Alle const hier */


/* Alle let hier */
let secondsPassed=0;
let timer = setInterval(countSeconds, 1000);
let namePlate = document.getElementById("veranderNaam");
let bericht = "hello, ";
let waldo = document.querySelector("Waldo")
let plaatjesArray = ['char0.png','char1.png','char2.png','char3.png','char4.png','char5.png','char6.png','char6.png'];

/* Alle functions hier */
// 

function logInput() {
    let userName = nameInput.value; //past de naam aan//
    namePlate.textContent = bericht + userName;
}


//timer hint//
//Stop timer wanneer Waldo gevonden is

function stopCountingTime() {
    clearInterval(timer)
    console.log("Timer gestopt");
};

function countSeconds () {
    console.log (secondsPassed);
    secondsPassed += 1;
};

btnStart.addEventListener('click', countSeconds);
function startCounter() {
    (timer)
    console.log("Timer gestopt");
};

function showHint () {
    hintP.textcontent = "wow"
    setTimeout(hideHint, 3000)
}

function hideHint() {
    hintP.textcontent = "lll"
};

//buttons
button.addEventListener ("click", logInput);

//button om de timer te stoppen
btnStop.addEventListener('click', stopCountingTime);

/*
Voorbeeld code van Lissete voor een start timer
function startTimer {
    const timer = setInterval(() => {
        if (secondes >= 0){
            console.log(secondes);
            secondes--;
        } else {
            clearInterval(timer);
            console.log("Tijd over");   
        }   
        , 1000);
}
*/
