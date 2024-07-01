document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    const body = document.body;
    const container = document.querySelector('.container');
    const todoItems = document.querySelectorAll('.todos li');
    const button = document.getElementById('toggle-dark-mode');

    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    todoItems.forEach(function (li) {
        li.classList.toggle('dark-mode');
    });

    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Light Mode';
    } else {
        button.textContent = 'Dark Mode';
    }
});