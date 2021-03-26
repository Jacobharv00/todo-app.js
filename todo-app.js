'use strict'

const todos = getSavedTodos() 

const filters = {
    searchText: '',
    hideCompletd: false
}

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})


document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompletd = e.target.checked 
    renderTodos(todos, filters)
})


 
































// Saved Notes:

//const paragraphs = document.querySelectorAll('p')

//paragraphs.forEach(function (paragraph) {
  // if (paragraph.textContent.includes('the')) {
    //   paragraph.remove()
   // }
// })

// Listen for new todo creation
//document.querySelector('#add-todo').addEventListener('click', function (e) {
  //  console.log('Add a new todo!')
    // e.target.textContent = 'Add a new todo!' will change what the button says after it was clicked
// })

// Listen for todo text change
// document.querySelector('#new-todo').addEventListener('input', function (e) {
   // console.log(e.target.value)
// })