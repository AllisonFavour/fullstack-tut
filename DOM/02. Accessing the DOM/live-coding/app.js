// ******** DOM SELECTORS *********
// 1. getElementsByTagName
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('h1').length);
// 2. getElementById
console.dir(document.getElementById('main')); 
// 3. getElementsByClassName
console.dir(document.getElementsByClassName('cls'));
// 4. querySelector
console.dir(document.querySelector('h1')); // select by tag name
console.dir(document.querySelector('.cls')); // select by class name
console.dir(document.querySelector('#id-1')); // select by id name
// 5. querySelectorAll
console.log(document.querySelectorAll('li')); // selects all elements with the same tagName, className or idName

// --------------------------------
// storing data in variables