const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const btnPause= document.getElementById('pause');
const btnRecord = document.getElementById('record');
const recordInfo = document.getElementById('record-info');
const card1 = document.getElementById('card-text1');
const card2 = document.getElementById('card-text2');
const card3 = document.getElementById('card-text3');
const card4 = document.getElementById('card-text4');

btnStart.addEventListener('click',()=>{timer()});

btnPause.addEventListener('click',()=>{
    clearInterval(time);
});

btnStop.addEventListener('click',()=>{
    clearInterval(time);
     hours = 0; 
     card1.textContent = "00 : 00";
     minutes = 0;
     card2.textContent = "00 : 00";
     seconds = 0;
     card3.textContent = "00 : 00";
     milliseconds = 0;
     card4.textContent = "00 : 00";
});

btnRecord.addEventListener('click',()=>{
    localStorage.setItem("Hours",card1.textContent);
    localStorage.setItem("Minutes",card2.textContent);
    localStorage.setItem("Seconds",card3.textContent);
    localStorage.setItem("Milliseconds",card4.textContent);

    let milis = localStorage.getItem("Milliseconds");
    let secs = localStorage.getItem("Seconds");
    let mins = localStorage.getItem("Minutes");
    let hrs = localStorage.getItem("Hours");

    recordInfo.textContent = hrs + ":" + mins + ":" + secs + ":" + milis;
});

let hours = 0,
minutes = 0,
seconds = 0,
milliseconds = 0,
time;

function changeTime(){
    milliseconds++;
    if(milliseconds >= 100){
        milliseconds = 0;
        seconds++;
    }
    if(seconds >= 60){
        seconds = 0;
        minutes++;
    }
    if(minutes >= 60){
        hours++;
    }
}

function output(){
    changeTime();
    card1.textContent = (hours > 9 ? hours : "0" + hours); 
    card2.textContent = (minutes > 9 ? minutes : "0" + minutes);
    card3.textContent = (seconds > 9 ? seconds : "0" + seconds);
    card4.textContent = (milliseconds > 9 ? milliseconds : "0" + milliseconds);
}

function timer (){
    time = setInterval(output, 10);
}






