const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log("Registration successful!");

    alert("You have successfully registered for the workshop!");

    form.reset();
});
