const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const dueDate = new Date("May 20 2022 00:00:00");

const curentDate = new Date().getFullYear;

const updateTimer = () => {
  const curetTime = new Date();
  const diff = dueDate - curetTime;

  const d = Math.floor(diff / 1000 / 86400);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
};

updateTimer();

setInterval(updateTimer, 1000);
