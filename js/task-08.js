const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
e.preventDefault();

const formElements = e.currentTarget.elements;

if (formElements.email.value === "" || formElements.password.value === "") {
    alert("Заповніть, будь ласка, всі поля форми;)")
} else {
    console.log(`email: ${formElements.email.value}`);
    console.log(`password: ${formElements.password.value}`);
    e.currentTarget.reset();
}
});