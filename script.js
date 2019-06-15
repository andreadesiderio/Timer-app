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

