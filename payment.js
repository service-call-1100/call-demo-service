var options = {
    "key": "rzp_test_0IHy2cpKUUh2pl", // Enter the Key ID generated from Razorpay Dashboard
    "amount": 19900, // Amount is in paise. 14900 paise = ₹149
    "currency": "INR",
    "name": "Demo Service",
    "description": "Pay ₹199 for Demo Access",
    "image": "https://example.com/your_logo", // Optional: Add your business logo here
    "handler": function (response){
        // This function executes on successful payment
        alert("Payment successful: " + response.razorpay_payment_id);
        
        // Hide payment button
        document.getElementById('rzp-button1').style.display = 'none';
        
        // Show WhatsApp and Telegram Links
        document.getElementById('linkBox').style.display = 'block';
    },
    "prefill": {
        "name": "Customer Name", // You can autofill the customer name
        "email": "customer.email@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Customer Address"
    },
    "theme": {
        "color": "#3399cc"
    }
};

// Bind Razorpay payment button
var rzp1 = new Razorpay(options);
document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}