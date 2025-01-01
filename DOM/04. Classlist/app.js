// classList() - gives a list of classes on an HTML element
const h1Class = document.querySelector('h1');
console.log(h1Class.classList);
// add() - adds a className to an HTML element
h1Class.classList.add('add');
// remove() - removes a className on an HTML element
h1Class.classList.remove('add');
// toggle() - adds a className to an HTML element and removes the className if the name already exists, does the work of an add and remove
