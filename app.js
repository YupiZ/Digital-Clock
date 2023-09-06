const clockElement = document.querySelector("#clock");
const dateElement = document.querySelector("#date");
const toggleFormatButton = document.querySelector("#toggleFormat");

let is12HourFormat = false;

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return { hours, minutes, seconds };
}

function getCurrentDate() {
  const now = new Date();
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  return { date, month, year };
}

function formatTime({ hours, minutes, seconds }) {
  const padMin = String(minutes).padStart(2, "0");
  const padSec = String(seconds).padStart(2, "0");

  if (is12HourFormat) {
    const period = hours >= 12 ? "PM" : "AM";
    const hoursInPM = hours % 12 || 12;
    return `${String(hoursInPM).padStart(2,"0")}:${padMin}:${padSec} ${period}`;
  } else {
    return `${String(hours).padStart(2, "0")}:${padMin}:${padSec}`;
  }
}
function formatDate({ date, month, year }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[month];
  return `${monthName} ${String(date).padStart(2, "0")} ${year}`;
}

function updateDisplay() {
  const currentTime = getCurrentTime();
  const currentDate = getCurrentDate();

  clockElement.textContent = formatTime(currentTime);
  dateElement.textContent = formatDate(currentDate);
}

toggleFormatButton.addEventListener("click", () => {
  is12HourFormat = !is12HourFormat;
  updateDisplay();
});

window.addEventListener("DOMContentLoaded", () => {
	updateDisplay();
	setInterval(updateDisplay, 1000);
  });
  document
  .getElementById("changeBackgroundBtn")
  .addEventListener("click", function () {
    changeBackground();
  });

function changeBackground() {
  const currentImage= document.body.style.backgroundImage
  const imageUrl =['url("img/christmas-7644625_1920.jpg")','url("img/new-york-7819721_1920.jpg")','url("img/sunset-7790626.jpg")','url("img/sunset-7790625_1920.jpg")'];
  let index = imageUrl.indexOf(currentImage);
  index=(index +1)% imageUrl.length;
  document.body.style.backgroundImage=imageUrl[index];
  document.body.style.transition= 'background-image 1s ease';

}
