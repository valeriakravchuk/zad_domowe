function handleEditButtonClick(event) {
    const task = event.target.closest('div');
    let id = task.querySelector(".task_id").textContent;
    let name = task.querySelector(".task_name").innerText;
    let deadline = task.querySelector(".task_deadline").innerText;
    console.log(deadline);

    let edit_id = document.getElementById("edit_taskId");
    let edit_name = document.getElementById("edit_name");
    let edit_deadline = document.getElementById('edit_deadline');

    let deadlineParts = deadline.split(/[\s,.:]+/); // Разделение строки времени
    let deadlineDate = new Date(deadlineParts[2], deadlineParts[1] - 1, deadlineParts[0], deadlineParts[3], deadlineParts[4], deadlineParts[5]);

    let formattedDeadline = deadlineDate.toISOString().slice(0, 16);

    edit_id.textContent = id;
    edit_name.value = name;
    edit_deadline.value = formattedDeadline;

    let bottomElement = document.getElementById('add_task_form_container');

    bottomElement.scrollIntoView({ behavior: 'smooth', block: 'end' });

    let targetElement = document.getElementById("edit_task_form_container")

    targetElement.classList.add('highlight-animation');

    setTimeout(function() {
        targetElement.classList.remove('highlight-animation');
    }, 500);
}
