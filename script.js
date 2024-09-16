document.addEventListener("DOMContentLoaded", function () {
    const payNowButton = document.getElementById('payNowButton');
    const paymentSuccessMessage = document.getElementById('paymentSuccessMessage');

    // Handle Pay Now Button Click
    payNowButton.addEventListener('click', function () {
        // Simulate successful payment
        paymentSuccessMessage.style.display = "block";
        payNowButton.style.display = "none";  // Hide Pay Now button after payment
    });
});
