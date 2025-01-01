//------------------------------------------------------------
// createElement() - create an HTML element
// appendChild() - add to the end after a parent element
// append() - add to the end 
// prepend() - add to the beginning
// insertBefore(whatElement, wherePosition)

/* insertAdjacentElement(
    'beforebegin'
    'beforeend'
    'afterend'
    'afterbegin, 

    element

    )
*/

// removeChild() - removes a child from a list of parent element
// remove() - removes the whole element

// creating element
// const h1 = document.createElement('h1');
// h1.textContent = 'Bye Bye';
// h1.classList.add('greetings');

// console.log(h1);

// appending a child element
// const body = document.body;
// body.appendChild(h1);

// insertBefore
// const ul = document.querySelector('ul');

// const newLi = document.createElement('li');
// newLi.innerText = "I'm just a li tag";
// ul.appendChild(newLi);

// const firstLi = document.querySelector('li');
// ul.insertBefore(newLi, firstLi);

//-----------------------------------------------------------

// const firstP = document.querySelector('p');
// const i = document.createElement('i');
// i.innerText = "I'm italicized";
// i.style.color = 'skyblue';
// firstP.insertAdjacentElement('beforebegin', i);
// firstP.insertAdjacentElement('afterbegin', i);
// firstP.insertAdjacentElement('beforeend', i);
// firstP.insertAdjacentElement('afterend', i);

//-----------------------------------------------------------

// let section = document.querySelector('section');
// const i = document.createElement('i');
// i.innerText = "I'm italicized";
// i.style.color = 'skyblue';

// const h4 = document.createElement('h4');
// h4.innerText = 'Trill World';
// h4.style.color = 'crimson';

// // section.append(i, h4);
// section.prepend(i, h4);

//-------------------------------------------------------------

// remove() and removeChild()
const newList = document.querySelector('.new-list');
const fourth = document.querySelector('.fourth');
newList.removeChild(fourth);
newList.remove();