let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let M = document.getElementById("M");

function getCurrentTime() {
  let currDate = new Date();
  let currHours = currDate.getHours();
  let currMins = currDate.getMinutes();
  let currSecs = currDate.getSeconds();
  hour.innerText = currHours > 12 ? `0${currHours - 12}` : `0${currHours}`;
  minute.innerText = currMins.toString().length < 2 ? `0${currMins}` : currMins;
  second.innerText = currSecs.toString().length < 2 ? `0${currSecs}` : currSecs;
  M.innerText = currHours > 12 ? `PM` : `AM`
}

// getCurrentTime();

setInterval(() => {
  getCurrentTime();
}, 1000);
