const input = document.querySelector('input');

// input.addEventListener('keypress', (e) => {
//     console.log('key pressed:', e.key)
// });

// input.addEventListener('keyup', (e) => {
//     console.log('key up:', e.key)
// });

// input.addEventListener('keydown', (e) => {
//     console.log('key down:', e.key)
// });

// USEFUL PROPERTIES AND METHODS
input.addEventListener('keypress', e => {
    console.log(e.charCode);
    console.log(e.code);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
    console.log(e.key);
})