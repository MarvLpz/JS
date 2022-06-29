appendValue = (val) => {
    document.getElementById('value').value = document.getElementById('value').value + val
} 

clearValue = () => {
    document.getElementById('value').value = ''
}

const numbersButtons = document.querySelectorAll('[data-number]');

numbersButtons.forEach(button => {button.addEventListener('click', (e) => appendValue(button.textContent))})

//document.getElementsByClassName("mybtn num").onclick = console.log("clicked");

document.getElementById('clear').onclick = clearValue;