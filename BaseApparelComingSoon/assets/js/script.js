const emailEL = document.querySelector('#emailInput')

const submitEL = document.querySelector('#submit')

const form = document.querySelector('#mainForm')

const isRequired = value => value === '' ? false : true;

const emailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
}

const sendError = (message) => {
    let errorIcon = document.querySelector('.error-icon')
    let errorText = document.querySelector('.error-text')

    errorIcon.classList.remove('error-hide')
    errorIcon.classList.add('error-show')

    errorText.classList.remove('error-hide')
    errorText.classList.add('error-show')

    emailEL.classList.add('error-input')

    errorText.textContent = message;
}

const removeError = () => {
    let errorIcon = document.querySelector('.error-icon')
    let errorText = document.querySelector('.error-text')

    errorIcon.classList.remove('error-show')
    errorIcon.classList.add('error-hide')

    errorText.classList.remove('error-show')
    errorText.classList.add('error-hide')

    emailEL.classList.remove('error-input')

    errorText.textContent = '';
}

const checkEmail = () => {
    let valid = false;
    let email = emailEL.value.trim()

    if (!isRequired(email)) {
        sendError('Email Cannot be Blank.')
    } else if (!emailValid(email)) {
        sendError('Please Provide a Valid Email')
    } else {
        valid = true
        removeError()
    }
    return valid
}



form.addEventListener('submit', function (e) {


    let isEmailValid = checkEmail()

    let isFormValid = isEmailValid

    if (isFormValid) {
        
    }
});


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

    submitEL.setAttribute('disabled', '')

form.addEventListener('input', debounce(function (e) {

    checkEmail();

    let isEmailValid = checkEmail()

    let isFormValid = isEmailValid

    if (isFormValid) {
        submitEL.removeAttribute('disabled')
    }
    else{
        submitEL.setAttribute('disabled', '')
    }

}))
