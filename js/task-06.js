 const inputEl = document.querySelector("#validation-input");
 const validNumber = inputEl.dataset.length;
 
 inputEl.addEventListener("blur", (e) => {
    if (inputEl.value.length >= validNumber) {
        inputEl.classList.add("valid")
    } else {
        inputEl.classList.add("invalid")
    }
 })