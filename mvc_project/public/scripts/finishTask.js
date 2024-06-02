function finishButtonClick(event) {
    const taskDiv = event.target.closest('div');
    const task_id = taskDiv.querySelector("p:first-child").textContent;

    const body = {
        task_id: Number(task_id)
    };
    fetch('http://localhost:3000/task/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => response.text().then(text => {
        alert(text);
        location.reload()
    }))
}