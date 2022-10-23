const completedTasks = document.querySelectorAll('.task-list-container input')
for(let completedTask of completedTasks)
{
    completedTask.addEventListener('change', function(){
        const element = document.getElementById(this.value).children[1];
        if(this.checked)
        {
            element.classList.add("task-completed");
        }
        else
        {
            element.classList.remove("task-completed");
        }
    })
}