const taskListDiv = document.querySelector('.task-list');

document.querySelector('.btn-add').addEventListener('click', ()=> {
    taskListDiv.innerHTML = "<div class=\"task-title\">Goal 1</div><input type=\"checkbox\" name=\"tast-complete\" id=\"task-complete-checkbox\"></div>";
})