// console.log(window); // global object
// console.log(this); // window global object
// console.log(this === window); // true - both points to the window global object

// this.firstName = 'Trill'; // creates our own property or method to the global object
// console.log(this);

// -----------------------------------------------------------------------------------
// using keyword this in a regular function points to the global object

// function printThis() {
//     return this;
// }

// const res = printThis();
// console.log(res);


// -----------------------------------------------------------------------------------
// using keyword this inside a method (function inside an object) will refer to the owner method, that means the object the keyword this was used.
// const obj = {
//     firstName: 'Trill',
//     lastName: 'One',
//     fullName: function() {
//         // return this; // this points to the parent object when used inside a regular function
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const res = obj.fullName();
// console.log(res);
// -----------------------------------------------------------------------------------

// const obj = {
//     firstName: 'Trill',
//     lastName: 'One',
//     fullName: () => {
//         return this; // this points to the window global object when used inside an arrow function
//         // return `${this.firstName} ${this.lastName}`; // firstName and lastName does not exist on window
//     }
// }
// const res = obj.fullName();
// console.log(res);

// -----------------------------------------------------------------------------------

// const person = {
//     username: 'Trill',
//     age: 20,
//     greetRegular: function() {
//         return `Hello, my name is ${this.username} and i am ${this.age} years old.`;
//     },
//     greetArrow: () => {
//         return `Hello, my name is ${this.username} and i am ${this.age} years old.`;
//     }
// }

// const res = person.greetRegular();
// console.log(res);
// const res2 = person.greetArrow();
// console.log(res2);

// -----------------------------------------------------------------------------------
// factory function
function createPerson(firstName, lastName, pl) {
    return {
        firstName,
        lastName,
        pl,
        intro: function() {
            console.log(`My name is ${this.firstName} ${this.lastName} and i love ${this.pl}.`);
        }
    }
}
// const tee = createPerson('Trill', 'One', 'Javascript');
// console.log(tee);
// tee.intro();
// createPerson('Preshy', 'K', 'Python').intro();

// function createVehicle(type, brand, model, year) {
//     return {
//         type,
//         brand,
//         model,
//         year,
//     }
// }
// const vehicle1 = createVehicle('Car', 'Toyota', 'Corolla', 2025);
// console.log(vehicle1);

// -----------------------------------------------------------------------------------
// constructor function
// function CreatePeople(firstName, lastName, pl) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.pl = pl;

//     this.info = function() {
//         console.log(`Hello, my name is ${this.firstName} ${this.lastName} and i love ${pl}`)
//     }
// }

// const jane = new CreatePeople('Jane', 'Doe', 'Java');
// console.log(jane);
// jane.info();

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;

//     this.getInfo = function() {
//         return `${this.title} by ${this.author} written (${this.year})`;
//     }
// }

// const book1 = new Book('1984', 'Aldous Huxley', 1984);
// console.log(book1);
// console.log(book1.getInfo());

// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;

//     this.info = function() {
//         console.log(`My name is ${this.name}, i am ${this.age} years old, my gender is ${this.gender}`);
//     }
// }
// const person1 = new Person('Godwin Unugwa', '32', 'male');
// console.log(person1);
// console.log(person1.name);
// person1.info();


// function Car(make, model, year, color) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;

//     this.start = function() {
//         return `Starting the ${this.make} ${this.model}`
//     }

//     this.stop = function() {
//         return `Stopping the ${this.make} ${this.model}`
//     }
// }
// const car1 = new Car('Toyota', 'Corolla', 2022, 'Blue');
// console.log(car1);
// console.log(car1.start());
// console.log(car1.stop());

// const car2 = new Car('BMW', 'M3', '2024', 'White');
// console.log(car2);
// console.log(car2.start());
// console.log(car2.stop());

// -----------------------------------------------------------------------------------
// built-in constructor
// let num1 = Number(10);
// let str1 = String('Tee');
// let bool1 = Boolean(true);
// let arr1 = Array('a', 'b', 'c', 1, 2, 3);
// console.log(arr1);

// -----------------------------------------------------------------------------------
// Object.create()
// let person = {
//     greet: function() {
//         console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
//     }
// }
// const person1 = Object.create(person);
// person1.firstName = "Trillest";
// person1.lastName = "World";

// person1.greet();

// const person2 = Object.create(person, {
//     firstName: {value: 'John'},
//     lastName: {value: 'Doe'},
// });
// console.log(person2);
// person2.greet();

// -----------------------------------------------------------------------------------
// Changing the built-in method
// console.log(Array.prototype);

// Array.prototype.pop = function() {
//     return 'pop something';
// }

// const arr = [1,2,3,4,5];
// console.log(arr.pop());
// console.log(arr);

