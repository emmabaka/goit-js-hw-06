const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formElements = e.currentTarget.elements;

  if (formElements.email.value === "" || formElements.password.value === "") {
    alert("Заповніть, будь ласка, всі поля форми;)");
  } else {
    const loginValuesObj = {
      email: formElements.email.value,
      password: formElements.password.value,
    };
    console.log(loginValuesObj);
    
    e.currentTarget.reset();
  }
});
