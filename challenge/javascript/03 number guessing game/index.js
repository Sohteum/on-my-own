

const userSetNumber = document.querySelector(`.num1`).innerHTML
const randomNumber = parseInt(Math.ceil(Math.random) * userSetNumber)

document.querySelector(`div>p>button`).addEventListener(`click`, e => {
  e.preventDefault()
  e.eventTarget.innerHTML
})


function handlerRangeInput() {
  const rangeNum = rangeInput.value;
  chooseInput.setAttribute("max", rangeNum);
}

rangeForm.addEventListener("input", handlerRangeInput);