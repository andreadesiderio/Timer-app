"use strict"

const calendar = document.getElementById("calendar");
let countDownTimerRunning = 0;

// function setCalendar() {
  function setCalendar(){
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let calendarDate =  year + "-" +
    (month < 10 ? "0" + month.toString() : month) + "-" +
    (day < 10 ? "0" + day.toString() : day);
    calendar.value = calendarDate;
}
// function preSetTimer(){
//     // showDiallines();
//     setCalendar();
// }
 window.addEventListener('load', setCalendar);



function startPauseToggle(){
  if (countDownTimerRunning == 0){
    countDownTimerRunning = 1;
  document.getElementById("startPauseButtonText").innerHTML = 'Pause';
  document.getElementById('startPauseButton').style.backgroundColor = 'orange';
  calculateTimer(countDownTimerRunning); 
  }
  else if (countDownTimerRunning == 1){
    countDownTimerRunning = 0;
    console.log("pause");
    calculateTimer(countDownTimerRunning); 
  document.getElementById("startPauseButtonText").innerHTML = 'Resume';
  document.getElementById('startPauseButton').style.backgroundColor = 'green';
  document.getElementById("stopResumeButtonText").innerHTML = 'Reset';
  document.getElementById('stopResumeButton').style.backgroundColor = 'red';  
  }
}

document.getElementById('startPauseButton').addEventListener('click', startPauseToggle);

// document.getElementById('startButton').addEventListener('click', function(){
//   countDownTimerRunning = 1; calculateTimer(countDownTimerRunning); });

function activateStartButton(){
  if (countDownTimerRunning == 0){
    document.getElementById("startPauseButtonText").innerHTML = 'Start';
    document.getElementById('startPauseButton').style.backgroundColor = 'green';
    document.getElementById("stopResumeButtonText").innerHTML = 'Stop';
    document.getElementById('stopResumeButton').style.backgroundColor = 'red';
  }
}


function calculateTimer(countDownTimerRunning){
  let timer;
  clearInterval(timer);
  console.log('clculate ' + countDownTimerRunning);
  // console.log(countDownTimerRunning);
    let timerDate = calendar.value.toString().split("-");
    let timerYear = timerDate[0];
    let timerMonth = timerDate[1] - 1;
    let timerDay = timerDate[2];
    let timerHour = Number(document.getElementById("hourInput").value);
    let timerMinute = Number(document.getElementById("minuteInput").value);
    let timerSecond = Number(document.getElementById("secondInput").value);
  
     if(timerHour == ""){timerHour = 0}
     if(timerMinute == ""){timerMinute = 0}
     if(timerSecond == ""){timerSecond = 0}
    
    let currentHour = new Date().getHours();
    timerHour = Number(currentHour + timerHour);

    let currentMinute = new Date().getMinutes();
    timerMinute = Number(currentMinute + timerMinute); 

    let currentSecond = new Date().getSeconds();
    timerSecond = Number(currentSecond + timerSecond); 
     
    let deadline = new Date(timerYear, timerMonth, timerDay, timerHour, timerMinute, timerSecond);
    let second = 1000; 
    let minute = second * 60; 
    let hour = minute * 60; 
    let day = hour * 24;   
    function runTimer(countDownTimerRunning){
      console.log('runTimer');
      let startTime = new Date();
      let remain = deadline - startTime;
      let days = Math.round(remain / day);
      let hours = Math.round((remain % day) / hour);
      let minutes = Math.round((remain % hour) / minute);
      let seconds = Math.ceil((remain % minute) / second);  
       document.getElementById("timerValue").innerHTML = days + "Days" + hours + "Hrs" + minutes + "Min" + seconds + "Sec";
        let hDeg = (hours * 30) + (minutes / 2);
        let mDeg = minutes * 6;
        let sDeg = seconds * 6;
        let secondHand = document.querySelector(".secondHand");
        secondHand.style.transform = "rotate( " + sDeg + "deg)";

        let background = document.getElementById("background");
        background.style.width =  `${100000 / remain}%`;
        background.style.height =  `${100000 / remain}%`;
        console.log("runtimer " + countDownTimerRunning);
         if (countDownTimerRunning == 0){
          // if (remain < 0){
          // countDownTimerRunning = 0;
             console.log('remain=o');
          clearInterval(timer);
          document.getElementById("timerValue").innerHTML = "Time's Up!";
          return;
        }
        
     }
    //  runTimer(countDownTimerRunning);
    console.log("endCalc");
     if (countDownTimerRunning == 1){
      console.log(countDownTimerRunning);
      timer = setInterval(runTimer, 3000);
     }
    
    // else {
    //   countDownTimerRunning = 0;
    //    clearInterval(timer);
    //   runTimer(countDownTimerRunning);
    // }
  }
    // if (countDownTimerRunning ==/ 0){
    //   clearInterval(timer);
    // }


document.getElementById('countDownTimeSetter').addEventListener('click', function(){
  activateStartButton(), calculateTimer()});  

       //timer = setInterval(runTimer, 1000); 
      //  document.getElementById('startButton').addEventListener('click', function(){alert("hi"); timer = setInterval(runTimer, 1000)} )
    
    
    // document.getElementById('startButton').addEventListener('click', )