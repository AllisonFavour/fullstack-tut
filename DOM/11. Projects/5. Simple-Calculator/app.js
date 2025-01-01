document.getElementById('btn').addEventListener('click', () => {
    let num1 = document.querySelector('.num1').value;
    let num2 = document.querySelector('.num2').value;
    let result = document.querySelector('.result');
    let operator = document.getElementById('selectOp').value;

    switch (operator) {
        case 'plus':
            result.innerHTML = Number(num1) + Number(num2);
            break;
        case 'minus':
            result.innerHTML = Number(num1) - Number(num2);
            break;
        case 'multiply':
            result.innerHTML = Number(num1) * Number(num2);
            break;
        case 'divide':
            result.innerHTML = Number(num1) / Number(num2);
            break;
        default:
            result.innerHTML = 'Not a valid number';
            break;
    };
});