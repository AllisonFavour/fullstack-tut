// select the anchor tag
const a = document.querySelector('a');

// use getAttribute(attrName) to check the attribute name
console.log(a.getAttribute('href'));

// select a-two and set href attribute
const aTwo = document.querySelector('.a-two');
console.log(aTwo.setAttribute('href', 'https://udemy.com'));