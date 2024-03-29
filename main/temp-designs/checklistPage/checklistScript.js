const delay = ms => new Promise(res => setTimeout(res, ms));

const suggestionsContainer = document.querySelector('[suggestions]')
const suggestionTemplate = document.getElementById('suggestion-template')

const listDisplayContainer = document.querySelector('[list-display-container]')
const tasksContainer = document.querySelector('[data-tasks]')
const newTaskForm = document.querySelector('[data-new-task-form]')
const newTaskInput = document.querySelector('[data-new-task-input]')
const taskTemplate = document.getElementById('task-template')

const LOCAL_STORAGE_VISIBLE_PAGE = 'section-1'
const LOCAL_STORAGE_LIST_CREATION_KEY = 'task.list'
let visiblePage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_VISIBLE_PAGE)) || 'section-1'
let list = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_CREATION_KEY)) || createList('To-Do')
let suggestions_list = createList('To-Do')
let task_names = ['Exercise', 'Meditate', 'Eat Healthier', 'Leetcode']

/* ========== For Page Switching ============ */
document.getElementById('section-1-next-button').addEventListener("click", function(){(toggle_visibility('section-2', visiblePage))})
document.getElementById('section-2-prev-button').addEventListener("click", function(){(toggle_visibility('section-1', visiblePage))})
document.getElementById('section-2-next-button').addEventListener("click", function(){(toggle_visibility('section-3', visiblePage))})
document.getElementById('section-3-prev-button').addEventListener("click", function(){(toggle_visibility('section-2', visiblePage))})
document.getElementById('section-3-finish-button').addEventListener("click", function(){})

function toggle_visibility(id, oldPage) {
    var old_e = document.getElementById(oldPage);
    var new_e = document.getElementById(id);
    if(old_e) {
        console.log('old', old_e, 'none');
        old_e.style.display = 'none';
    }
    console.log('new', new_e, 'block');
    new_e.style.display = 'flex';   
    visiblePage = id; 
    save()
}

/* ========== For List Functionality ============ */
newTaskForm.addEventListener('submit', e => {
    e.preventDefault()
    const taskName = newTaskInput.value 
    if (taskName == null || taskName === '') return
    const task = createTask(taskName)
    newTaskInput.value = null
    list.tasks.push(task)
    saveAndRender()
})

tasksContainer.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'input'){
        const selectedTask = list.tasks.find(task => task.id === e.target.id)
        selectedTask.complete = e.target.checked
        clearTask(selectedTask)
    }
})

suggestionsContainer.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'input'){
        const selectedTask = suggestions_list.tasks.find(task => task.id === e.target.id)
        selectedTask.complete = e.target.checked
    }
})

function clearTask(){
    const selectedList = list //.find(list=> list.id === selectedListId)
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
    saveAndRender()
}

function createList(name){
    return {id: 1, name: name, tasks: []}       
}

function createSuggestions(){
    console.log(task_names)
    for (element in task_names){
        console.log(task_names[element])
        const new_task = createTask(task_names[element])
        console.log(new_task)
        suggestions_list.tasks.push(new_task)
    }       
    console.log(suggestions_list)
    saveAndRender()
}

function createTask(name){
    return {id: Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36), name: name, complete: false}     
}


/* ========== For Saving/Rendering ============ */

function save(){
    localStorage.setItem(LOCAL_STORAGE_VISIBLE_PAGE, JSON.stringify(visiblePage))
    localStorage.setItem(LOCAL_STORAGE_LIST_CREATION_KEY, JSON.stringify(list))
}

function renderTasks(list){
    list.tasks.forEach(task =>{
        const taskElement = document.importNode(taskTemplate.content, true)
        const checkbox = taskElement.querySelector('input')
        checkbox.id = task.id
        checkbox.checked = task.complete
        const label = taskElement.querySelector('label')
        label.htmlFor = task.id
        label.append(task.name)
        tasksContainer.appendChild(taskElement)
    })
}

function renderSuggestions(list){
    list.tasks.forEach(task =>{
        const taskElement = document.importNode(suggestionTemplate.content, true)
        const checkbox = taskElement.querySelector('input')
        checkbox.id = task.id
        checkbox.checked = task.complete
        const label = taskElement.querySelector('label')
        label.htmlFor = task.id
        label.append(task.name)
        suggestionsContainer.appendChild(taskElement)
    })
}

function render(){
    clearElement(tasksContainer)
    clearElement(suggestionsContainer)
    renderTasks(list)
    renderSuggestions(suggestions_list)
}

function saveAndRender(){
    save()
    render()
}

function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

toggle_visibility(visiblePage, 'section-1');
render()
createSuggestions()

