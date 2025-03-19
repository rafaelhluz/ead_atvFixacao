// script.js
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário salvo com sucesso!');
});

document.getElementById('user-form').addEventListener('reset', function(event) {
    alert('Formulário limpo!');
});