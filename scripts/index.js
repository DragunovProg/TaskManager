const goalText = document.querySelector('.goal-text');
const taskList = document.querySelector('.task-list');



document.querySelector('.btn-add').addEventListener('click', ()=> {
    if(goalText.value != '') {
        console.log(goalText.value);
        const taskElement = document.createElement('div');
        const taskTitle = document.createElement('div');
        const completeCheckbox = document.createElement('input');
        const deleteButton = document.createElement('button');



        taskElement.classList.add('task-element');
        taskTitle.classList.add('task-title')
        
        completeCheckbox.id = 'checkbox-complete';
        completeCheckbox.type = 'checkbox';
        
        
        deleteButton.classList.add('btn-del');
        deleteButton.innerText = "Delete"
        

        taskElement.appendChild(taskTitle);
        taskElement.appendChild(completeCheckbox);
        taskElement.appendChild(deleteButton);

        deleteButton.onclick = (event)=> {
            event.currentTarget.closest('.task-element').remove();
        }

        completeCheckbox.onchange = (event)=> {
            if(event.currentTarget.checked) {
                taskTitle.style.textDecoration = 'line-through';
            } else {
                taskTitle.style.textDecoration = 'none';

            }
        }

        taskTitle.innerText = goalText.value;
        taskList.appendChild(taskElement);
    }
})
