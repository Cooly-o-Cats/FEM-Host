const inputEl = document.getElementById('email');
const submitEl = document.getElementById('submit');
const form = document.querySelector('form')

// Base Functions

function isRequired(input) {
    if (input === ''){
        return false
    }
    else{
        return true
    }
}

function validEmail(input) {
    let regEx = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return regEx.test(input);
}

// Error functions

function createError() {
    const errormessage = document.querySelector('.error-message');

    errormessage.style.display = "block";

    inputEl.classList.add('error');
}

function removeError() {
    const errormessage = document.querySelector('.error-message');

    errormessage.style.display = "none";

    inputEl.classList.remove('error')
}

// Check Functions

function checkEmail(){
    let valid = false;

    const email = inputEl.value.trim()

    if(!isRequired(email)){
        createError()
    }
    else if(!validEmail(email)){
        createError()
    }
    else{
        removeError();
        valid = true;
    }
    return valid;
}

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    let isEmailValid = checkEmail()

    let isFormValid = isEmailValid;

    if (isFormValid) {
        submitEl.removeAttribute('disabled')
    }
}));