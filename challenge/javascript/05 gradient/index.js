const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

document.querySelector('button').addEventListener("click", (e) => {
  for (let i = 0; i <= colors.length; i++) {
    let randomColor = Math.floor(Math.random() * colors.length)
    body.style.backgroundColor = colors[randomColor];
  }
  document.body.style.backgroundColor = colorChange;
});



// const btn = document.querySelector("button");

// function handleClick() {
//   const a = colors[Math.floor(Math.random() * colors.length)];
//   const b = colors[Math.floor(Math.random() * colors.length)];
//   if (a === b) {
//     return handleClick();
//   }
//   document.body.style.background = `linear-gradient(to left, ${a}, ${b})`;
// }

// btn.addEventListener("click", handleClick);




