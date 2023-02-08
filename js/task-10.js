function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divEl = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

function createBoxes(amount) {
  amount = Number(inputEl.value);
  const boxesArr = new Array(Number(amount)).fill("");

  const boxesMarkup = boxesArr
    .map((el, i) => {
      return `<div style = "width: ${30 + i * 10}px; height: ${
        30 + i * 10
      }px; background-color: ${getRandomHexColor()}"></div>`;
    })
    .join("");

  return divEl.insertAdjacentHTML("afterbegin", boxesMarkup);
}

function destroyBoxes() {
  divEl.innerHTML = "";
  inputEl.value = "";
}

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
