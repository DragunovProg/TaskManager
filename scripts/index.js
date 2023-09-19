const goalText = document.querySelector('.goal-text');
const taskList = document.querySelector('.task-list');
const buttonAdd = document.querySelector('.btn-add');
const completeCheckboxes = document.querySelectorAll('.checkbox-complete');
const deleteButtons = document.querySelectorAll('btn-del');

buttonAdd.onclick = addTask;



function addTask() {
    if(goalText.value != '') {
        const taskElement = document.createElement('div');
        const taskTitle = document.createElement('div');
        const completeCheckbox = document.createElement('input');
        const deleteButton = document.createElement('button');

        taskElement.classList.add('task-element');
        taskTitle.classList.add('task-title')
        
        completeCheckbox.classList.add('checkbox-complete');
        completeCheckbox.type = 'checkbox';

        completeCheckbox.onchange = (event) => {
            if(event.currentTarget.checked) {
                taskTitle.style.textDecoration = 'line-through';
            } else {
                taskTitle.style.textDecoration = 'none';
        }
        };

        deleteButton.classList.add('btn-del');
        deleteButton.innerText = "Delete"

        deleteButton.onclick = (event)=> {
            event.currentTarget.closest('.task-element').remove();
        }

        taskElement.appendChild(taskTitle);
        taskElement.appendChild(completeCheckbox);
        taskElement.appendChild(deleteButton);

        taskTitle.innerText = goalText.value;
        taskList.appendChild(taskElement);
        goalText.value = '';
    }
}



