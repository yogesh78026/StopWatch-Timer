const stopwatch = document.getElementById('timer');

var hrs = 0;
var min = 0;
var sec = 0;
var stop = true;

function startTimer() {
    if (stop == true) {
        stop = false;
        setTimer();
    }
}

function stopTimer() {
    if (stop == false) {
        stop = true;

    }
}

function setTimer() {
    if (stop == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hrs = parseInt(hrs);

        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hrs < 10 || hrs == 0) {
            hrs = '0' + hrs;
        }

        stopwatch.innerHTML = hrs + ':' + min + ':' + sec;
        setTimeout("setTimer()", 1000);
    }
}

function resetTimer() {
    stopwatch.innerHTML = "00:00:00";
    stop = true;
    hrs = 0;
    sec = 0;
    min = 0;
}
