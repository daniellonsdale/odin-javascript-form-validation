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
    }else if(!country.validity.valid){
        showCountryError();
        e.preventDefault();
    }else if(!postalCode.validity.valid){
        showPostalCodeError();
        e.preventDefault();
    }else if(!password.validity.valid){
        showPasswordError();
        e.preventDefault();
    }else if(!confirmPassword.validity.valid || confirmPassword.value !== password.value){
        showConfirmPasswordError();
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

country.addEventListener('change', () => {
    if(country.validity.valid){
        countryError.textContent = "";
        countryError.className = "error";
    }else{
        showCountryError();
    }
});

function showCountryError(){
    if(country.validity.valueMissing){
        countryError.textContent = "You need to enter a country";
    }else if(country.validity.tooShort){
        countryError.textContent = `Country name should be at least ${country.minLength} characters; you entered ${country.value.length}`;
    }

    countryError.className = "error active";
}

postalCode.addEventListener('change', () => {
    if(postalCode.validity.valid){
        postalCodeError.textContent = "";
        postalCodeError.className = "error";
    }else{
        showPostalCodeError();
    }
});

function showPostalCodeError(){
    if(postalCode.validity.valueMissing){
        postalCodeError.textContent = "You need to enter a postal code";
    }else if(postalCode.validity.tooShort){
        postalCodeError.textContent = `Postal code should be ${postalCode.minLength} characters; you entered ${postalCode.value.length}`;
    }

    postalCodeError.className = "error active";
}

password.addEventListener('change', () => {
    if(password.validity.valid){
        passwordError.textContent = "";
        passwordError.className = "error";
    }else{
        showPasswordError();
    }
});

function showPasswordError(){
    if(password.validity.valueMissing){
        passwordError.textContent = "You need to enter a password";
    }else if(password.validity.tooShort){
        passwordError.textContent = `Password should be ${password.minLength} characters; you entered ${password.value.length}`;
    }

    passwordError.className = "error active";
}

confirmPassword.addEventListener('change', () => {
    if(confirmPassword.validity.valid && password.value === confirmPassword.value){
        confirmPasswordError.textContent = "";
        confirmPasswordError.className = "error";
    }else{
        showConfirmPasswordError();
    }
});

function showConfirmPasswordError(){
    if(confirmPassword.validity.valueMissing){
        confirmPasswordError.textContent = "You need to enter your password again";
    }else if(confirmPassword.value !== password.value){
        confirmPasswordError.textContent = "Your passwords do not match";
    }

    confirmPasswordError.className = "error active";
}