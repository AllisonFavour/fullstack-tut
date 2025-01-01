// href
const a = document.querySelector('a');
console.log(a.href);
// value
const input = document.querySelector('input');
// console.log(input.value);
// type
console.log(input.type);
// getAttribute(attrName)
console.log(input.getAttribute('type'));
console.log(input.getAttribute('placeholder'));
// setAttribute(attrName, attrValue)
console.log(input.setAttribute('type', 'email'));
console.log(input.setAttribute('placeholder', 'Enter email'));