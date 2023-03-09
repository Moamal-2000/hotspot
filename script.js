'use strict'

const userName = document.querySelector('.vertical-form input[placeholder="Username"]');
const password = document.querySelector('.vertical-form input[placeholder="Password"]');
const rememberMe = document.querySelector('.remember-me-container');
const form = document.querySelector('.vertical-form');
const submit = document.querySelector('.vertical-form input[type=submit]');
const spinner = document.querySelector(".triple-spinner");
const overlay = document.querySelector(".overlay");



// get/set data from local storage
let userNameLocal = localStorage.getItem('username');
if (userNameLocal !== null) userName.value = userNameLocal;

let passwordLocal = localStorage.getItem('password');
if (passwordLocal !== null) password.value = passwordLocal;



// remember me logic
form.addEventListener('submit', (e) => {
  if (rememberMe.children[0].checked) {
    if (userName.value.length != '0' && password.value.length != '0') {
      localStorage.setItem('username', userName.value)
      localStorage.setItem('password', password.value)
    }
  }
})



// Loading logic
setTimeout(() => {
  overlay.style.opacity = "0";
  spinner.style.opacity = "0";
  setTimeout(() => {
    spinner.remove();
    overlay.remove();
  }, 300);
}, 2000);
