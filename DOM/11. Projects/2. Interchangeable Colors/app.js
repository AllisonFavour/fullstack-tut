const btns = document.querySelectorAll('.btn');
const body = document.body;

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        color = btn.value;
        addClassName(color);
        // changeBackgroundColor(color);
    })
})

// function changeBackgroundColor(color) {
//     body.style.backgroundColor = '';

//     switch (color) {
//         case 'purple':
//             body.style.backgroundColor = 'purple';
//             break;
//         case 'blue':
//             body.style.backgroundColor = 'blue';
//             break;
//         case 'green':
//             body.style.backgroundColor = 'green';
//             break;
//         case 'red':
//             body.style.backgroundColor = 'red';
//             break;
//         case 'yellow':
//             body.style.backgroundColor = 'yellow';
//             break;
//         case 'teal':
//             body.style.backgroundColor = 'teal';
//             break;
//         default:
//             break;
//     }
// }

function addClassName(className) {
    body.className = '';
    body.classList.add(className);
}