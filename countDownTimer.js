"use strict"

<<<<<<< HEAD
=======
window.addEventListener('load', preSetTimer);

>>>>>>> ranch
const button = document.getElementById("submit");
button.addEventListener('click', setTimer);

let timer; 

// document.getElementById("body").addEventListener("load", preSetTimer());

function preSetTimer(){
    let now = new Date();
    let thisDay = now.getUTCDate();
    const dayOption = document.getElementsByClassName("dayOption");
    for (let i = 0; i < dayOption.length; i ++){
     if (dayOption[i].value == thisDay){
          dayOption[i].setAttribute("selected", "selected");
     }
    }
    
    let thisMonth = now.getMonth();
    const monthOption = document.getElementsByClassName("monthOption");
    for (let i = 0; i < monthOption.length; i ++){
     if (monthOption[i].value == thisMonth){
          monthOption[i].setAttribute("selected", "selected");
     }
    }

    const thisYear = now.getUTCFullYear();
    const yearOption = document.getElementsByClassName("yearOption");
    for (let i = 0; i < yearOption.length; i ++){
     if (yearOption[i].value == thisYear){
          yearOption[i].setAttribute("selected", "selected");
     }
    }
   
}

function setTimer(){
    clearInterval(timer);

    let timerMonth = Number(document.getElementById("month").value);
    let timerDay = Number(document.getElementById("day").value);
    let timerYear = Number(document.getElementById("year").value);
    let timerHour = Number(document.getElementById("hour").value);
    let timerMinute = Number(document.getElementById("minute").value);
    let timerSecond = Number(document.getElementById("second").value);

    

    if(timerHour == ""){
        timerHour = 0;
    }
    if(timerMinute == ""){
    timerMinute = 0;
    }
    if(timerSecond == ""){
        timerSecond = 0;
    }
    
    let currentHour = new Date().getHours();
    timerHour = Number(currentHour + timerHour);

    let currentMinute = new Date().getMinutes();
    timerMinute = Number(currentMinute + timerMinute); 

    let currentSecond = new Date().getSeconds();
    timerSecond = Number(currentSecond + timerSecond); 

    
    //put the values into a date format//
    let end = new Date(timerYear, timerMonth, timerDay, timerHour, timerMinute, timerSecond);
    //get the current date and time//  
    // const now = new Date();
    //one second equal to 1000 milliseconds///
    const second = 1000;
    ///one minute equal to 60 seconds///
    const minute = second * 60;
    //one hour equal to 60 minutes 
    const hour = minute * 60;
    //one day equat to 24 hours //
    const day = hour * 24; 

    function showTimer(){
        const now = new Date();
        //difference betwwen the chosen time and the time the timer starts///
        const remain = end - now;
       
        ///the remaining days are the remaining time devided by day (wich is hours * 24)
        const days = Math.floor(remain / day);
        //the ramining hours are the remainder of day devided by hour (which is minute *60)
        const hours = Math.floor((remain % day) / hour);
        //remaining minutes is the remainder of hour devided by the minute equation 
        const minutes = Math.floor((remain % hour) / minute);
        //remiining seconds is reminder of minute devided but thhe second equeation 
        const seconds = Math.floor((remain % minute) / second);

        document.getElementById("timerValue").innerHTML = days + "Days";
        document.getElementById("timerValue").innerHTML += hours + "Hrs";
        document.getElementById("timerValue").innerHTML += minutes + "Min";
        document.getElementById("timerValue").innerHTML += seconds + "Sec";

        if (remain < 0){
            clearInterval(timer);
            document.getElementById("timerValue").innerHTML = "Time's Up!";
            return;
        }
     }

     timer = setInterval(showTimer, 1000);

}
