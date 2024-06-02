document.getElementById('add_task_form').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);

    const deadline = formData.get('deadline');
    const deadlineParts = deadline.split("T")
    const deadlineToSend = deadlineParts[0]+' '+deadlineParts[1]+':00'

    const body = {
        name: formData.get('name'),
        deadline: deadlineToSend,
    };
    fetch('http://localhost:3000/task/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => response.text().then(text => {
        alert(text);
        location.reload()
    }))
});