// String.prototype.hello = function() {
//     console.log(this);
//     console.log(this.toUpperCase());
// }
// console.log('hi and bye!'.hello());

// const newArr = ['hello', 'yellow', 'mellow', 'pillow'];
// console.log(newArr);

// -----------------------------------------------------------------------------------
// prototypal inheritance

// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.sound = function() {
//     return 'Animal sound';
// }

// const animal1 = new Animal('frog');
// console.log(animal1);

// function Dog(name, breed) {
//     Animal.call(this, name);
//     this.breed = breed;
// }

// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object
// Dog.prototype = Object.create(Animal.prototype);

// Dog.prototype.bark = function() {
//     return 'Woof! Woof!!';
// }

// const dog1 = new Dog('Molly', 'Boerboel');
// console.log(dog1);
// console.log(dog1.sound());
// console.log(dog1.bark());

// -----------------------------------------------------------------------------------
// Classes
    // Class Declaration
// class Person {
//     constructor(firstName, lastName, age) {
//         // Instance Members
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;

//         this.printUserInfo = function() {
//             return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
//         }
//     }

//     // Prototype Members
//     greet() {
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     }
// }

// const kanyin = new Person('Kanyinsola', 'Abayomi', 21);
// console.log(kanyin);
// console.log(kanyin.printUserInfo());
// console.log(kanyin.greet());


// class Programmer extends Person {
//     constructor(firstName, lastName, age, pl, experience) {
//         super(firstName, lastName, age) // this calls the parent call constructor
        
//         this.pl = pl;
//         this.experience = experience;
//     }
// }
// const tee = new Programmer('Tee', 'Codes', 27, 'Javascript', 1);
// console.log(tee);
// console.log(tee.greet());

// class Hero {
//     constructor(name, level) {
//         this.name = name;
//         this.level = level;
//     }

//     greet() {
//         return `Hi ${this.name}`;
//     }
// }
// const hero = new Hero('New Hero', 100);
// console.log(hero);
// console.log(hero.greet());

// class Mega extends Hero {
//     constructor(name, level, spell) {
//         super(name, level);

//         this.spell = spell;
//     }
// }
// const mega = new Mega('New Mega', 120, 'Fire Hands');
// console.log(mega);
// console.log(mega.greet());
// -----------------------------------------------------------------------------------

// modifiers
// function MyClass(publicField, privateField, protectedField) {
//     // Public Field
//     this.publicField = publicField;

//     // Private Field (closure)
//     const _privateField = privateField;

//     // Protected Field
//     const _protectedField = protectedField;


//     // Public Method
//     this.publicMethod = function() {
//         return `Public Field: ${this.publicField}`;
//     }

//     // Private Method (closure)
//     function _privateMethod() {
//         return `Private Method: ${_privateField}`;
//     }

    // Protected Method (closure)
//     function _protectedMethod() {
//         return `Protected Method: ${_protectedField}`;
//     }

//     // method to access protected method
//     this.accessProtectedMethod = function() {
//         return _protectedMethod();
//     }
// }
// ------------------------------------------------------------------------------------------------

// In Javascript we can achieve encapsulation by using closures to create private members.
// function Counter() {
//     let _count = 0; // private variable

// public method that can access and modify the private variable
//     this.increment = function() {
//         _count++;
//     }

//     this.decrement = function() {
//         _count--;
//     }

//     this.getCount = function() {
//         return _count;
//     }
// }


// Abstract class (providing blueprint for subclasses)
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

// Abstract method to be implemented by subclasses
//     makeSound() {
//         throw new Error('Method (makeSound) must be implemented ')
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//         super(name)
//     }

// implementing the abstract method
//     makeSound() {
//         return 'Woof!';
//     }
// }
// Concrete Subclass
// class Cat extends Animal {
//     constructor(name) {
//         super(name)
//     }

//     makeSound() {
//         return 'Meow!';
//     }
// }

// In the example above, we have an abstract class Animal that contains an abstract method makeSound().
// The makeSound() method is declared in the Animal class but doesnt provide an implementation. it's meant to be implemented by subclasses like Dog and Cat

// The Dog and Cat classes are concrete subclasses that inherit from the Animal class. They implement the abstract method makeSound() with their own specific implementations for making sounds.

// By using abstraction, we define a common interface (makeSound()) that each subclass must implement, while hiding the internal details of how each animal makes its sound. This simplifies the code and allows us to work with animals at a higher level of abstraction, without worrying about the specifics of each animal's sound implementation.
//==================================================================================================

//--------------------------------------------------------------------------------------------------------
// Inheritance
// ES5 code
// function Animal() {
//     this.name = name;
// }

// method shared among all Animal instances
// Animal.prototype.makeSound = function() {
//     return 'Unknown Sound';
// }

