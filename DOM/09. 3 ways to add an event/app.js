// ------------ bad way ------------
const secondBtn = document.querySelector('.second-btn');
secondBtn.onclick = function() {
    console.log('Clicked!');
}

// ------------ best way -----------
const best = document.querySelector('.best');
best.addEventListener('click', () => {
    console.log('best way using external script file and addEventListener()');
});

// ---------- Event (e) Object ----------------
const para = document.querySelector('.para');
const form = document.querySelector('form');
const input = document.querySelector('input');

para.addEventListener('click', (event) => {
    console.log(event);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(input.value);
    input.value = '';
})