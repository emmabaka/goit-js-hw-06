let counterValue = 0;
const counterWrapper = document.querySelector("#counter");

const decrementButton = counterWrapper.firstElementChild;
const incrementButton = counterWrapper.lastElementChild;
const counterCurrentValue = counterWrapper.querySelector("#value");

decrementButton.addEventListener("click", () => {
    counterValue -= 1;
    counterCurrentValue.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
    counterValue += 1;
    counterCurrentValue.textContent = counterValue;
});