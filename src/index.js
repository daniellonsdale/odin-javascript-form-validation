import "./styles.css";

const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");
const postalCode = document.getElementById("postal-code");
const postalCodeError = document.querySelector("#postal-code + span.error");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");
const confirmPassword = document.getElementById("confirm-password");
const confirmPasswordError = document.querySelector("#confirm-password + span.error");

form.addEventListener('submit', (e) => {
    if(!email.validity.valid){
        showEmailError();
        e.preventDefault();
    }
});

email.addEventListener('change', () => {
    if(email.validity.valid){
        emailError.textContent = "";
        emailError.className = "error";
    }else{
        showEmailError();
    }
});

function showEmailError(){
    if(email.validity.valueMissing){
        emailError.textContent = "You need to enter an email address";
    }else if(email.validity.typeMismatch){
        emailError.textContent = "Please enter a valid email address";
    }else if(email.validity.tooShort){
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}`;
    }

    emailError.className = "error active";
}