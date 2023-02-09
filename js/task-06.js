const inputEl = document.querySelector("#validation-input");
const validNumber = inputEl.dataset.length;
console.log(validNumber);

inputEl.addEventListener("blur", () => {
  console.log(inputEl.value.length);
  if (inputEl.value.length === Number(validNumber)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});
