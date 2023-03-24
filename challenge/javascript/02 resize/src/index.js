const body = document.querySelector("body");

function winResize() {
  const innerWidth = window.innerWidth;

  if(innerWidth<=500) {
   body.style.backgroundColor = "blue";
} else if(innerWidth<=800 && innerWidth>500) {
  body.style.backgroundColor = "pink";
} else if (innerWidth>=1100 && innerWidth>800) {
  body.style.backgroundColor = "yellow";
} 
}

window.addEventListener("resize", winResize);


/* window.addEventListener(`resize`, function() {
  
}); */

/* 
const body = document.body;

const BIG_SCREEN = "bigScreen";
const MEDIUM_SCREEN = "mediumScreen";
const SMALL_SCREEN = "smallScreen";

function winResize() {
  const innerWidth = window.innerWidth;
  if(innerWidth>="500") {
   body.style.backgroundColor = "blue";
} else if(innerWidth>="800") {
  body.style.backgroundColor = "pink";
} else if (innerWidth>="1100") {
  body.style.backgroundColor = "yellow";
} 
}

window.addEventListener("resize", handleResize);
 */