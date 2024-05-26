console.log ("Connected");
/* Alle const hier */
const 
    h1Element = document.querySelector = ("h1").textcontent = ("Hallo,");

/* Alle let hier */
let secondsPassed=0;
let timer = setInterval(countSeconds, 1000);


/*
Voorbeeld code van Lissete
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


let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'char0.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'char1.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'char2.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'images/img/Splash_image4.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'images/img/Splash_image5.jpg';

imgArray[5] = new Image();
imgArray[5].src = 'images/img/Splash_image6.jpg';

*/

/* Alle functions hier */

function countSeconds () {
    console.log (secondsPassed);
    secondsPassed += 1;
};

//Stop timer wanneer Waldo gevonden is

btnStop.addEventListener('click', stopCountingTime);
function stopCountingTime() {
    clearInterval(timer)
    console.log("Timer gestopt");
};

btnStart.addEventListener('click', countSeconds);
function startCounter() {
    (timer)
    console.log("Timer gestopt");
};

function logInput () {
    userName = nameInput.value;
    h2.textcontent = "Hoi, " + userName;
    
};

btn

//timer hint//

function showHint () {
    hintP.textcontent = "wow"
    setTimeout(hideHint, 3000)
}

function hideHint() {
    hintP.textcontent = "lll"
};