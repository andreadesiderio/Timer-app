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
    year = date.getFullYear(),
    //this is to get 360deg rotation... hour(12hours)*30=360
    hDeg = (hour * 30) + (minute / 2),
    // minute goes to 60 and 60*6 gets a 360 rotaion
    mDeg = minute * 6,
    sDeg = second * 6,

    hourHand = document.querySelector(".hourHand"),
    minuteHand = document.querySelector(".minuteHand"),
    secondHand = document.querySelector(".secondHand"),
    analogDate = document.querySelector(".analogClockDate"),
    analogDay = document.querySelector(".analogClockDay");

    hourHand.style.transform = "rotate(" + hDeg + "deg)";
    minuteHand.style.transform = "rotate(" + mDeg + "deg)";
    secondHand.style.transform = "rotate(" + sDeg + "deg)";

    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
   
   let day = weekdays[date.getDay()];

    analogDate.innerHTML = currentDate + " / " + month +  " / "  + year ;
    analogDay.innerHTML = day; 
}

setInterval("runClock()", 1000);