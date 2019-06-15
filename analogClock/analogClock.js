'use strict'
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