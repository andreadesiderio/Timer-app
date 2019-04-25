window.addEventListener("load", showDate);

function showDate() {
    const homeDate = document.getElementById("homeDate");
    homeDate.innerHTML = new Date().toDateString();
}

const timeInterval = setInterval(showTime, 1000);

function showTime(){
    const homeClock = document.getElementById("homeClock");
    let date = new Date();
    homeClock.innerHTML = date.toLocaleTimeString();
}

