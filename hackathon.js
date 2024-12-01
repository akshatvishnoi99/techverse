const form = document.querySelector('form');
const registerButton = document.querySelector('button[type="submit"]');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    console.log("Registration successful!");
    
    alert("Registration Successful!");

    form.reset();
});
