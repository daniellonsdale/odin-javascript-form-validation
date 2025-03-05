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