function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector(".change-color");
const currentColorName = document.querySelector(".color");

changeColorButton.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  currentColorName.textContent = document.body.style.backgroundColor;
})