const adviceNumber = document.querySelector('#adviceNumber')
const advice = document.querySelector('#advice')
const button = document.querySelector('button')

let adviceData = {}

fetch("https://api.adviceslip.com/advice")
.then(response => response.json())
.then(data => {

    const number = data.slip.id
    const quote = data.slip.advice

    adviceNumber.textContent = `Advice #${number}`

    advice.textContent = `"${quote}"`

});

button.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice", {cache: "reload"})
    .then(response => response.json())
    .then(data => {

    const number = data.slip.id
    const quote = data.slip.advice

    adviceNumber.textContent = `Advice #${number}`

    advice.classList.add('fadeInDown')

    advice.textContent = `"${quote}"`

    setTimeout(function () {
        advice.classList.remove('fadeInDown')
    }, 500)
});
});