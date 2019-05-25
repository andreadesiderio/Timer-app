"use strict"
function showDiallines (){
    let diallines = document.getElementsByClassName("diallines");
    let analogClock = document.getElementsByClassName("analogClock")[0];
    
    for (let i = 0; i < 60; i++){
        analogClock.innerHTML += "<div class='diallines'></div>";
        diallines[i].style.transform = "rotate(" + 6 * i + "deg)";
    }
}
window.addEventListener("load", function() {
    showDiallines ();
    let now = new Date();
    let utcString = now.toISOString().substring(0,19);
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
     let hour = now.getHours();
     let minute = now.getMinutes();
     let second = now.getSeconds();
    // let localDatetime = year + "-" +
    //                   (month < 10 ? "0" + month.toString() : month) + "-" +
    //                   (day < 10 ? "0" + day.toString() : day) + "T" +
    //                   (hour < 10 ? "0" + hour.toString() : hour) + ":" +
    //                   (minute < 10 ? "0" + minute.toString() : minute) +
    //                   utcString.substring(16,19);
    let localDatetime = year + "-" +
                      (month < 10 ? "0" + month.toString() : month) + "-" +
                      (day < 10 ? "0" + day.toString() : day) + "T" +
                       (hour < 10 ? "0" + hour.toString() : hour) + ":" +
                       (minute < 10 ? "0" + minute.toString() : minute) +
                      utcString.substring(16,19);
    const calendar = document.getElementById("calendar");
    calendar.value = localDatetime;
});



let button = document.getElementById("submit");
button.addEventListener('click', setTimer);
function setTimer(){
    const calendar = document.getElementById("calendar");
    document.getElementById("timerValue").innerHTML = calendar.value;}
let timer; 


// function preSetTimer(){
//     showDiallines ();
//     let now = new Date();
//     let thisDay = now.getDate();
//     const dayOption = document.getElementsByClassName("dayOption");
//     for (let i = 0; i < dayOption.length; i ++){
//      if (dayOption[i].value == thisDay){
//           dayOption[i].setAttribute("selected", "selected");
//      }
//     }
    
//     let thisMonth = now.getMonth();
//     const monthOption = document.getElementsByClassName("monthOption");
//     for (let i = 0; i < monthOption.length; i ++){
//      if (monthOption[i].value == thisMonth){
//           monthOption[i].setAttribute("selected", "selected");
//      }
//     }

//     const thisYear = now.getUTCFullYear();
//     const yearOption = document.getElementsByClassName("yearOption");
//     for (let i = 0; i < yearOption.length; i ++){
//      if (yearOption[i].value == thisYear){
//           yearOption[i].setAttribute("selected", "selected");
//      }
//     }
   
// }





// function setTimer(){
//     clearInterval(timer);

//      let timerMonth = Number(document.getElementById("monthSelector").value);
//      let timerDay = Number(document.getElementById("daySelector").value);
//      let timerYear = Number(document.getElementById("yearSelector").value);
//      let timerHour = Number(document.getElementById("hourInput").value);
//      let timerMinute = Number(document.getElementById("minuteInput").value);
//      let timerSecond = Number(document.getElementById("secondInput").value);

//     if(timerHour == ""){
//         timerHour = 0;
//     }
//     if(timerMinute == ""){
//     timerMinute = 0;
//     }
//     if(timerSecond == ""){
//         timerSecond = 0;
//     }
    
//     let currentHour = new Date().getHours();
//     timerHour = Number(currentHour + timerHour);

//     let currentMinute = new Date().getMinutes();
//     timerMinute = Number(currentMinute + timerMinute); 

//     let currentSecond = new Date().getSeconds();
//     timerSecond = Number(currentSecond + timerSecond); 

    
//     //put the values into a date format//
//     let end = new Date(timerYear, timerMonth, timerDay, timerHour, timerMinute, timerSecond);
//     //get the current date and time//  
//     // const now = new Date();
//     //one second equal to 1000 milliseconds///
//     const second = 1000;
//     ///one minute equal to 60 seconds///
//     const minute = second * 60;
//     //one hour equal to 60 minutes 
//     const hour = minute * 60;
//     //one day equat to 24 hours //
//     const day = hour * 24; 
//     //   let width = 14;
//     //   let height = 14;
//     document.getElementById("timerValue").innerHTML = "";






//     function showTimer(){
//         const now = new Date();
//     //difference betwwen the chosen time and the time the timer starts///
//     let remain = end - now;
       
//         ///the remaining days are the remaining time devided by day (wich is hours * 24)
//         const days = Math.floor(remain / day);
//         //the ramining hours are the remainder of day devided by hour (which is minute *60)
//         const hours = Math.floor((remain % day) / hour);
//         //remaining minutes is the remainder of hour devided by the minute equation 
//         const minutes = Math.floor((remain % hour) / minute);
//         //remiining seconds is reminder of minute devided but thhe second equeation 
//         const seconds = Math.floor((remain % minute) / second);

//         document.getElementById("timerValue").innerHTML = days + "Days";
//         document.getElementById("timerValue").innerHTML += hours + "Hrs";
//         document.getElementById("timerValue").innerHTML += minutes + "Min";
//         document.getElementById("timerValue").innerHTML += seconds + "Sec";

        
//         let hDeg = (hours * 30) + (minutes / 2);
//     // minute goes to 60 and 60*6 gets a 360 rotaion
//     let mDeg = minutes * 6;
//     let sDeg = seconds * 6;
//     // let sDeg = (Math.floor(seconds/10000)*6);
//     let secondHand = document.querySelector(".secondHand");
//         secondHand.style.transform = "rotate( " + sDeg + "deg)";

//         let background = document.getElementById("background");
//          document.getElementById("timerValue").innerHTML = remain;
//         background.style.width =  `${100000 / remain}%`;
//         background.style.height =  `${100000 / remain}%`;
        
//         if (remain < 0){
//             clearInterval(timer);
//             document.getElementById("timerValue").innerHTML = "Time's Up!";
//             return;
//         }
//      }

//      timer = setInterval(showTimer, 1000);

//     }
