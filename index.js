var rd = document.getElementById('rd');
var time = document.getElementById('time');
var orange = document.getElementById('orange');
var green = document.getElementById('green');
var second = 124;
setInterval(trafficSignal, 1000);
time.style.color = 'white';
function trafficSignal() {
    if (64 <= second) {
        funRed();
    }
    else {
        if (60 <= second) {
            funOrange();
        }
        else {
            funGreen();
        }
    }
    if (second == 0) {
        second = 124;
    }
    second--;
}

function funRed() {
    time.innerHTML = second - 64;
    time.style.backgroundColor = 'red';
    orange.style.backgroundColor = 'white';
    rd.style.backgroundColor = 'red';
    green.style.backgroundColor = 'white';
}
function funOrange() {
    time.style.backgroundColor = 'yellow';
    orange.style.backgroundColor = 'yellow';
    rd.style.backgroundColor = 'white';
    green.style.backgroundColor = 'white';
    time.innerHTML = second - 60;
}
function funGreen() {
    time.style.backgroundColor = 'green';
    orange.style.backgroundColor = 'white';
    rd.style.backgroundColor = 'white';
    green.style.backgroundColor = 'green';
    time.innerHTML = second;
}