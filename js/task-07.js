const inputEl = document.querySelector("#font-size-control");
const outputEl = document.querySelector("#text");
console.log(outputEl.style.fontSize);

inputEl.addEventListener("input", (e) => {
 outputEl.style.fontSize = `${inputEl.value}px`;
});