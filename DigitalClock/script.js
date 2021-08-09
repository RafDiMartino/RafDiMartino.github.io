
const currentTime = () => {
    let date = new Date(); /* creating object of Date class */
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear()
    let ampm = ( hour < 12 ) ? "AM" : "PM"; /* assigning AM/PM */
    hour = ( hour > 12 ) ? hour - 12 : hour; /* assigning hour in 12-hour format */
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    day = updateTime(day);
    month = updateTime(month);
    year = updateTime(year)
    setTimeout(currentTime, 1000); /* setting timer */
    document.getElementById("hours").innerText = hour + ":";
    document.getElementById("minutes").innerText = min + ":";
    document.getElementById("seconds").innerText = sec;
    document.getElementById("ampm").innerText = ampm;
    document.getElementById("date").innerText = `${weekday[d.getDay()].substring(0,3)} ${day} ${monthName.substring(0,3)} ${year}`

}

const updateTime = (k) => { /* appending 0 before time elements if less than 10 */
  if (k < 10) {
      return "0" + k;
  }
  else {
      return k;
  }
}

const c = new Date();

const monthName = c.toLocaleString("default", {month: "long"});

let d = new Date();
let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let n = weekday[d.getDay()];

currentTime();

/*setting the onclick on/off*/ 

let clicked = true;

const buttonOn = () => {
  if (clicked){
    document.getElementById("clock").style.color = "rgba(30, 255, 0, 0.623)";
    document.getElementById("clock").style.transition = "all 3s ease";
    document.getElementById("btn").style.backgroundColor = "rgba(30, 255, 0, 0.623)";
    document.getElementById("btn").style.transition = "all 3s ease";
    clicked = false;
  } else {
    document.getElementById("clock").style.color = "rgb(20, 20, 20)";
    document.getElementById("btn").style.backgroundColor = "rgba(255, 0, 0, 0.205)";
    clicked = true;
  }
};

const buttonOff = () => {
  document.getElementById("clock").style.color = "rgb(20, 20, 20)";
  document.getElementById("btn").style.backgroundColor = "rgba(255, 0, 0, 0.205)";
};
