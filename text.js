document.addEventListener('DOMContentLoaded',(event) => {

    const form = document.getElementById('playerName');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const userInput = document.getElementById('userInput').value;

        alert('Hello, ' + userInput);
        window.location.href = `fight.html?input=${encodeURIComponent(userInput)}`;
})});


