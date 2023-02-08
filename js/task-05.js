const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
if (inputEl.value === "") {
    outputEl.textContent = "Anonymous";
} else{
outputEl.textContent = inputEl.value;
}
});