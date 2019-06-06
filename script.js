'use strict'

window.addEventListener('load', displayClock);

function showDiallines (){
    let diallines = document.getElementsByClassName("diallines");
    let analogClock = document.getElementsByClassName("analogClock")[0];
    
    for (let i = 0; i < 60; i++){
        analogClock.innerHTML += "<div class='diallines'></div>";
        diallines[i].style.transform = "rotate(" + 6 * i + "deg)";
    }
}

function showDayAndDate(){
    let weekdays = new Array(7);
    let date = new Date();
    let currentDate = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let clockDate = document.querySelector(".clockDate");
    let clockDay = document.querySelector(".clockDay");

    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
   
   let day = weekdays[date.getDay()];

    clockDate.innerHTML = month + " / " + currentDate +  " / "  + year ;
    clockDay.innerHTML = day; 
}

function displayClock(){
    showDiallines();
    showDayAndDate();
   
}

function runClock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
  
    let hDeg = (hour * 30) + (minute / 2); //this is to get 360deg rotation... hour(12hours)*30=360
    let mDeg = minute * 6;// minute goes to 60 and 60*6 gets a 360 rotaion
    let sDeg = second * 6;

    let hourHand = document.querySelector(".hourHand");
    let minuteHand = document.querySelector(".minuteHand");
    let secondHand = document.querySelector(".secondHand");

     hourHand.style.transform = "rotate(" + hDeg + "deg)";
     minuteHand.style.transform = "rotate(" + mDeg + "deg)";
     secondHand.style.transform = "rotate(" + sDeg + "deg)";
}

setInterval("runClock()", 1000);