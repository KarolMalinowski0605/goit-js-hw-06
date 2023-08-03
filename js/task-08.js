

const form = document.querySelector(".login-form")
        form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {

    event.preventDefault();

    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;

    if (emailInput.value === "" || passwordInput.value === "") {
        return alert ("Please fill in all the fields!");
    }

const objectUser = {
    email: emailInput.value,
    password: passwordInput.value
  };
  console.log(objectUser);

  form.reset();
  
}
