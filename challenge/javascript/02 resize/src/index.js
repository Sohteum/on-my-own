const h2 = document.querySelector("body h2");



function winw(windowResize) {
  let winW = window.width
  let result
  if (winW < 800) {
    result = h2.style.backgroundcolor = "blue";
  } else if (winW < 1000) {
    result = window.body.style.background = "pink";
  } else if (winW < 1300)
    result = window.body.style.background = "pink";
} return result

window.addEventListener("resize", windowResize);
function winw(windowResize) {
  let winW = window.width
  let result
  if (winW < 800) {
    result = h2.style.backgroundcolor = "blue";
  } else if (winW < 1000) {
    result = window.body.style.background = "pink";
  } else if (winW < 1300)
    result = window.body.style.background = "pink";
} return result

window.addEventListener("resize", windowResize);