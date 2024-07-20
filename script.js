document.addEventListener('DOMContentLoaded', (event) => {
    // Form submission handler
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validate form inputs
        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate form submission
        console.log('Form submitted successfully!');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Clear form fields
        document.getElementById('contactForm').reset();
        alert('Thank you for your message, ' + name + '!');
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
