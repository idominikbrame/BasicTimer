document.getElementById("start").addEventListener("click touchstart", startTimer)
document.getElementById("pause").addEventListener("click touchstart", pauseTimer)
document.getElementById("reset").addEventListener("click touchstart", resetTimer)
function startTimer(){   
    setInterval("counter()", 1000)    
}

function pauseTimer(){
    clearInterval();
    alert("You have paused the Timer. Click `Ok` to continue timer!");
  }

function resetTimer() {
    window.history.go(0)
}
let reset = 00;
let countSec = 1;
let countMin = 1;
let countHour = 1;

function counter() { 
    if (countSec< 10) {
    document.getElementById("seconds").innerHTML = "0" + countSec++
    } else {
        document.getElementById("seconds").innerHTML = countSec++
    }
    if (countSec == 60) {
        countSec = reset;
        setTimeout(minuteInc, 1000)
    }
}

function minuteInc(){
    if (countMin< 10) {
        document.getElementById("minutes").innerHTML = "0" + countMin++
        } else {
            document.getElementById("minutes").innerHTML = countMin++
        }
        if (countMin == 60) {
            countMin = reset;
            setTimeout(hourInc, 60000)
        }
}

function hourInc(){
    if (countHour < 10) {
        document.getElementById("hours").innerHTML = "0" + countHour++
        } else {
            document.getElementById("hours").innerHTML = countHour++
        }
        if (countHour == 60) {
            countHour = reset;
            alert("Timer has timed out")
        }
}