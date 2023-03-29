const clockTitle = document.querySelector("h2.js-clock");


function christmasclock() {
  const christmas = new Date("2023-12-25");
  const today = new Date();
  const day = christmas - today-1;
  
  const date = Math.floor(day/(1000*60*60*24));
  const hours = Math.floor(day/(1000*60*60)%24);
  const minutes = Math.floor(day/(1000*60)%60);
  const seconds = Math.floor((day/1000)%60);
  clockTitle.innerText = `${date}Days:${hours}h:${minutes}m:${seconds}s`;
}

setInterval(christmasclock, 1000);

