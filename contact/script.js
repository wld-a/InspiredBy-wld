// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    // You can add form validation and AJAX submission here
    alert('Message sent!'); // Example: Display an alert for demonstration
    // Clear the form fields after submission
    document.getElementById('contactForm').reset();
}

// Add event listener to the form submit button
document.getElementById('contactForm').addEventListener('submit', handleSubmit);
