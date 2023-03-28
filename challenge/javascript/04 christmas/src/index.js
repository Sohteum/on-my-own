const clockTitle = document.querySelector("h2.js-clock");
/* const intervalID = setInterval(christmasTimeOut, 500, 'Parameter 1', 'Parameter 2'); */


function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getminutes()).padStart(2, "0");
  const seconds = String(date.getseconds()).padStart(2, "0");
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);