
const gameForm = document.querySelector('.gameForm');
const userInput = document.querySelector('num1');
const youChosen = document.querySelector('.setNum span:first-child');
const randomNum = document.querySelector('.setNum span:last-child');
const result = document.querySelector('.result');

function RandomN() {
  const ranNum = Math.ceil(Math.random()) * parseInt(num1);
  return ranNum;
}

function buttonClick(e) {
  e.preventDefault();
  e.eventTarget.innerHTML;

  let num1 = document.querySelector('.num1').value;
  const userInput = Number(userInput.value);
  const randomNum = RandomN(0, num1);

  youChosen.innerText = `You chose:${userInput}`;
  randomNum.innerText = `, machine chose: ${randomNum}`;

  if (userInput === randomNum) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost!";
  }
}

gameForm.addEventListener("input", buttonClick);