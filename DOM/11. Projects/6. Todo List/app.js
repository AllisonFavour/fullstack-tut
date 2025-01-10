let form = document.querySelector('form'); // Selects the form element
let input = document.querySelector('input'); // Selects the input field for user input
let todos = document.querySelector('.todos'); // Selects the container for displaying todos

// Load existing todos from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || []; // Get stored todos or an empty array if none exist
    storedTodos.forEach(todoText => {
        todos.appendChild(getTodo(todoText)); // Add each stored todo to the DOM
        console.log(storedTodos);
    });
});

function getTodo(value) {
    let todo = document.createElement('div'); // Create a container for the todo
    let textEl = document.createElement('span'); // Create an element to hold the todo text

    textEl.innerHTML = value; // Set the text content of the todo
    todo.appendChild(textEl); // Append the text element to the todo container

    let closeEl = document.createElement('span'); // Create a delete button
    closeEl.innerHTML = '&times;'; // Add a multiplication sign for the delete button
    closeEl.classList.add('delete'); // Add a class for styling purposes

    // Add an event listener to delete the todo
    closeEl.addEventListener('click', (e) => {
        console.log(todo)
        todos.removeChild(todo); // Remove the todo from the DOM
        saveTodos(); // Save updated todos to localStorage
    });

    todo.appendChild(closeEl); // Append the delete button to the todo container
    todo.classList.add('todo'); // Add a class for styling purposes
    console.log(todo);

    return todo; // Return the created todo element
}

// Add an event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    let value = input.value; // Get the current value of the input field

    if (!value) return; // Do nothing if the input is empty

    todos.appendChild(getTodo(value)); // Create and append the todo to the container
    saveTodos(); // Save the updated list of todos to localStorage
    input.value = ''; // Clear the input field
});

// Save the current todos to localStorage
function saveTodos() {
    const todoTexts = Array.from(todos.querySelectorAll('.todo span:first-child')) // Get all todo text elements
        .map(span => span.innerHTML); // Extract the text content of each todo
    localStorage.setItem('todos', JSON.stringify(todoTexts)); // Store the todos as a JSON string
}











// let form = document.querySelector('form');
// let input = document.querySelector('input');
// let todos = document.querySelector('.todos');

// function getTodo(value) {
//     let todo = document.createElement('div');
//     let textEl = document.createElement('span');

//     textEl.innerHTML = value;
//     todo.appendChild(textEl);


//     let closeEl = document.createElement('span');
//     closeEl.innerHTML = '&times;';
//     closeEl.classList.add('delete');


//     closeEl.addEventListener('click', () => {
//         todos.removeChild(todo);
//     });


//     todo.appendChild(closeEl);
//     todo.classList.add('todo');

//     return todo;
// }


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let value = input.value;

//     if(!value) return;

//     todos.appendChild(getTodo(value));
//     input.value = '';
// });