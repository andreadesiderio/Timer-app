// window.addEventListener("load", showDate);

// function showDate() {
//     const homeDate = document.getElementById("homeDate");
//     homeDate.innerHTML = new Date().toDateString();
// }

// const timeInterval = setInterval(showTime, 1000);

// function showTime(){
//     const homeClock = document.getElementById("homeClock");
//     let date = new Date();
//     homeClock.innerHTML = date.toLocaleTimeString();
// }

let diallines = document.getElementsByClassName("diallines");
let analogClock = document.getElementsByClassName("analogClock")[0];

for (let i = 0; i < 60; i++){
    analogClock.innerHTML += "<div class='diallines'></div>";
    diallines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function runClock(){
    let weekdays = new Array(7),
    date = new Date(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    currentDate = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getYear(),

    hDeg = hour * 30 + minute * (360 / 720),
    mDeg = minute * 30 + second * (360 / 720),
    sDeg = second * 6,

    hourHand = document.querySelector(".hourHand"),
    minuteHand = document.querySelector(".minuteHand"),
    secondHand = document.querySelector(".secondHand"),
    analogDate = document.querySelector(".analogClockDate"),
    analogDay = document.querySelector(".analogClockDay");

     weekdays[0] = "Sunday";
     weekdays[1] = "Monday";
     weekdays[2] = "Tuesday";
     weekdays[3] = "Wednesday";
     weekdays[4] = "Thursday";
     weekdays[5] = "Friday";
     weekdays[6] = "Saturday";
    
    let day = weekdays[date.getDay()];

    hourHand.style.transform = "rotate(" + hDeg + "deg)";
    minuteHand.style.transform = "rotate(" + mDeg + "deg)";
    secondHand.style.transform = "rotate(" + sDeg + "deg)";

    analogDate.innerHTML = currentDate + " / " + month +  " / "  + year ;
    analogDay.innerHTML = day; 
}

setInterval("runClock()", 1000);