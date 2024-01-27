const showFormButton = document.getElementById("signupbutton");
const signUpForm = document.querySelector(".sign-up-form");
let formIsShown = false;
// console.log(signUpForm);
function showForm() {
    if (formIsShown) {
        formIsShown = false;
        signUpForm.classList.remove("reveal");
    } else {
        signUpForm.classList.add("reveal");
        formIsShown = true;
    }
    console.log(formIsShown)
}


