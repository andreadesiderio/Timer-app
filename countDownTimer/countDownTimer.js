"use strict"
function showDiallines (){
    let diallines = document.getElementsByClassName("diallines");
    let analogClock = document.getElementsByClassName("analogClock")[0];
    
    for (let i = 0; i < 60; i++){
        analogClock.innerHTML += "<div class='diallines'></div>";
        diallines[i].style.transform = "rotate(" + 6 * i + "deg)";
    }
}

let calendar = document.getElementById("calendar");

function setCalendar() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let calendarDate =  year + "-" +
    (month < 10 ? "0" + month.toString() : month) + "-" +
    (day < 10 ? "0" + day.toString() : day);
    calendar.value = calendarDate;
}
function preSetTimer(){
    showDiallines();
    setCalendar();
}
window.addEventListener("load", preSetTimer);

// function showTimer(){
//   let timerValue = document.getElementById("timerValueContainer").style = "visibility: visible";
  
// }
//  let activateButton = document.getElementById("submit");
//  activateButton.addEventListener('click', function(){document.getElementById("timerValueContainer").style = "visibility: visible"}); 
let starButton = document.getElementById("submit");
starButton.addEventListener('click', calculateTimer);  
let timer; 
function calculateTimer(){
  alert('hi');
    //clearInterval(timer);
    let timerDate = calendar.value.toString().split("-");
    let timerYear = timerDate[0];
    let timerMonth = timerDate[1] - 1;
    let timerDay = timerDate[2];
    let timerHour = Number(document.getElementById("hourInput").value);
    let timerMinute = Number(document.getElementById("minuteInput").value);
    let timerSecond = Number(document.getElementById("secondInput").value);
  
     if(timerHour == ""){timerHour = 0};
     if(timerMinute == ""){timerMinute = 0};
     if(timerSecond == ""){timerSecond = 0};
    
    let currentHour = new Date().getHours();
    timerHour = Number(currentHour + timerHour);

    let currentMinute = new Date().getMinutes();
    timerMinute = Number(currentMinute + timerMinute); 

    let currentSecond = new Date().getSeconds();
    timerSecond = Number(currentSecond + timerSecond); 
  function runTimer (){
       alert('hey');
    let deadline = new Date(timerYear, timerMonth, timerDay, timerHour, timerMinute, timerSecond);
    let second = 1000; //one second equal to 1000 milliseconds///
    let minute = second * 60; ///one minute equal to 60 seconds///
    let hour = minute * 60; //one hour equal to 60 minutes 
    let day = hour * 24;   //one day equat to 24 hours //

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
        
        if (remain <= 0){
          clearInterval(timer);
          document.getElementById("timerValue").innerHTML = "Time's Up!";
          return;
        }
     }
     timer = setInterval(runTimer, 1000); 
     }



 
       
             
    
    