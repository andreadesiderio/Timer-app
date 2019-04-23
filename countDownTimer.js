var button = document.getElementById("submit");
button.addEventListener('click', setTimer);

var timer; 

// document.getElementById("body").addEventListener("load", preSetTimer());

function preSetTimer(){
    var now = new Date();

    var thisDay = now.getUTCDate();
    var dayOption = document.getElementsByClassName("dayOption");
    for (var i = 0; i < dayOption.length; i ++){
     if (dayOption[i].value == thisDay){
          dayOption[i].setAttribute("selected", "selected");
     }
    }
    
    var thisMonth = now.getMonth();
    var monthOption = document.getElementsByClassName("monthOption");
    for (var i = 0; i < monthOption.length; i ++){
     if (monthOption[i].value == thisMonth){
          monthOption[i].setAttribute("selected", "selected");
     }
    }

    var thisYear = now.getUTCFullYear();
    var yearOption = document.getElementsByClassName("yearOption");
    for (var i = 0; i < yearOption.length; i ++){
     if (yearOption[i].value == thisYear){
          yearOption[i].setAttribute("selected", "selected");
     }
    }
   
}

function setTimer(){
    clearInterval(timer);

    var timerMonth = Number(document.getElementById("month").value);
    var timerDay = Number(document.getElementById("day").value);
    var timerYear = Number(document.getElementById("year").value);
    var timerHour = Number(document.getElementById("hour").value);
    var timerMinute = Number(document.getElementById("minute").value);
    var timerSecond = Number(document.getElementById("second").value);

    

    if(timerHour == ""){
        timerHour = 0;
    }
    if(timerMinute == ""){
    timerMinute = 0;
    }
    if(timerSecond == ""){
        timerSecond = 0;
    }
    
    var currentHour = new Date().getHours();
    timerHour = Number(currentHour + timerHour);

    var currentMinute = new Date().getMinutes();
    timerMinute = Number(currentMinute + timerMinute); 

    var currentSecond = new Date().getSeconds();
    timerSecond = Number(currentSecond + timerSecond); 

    
    //put the values into a date format//
    var end = new Date(timerYear, timerMonth, timerDay, timerHour, timerMinute, timerSecond);
    //get the current date and time//  
    var now = new Date();
    //one second equal to 1000 milliseconds///
    var second = 1000;
    ///one minute equal to 60 seconds///
    var minute = second * 60;
    //one hour equal to 60 minutes 
    var hour = minute * 60;
    //one day equat to 24 hours //
    var day = hour * 24; 

    function showTimer(){
        var now = new Date();
        //difference betwwen the chosen time and the time the timer starts///
        var remain = end - now;
       
        ///the remaining days are the remaining time devided by day (wich is hours * 24)
        var days = Math.floor(remain / day);
        //the ramining hours are the remainder of day devided by hour (which is minute *60)
        var hours = Math.floor((remain % day) / hour);
        //remaining minutes is the remainder of hour devided by the minute equation 
        var minutes = Math.floor((remain % hour) / minute);
        //remiining seconds is reminder of minute devided but thhe second equeation 
        var seconds = Math.floor((remain % minute) / second);

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
