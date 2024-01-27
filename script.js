document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    fetch('https://script.google.com/macros/s/AKfycbwiib6APWW5KnQamTJas7mbqefzYcr3sNSQYiGiy6DCIDCKD1lwbYdQHhn2K16pGxuWjg/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Form submitted successfully');
            // You can redirect the user or do any other action here
            document.getElementById('myForm').reset();
        } else {
            alert('Error submitting form');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting form');
    });
});