const greet = document.querySelector("body h2");

console.log(greet);

const superEventHandler = {
  'Hello!': (mouseenter) => {
    greet.innerText = "The mouse is here!"
    greet.style.color = "blue"
  }
}





function mouseEnter() {
  greet.innerText = "The mouse is here!";
  greet.style.color = "blue";
}
function mouseLeave() {
  greet.innerText = "The mouse is gone!";
  greet.style.color = "tomato";
}
function windowResize() {
  /*   document.h2.innerText = "You just resized!" ;*/
  document.body.style.color = "green";
}



greet.addEventListener("mouseenter", mouseEnter);
greet.addEventListener("mouseleave", mouseLeave);
window.addEventListener("resize", windowResize);