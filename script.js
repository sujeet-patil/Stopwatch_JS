const stopWatch = document.getElementById('display');

const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

let startTime;
let elapsedTime =0;
let stopWatchInterval;

playButton.addEventListener("click",startStopwatch);
pauseButton.addEventListener("click",stopStopwatch);
resetButton.addEventListener("click",resetStopwatch);

function startStopwatch(){
    startTime = Date.now() - elapsedTime;
    showButton("PAUSE")
    stopWatchInterval = setInterval(function printTime(){
        elapsedTime = Date.now()-startTime;
        timeToString(elapsedTime); 
    })
}

function stopStopwatch(){
    clearInterval(stopWatchInterval);
    showButton("PLAY");
}

function resetStopwatch(){
    clearInterval(stopWatchInterval);
    showButton("PLAY");
    stopWatch.innerHTML = "00:00:00:000";
    elapsedTime=0;
}

function timeToString(time){
    let diffInHrs = time/3600000
    let hh = Math.floor(diffInHrs);
    let diffInMin = (diffInHrs-hh)*60;
    let mm = Math.floor(diffInMin);
    let diffInSec = (diffInMin-mm)*60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec-ss)*1000;
    let ms = Math.floor(diffInMs);

    let formattedHH = hh.toString().padStart(2,"0");
    let formattedMM = mm.toString().padStart(2,"0");
    let formattedSS = ss.toString().padStart(2,"0");
    let formattedMS = ms.toString().padStart(3,"0");

    stopWatch.innerHTML = `${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS}`;
}

function showButton(buttonKey){
    if(buttonKey==="PAUSE"){
        playButton.style.display = "none";
        pauseButton.style.display = "block";
    }else{
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
    return;
}