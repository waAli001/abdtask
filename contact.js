// Add event listener to form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show confirmation message
    const confirmationMessage = document.getElementById("confirmation");
    confirmationMessage.textContent = "Your message has been sent! Thank you for contacting us.";
    
    // Reset and display the confirmation message
    confirmationMessage.style.display = "block";
    confirmationMessage.style.opacity = "0"; // Start hidden
    confirmationMessage.style.transform = "translateY(-20px)"; // Start above
    
    // Trigger animation
    setTimeout(() => {
        confirmationMessage.style.opacity = "1"; // Fade in
        confirmationMessage.style.transform = "translateY(0)"; // Move to original position
    }, 0);
    
    // Reset the form
    this.reset();
});
