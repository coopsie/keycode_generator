const displayKey = document.querySelector('.key h2');
const displayKeyCode = document.querySelector('.keyCode h2');
const keyCodeDiv = document.querySelector('.keyCode');
const overlay = document.querySelector('.overlay');

window.addEventListener('keydown', (event) => {
    overlay.classList.add('hide');
    displayKey.innerText = event.key;
    displayKeyCode.innerText = event.keyCode;
    if(event.keyCode === 32){
        displayKey.innerText = `Space`;
    }
}) 

