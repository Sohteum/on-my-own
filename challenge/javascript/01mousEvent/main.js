const greet = document.querySelector("body h2");

console.log(greet);

/*  const superEventHandler = {
  'Hello!': (mouseenter) => {
    greet.innerText = "The mouse is here!";,
    greet.style.color = "blue";,
  }
}  */





function mouseEnter() {
  greet.innerText = "The mouse is here!";
  greet.style.color = "blue";
}
function mouseLeave() {
  greet.innerText = "The mouse is gone!";
  greet.style.color = "tomato";
}
function windowResize() {
  window.body.style.color = "green";
  greet.innerText = "you Just resized!";
}
function mouseRight() {

  greet.style.color = "teal";
  greet.innerText = "that was right click!";
}



greet.addEventListener("mouseenter", mouseEnter);
greet.addEventListener("mouseleave", mouseLeave);
window.addEventListener("contextmenu", mouseRight);
window.addEventListener("resize", windowResize); 