// subclass constructor inheriting from Animal
// function Dog() {
//     Animal.call(this, name); // call the superclass constructor
// }

// setup prototype chain for Dog to inherit from Animal
// Dog.prototype = Object.create(Animal.prototype);

// method specific to Dog
// Dog.prototype.makeSound = function() {
//     return 'Woof!';
// }

// Creating instances of the classes
// const genericAnimal = new Animal('Generic Animal');
// const dog = new Dog('molly');

// ES6 code
// superclass
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     makeSound() {
//         return 'Unknown Sound';
//     }
// }

// subclass inheriting from Animal
// class Dog extends Animal {
//     constructor(name) {
//         super(name)
//     }

//     makeSound() {
//         return 'Woof!!!';
//     }
// }
// const dog1 = new Dog('Coco');
// console.log(dog1.name);
// console.log(dog1.makeSound());
//----------------------------------------------------------------------------------------------------------

// In javascript, polymorphism is typically achieved through method overriding, where a subclass provides its own implementation of a method that is already defined in the parent class.

// 13:51:16
// Superclass or Parent Class
// class UserProfile {
//     constructor(username) {
//         this.username = username;
//     }

//     login() {
//         return 'Unknown User'
//     }
// }

// subclass or child class
// class User extends UserProfile {
//     constructor(username, password) {
//         super(username, password)

//         // this.username = username;
//         const _password = password;
//     }

// overriding method from the superclass
//     login() {
//         return `${this.username} logged in`;
//     }
// }

// creating an instance of User
// const profile1 = new User('tee4real', '######');
// console.log(profile1); // tee4real
// console.log(profile1._password); // undefined (due to being private field)
// console.log(profile1.login()); // tee4real logged in


// In the example above about polymorhism, we are essentially inheriting the properties and methods from the superclass (parent class) and then overriding the method.

// Following the example above, we started by creating a UserProfile which is the superclass or parent class, then we created another class User which is the subclass or child class to UserProfile. The subclass User then extends UserProfile which enables it to inherit the properties and methods, in this particular case, the property was username and the method was login().

// The initial login message is a string of 'Unknown User' but after we created the User subclass, we overrode the message to the name of any user instance we create through using User class.

// Calling the method login() after creating the instance of a new User.
// The console logs a string of the `${username} logged in`
//==========================================================================================================

//----------------------------------------------------------------------------------------------------------
// 14:03:35 Synchronous and Asynchronous

// Synchronous code
// function myFunc() {
//     console.log('Inside function')
// }

// console.log('Start...');
// myFunc();
// console.log('End!');


// 14:05:13
// Asynchronous code
// console.log('Start ...');

// setTimeout(() => {
//     console.log('Inside setTimeOut');
// }, 2000);

// console.log('End.')

//----------------------------------------------------------------------------------------------------------
// Challenge - using callback (callbackhell) - not recommended for long list of async code
// console.log('Start...');

// function getUserDataFromDB(name, callback) {
//     setTimeout(() => {
//         console.log('Getting user name');
//         callback(name);
//     }, 5000);
// }

// function getUserHobbies(name, callback) {
//     setTimeout(() => {
//         console.log(`Getting ${name} hobbies`);
//         callback(['fuck', 'chop', 'work', 'read', 'smoke']) // 
//     }, 2000);
// }

// getUserDataFromDB('Tee', (data) => {
//     console.log(`Data: ${data}`);
//     getUserHobbies(data, (hobby) => {
//         console.log(hobby);
//     })
// });

// console.log('End!!!');

//----------------------------------------------------------------------------------------------------------
// new Promise

// function checkNumber(number) {
//     return new Promise((resolve, reject) => {
//         // if (name == 'key') {
//         //     resolve('named checked = "key"');
//         // } else reject('NOT name!');
//         if (number % 2 === 0) resolve(`${number} is an even number`);
//         else reject(`${number} is an odd number`);
//     })
// }
// checkNumber(1).then(resultFromCheckNum => {
//     console.log(`Success: ${resultFromCheckNum}`);
// }).catch(failedResultFromCheckNum => {
//     console.error(`Failed: ${failedResultFromCheckNum}`);
// })

//==========================================================================================================
// callbackhell refactored
// function callbackhell(callback) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             const data = 'Inside callbackhell function';
//             console.log(data);
//             resolve(data);
//         }, 2000);
//     })
// }

// function firstFunc(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const processedData1 = `${data} - processed data 1`;
//             console.log('Inside firstFunc function');
//             resolve(processedData1);
//         } , 2000)
//     })
// }

// function secondFunc(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const processedData2 = `${data} - processed data 2`;
//             console.log(processedData2);
//             resolve(processedData2);
//         }, 2000)
//     })
// }

// callbackhell()
// .then(data => firstFunc(data))
// .then(processedData1 => secondFunc(processedData1))
// .then(processedData2 => console.log(`Final result of all functions with promises ${processedData2}`))
// .catch(error => console.error(error));

// callbackhell refactored usig new Promise
// console.log('start');

// function getUserDataFromDB(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Valid user: ${name}`);
//             resolve(name);
//         }, 2000)
//     })
// }

// function getUserHobbies() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Getting user hobbies...');
//             resolve(['eat', 'sleep']);
//         }, 3000)
//     }) 
// }

// getUserDataFromDB('Trilly')
// .then(name => getUserHobbies(name))
// .then(hobbies => console.log(hobbies))
// .catch(err => console.log(err));

// console.log('end');
//==========================================================================================================

// Async/Await
// function fetchDataFromServer() {
//     return new Promise((resolve, reject) => {
//         console.log('Retrieving...');

//         setTimeout(() => {
//             resolve('User data retrieved from the server');
//         }, 5000)
//     })
// }

// async function getUserData() {
//     try {

//         const data = await fetchDataFromServer();
//         console.log(data);
//         console.log('Remaining task can be executed here.')
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// getUserData();

//=====================================================

// function callbackHell() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = 'Inside callbackHell function';
//             console.log(data);
//             resolve(data);
//         }, 3000);
//     })
// }

// function firstFunc(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const processedData = `${data} - processed first`;
//             console.log('Inside firstFunc function');
//             resolve(processedData);
//         }, 2000);
//     })
// }

// function secondFunc(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const processedData = `${data} - processed second`;
//             console.log('Inside secondFunc function');
//             resolve(processedData);
//         }, 2000)
//     })
// }

// async function processDataWithAsyncAwait() {
//     try {

//         const data = await callbackHell();
//         const processedData1 = await firstFunc(data);
//         const processedData2 = await secondFunc(processedData1);
//         console.log(`Final result of all functions using async/await: ${processedData2}`);
        
//     } catch (error) {
//         console.log(error);   
//     }
// }
// processDataWithAsyncAwait();

//==========================================================================================================

// callbackHell refactored to async/await
// console.log('start');

// function getUserDataFromDB(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Valid user: ${name}`);

//             resolve(name);
//         }, 2000)
//     })
// }

// function  getHobbies(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Getting ${name} hobbies`);
//             resolve(['eat', 'sleep']);
//         }, 4000)
//     })
// }

// async function showUserHobbies() {

//     try {

//         const username = await getUserDataFromDB('Trilly');
//         const hobbies = await getHobbies(username);
//         console.log(hobbies);

//     } catch (error) {
//         console.log(`Error: ${error}`);
//     }
    
// }

// showUserHobbies();

// console.log('end.');

//==========================================================================================================

//----------------------------------------------------------------------------------------------------------
// fetch API promise only rejects when we have network error (not in other cases)
// console.log(fetch('../notes.txt'));
// using Promise
// fetch('../notes.txt')
//     .then(res => res.text())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// using async/await
// const btn = document.querySelector('.btn');
// const postsDiv = document.querySelector('.all-posts');

// const API = 'https://jsonplaceholder.typicode.com/posts/1';

// btn.addEventListener('click', makeRequest);

// function getData(apiLink) {
//     fetch(apiLink);
// }



// async function fetchFileContent() {
//     try {
        
//         // fetching from an internal file using the relative path
//         // const res = await fetch('../notes.txt');
//         // const res = await fetch('data.json');

//         // fetching from an external API using absolute path
//         const res = await getData(API);

//         if (!res.ok) throw new Error(res.statusText);

//         // const data = await res.text(); // .text() - converts to a text format
//         const data = await res.json(); // .json() - converts to a json object
//         // document.querySelector('.textResult').innerText = `${data}`;
//         // document.querySelector('.textResult').innerText = `My name is ${data.name} and i am ${data.age} years old.`;

    
//         console.log(data);

//     } catch (error) {
//         throw new Error(error);
//     }
// }
// fetchFileContent();

// function makeRequest() {
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//         .then(res => {
//             if (!res.ok) new Error(res.statusText);

//             const data = res.json();
//         })
//         .then(data => console.log(data))
//         .catch(error = console.error(error.message));
// }

//----------------------------------------------------------------------------------------------------------
// try and catch
// const validJson = '{"name": "Trilly", "age": 31, "profession": "programmer"}';
// const invalidJson = '{"name": "Trilly", "age": 31, "profession": "programmer",}';

// function parseJson(jsonString) {
//     try {
        
//         return JSON.parse(jsonString);

//     } catch (error) {
//         console.error(`Error occured: ${error.message}`);
//     }
// }

// const result1 = parseJson(validJson);
// const result2 = parseJson(invalidJson);
// console.log(result1);
// console.log(result2);