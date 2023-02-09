function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector(".change-color");
const currentColorName = document.querySelector(".color");

changeColorButton.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  currentColorName.textContent = color;
});
