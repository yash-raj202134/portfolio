document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var formData = new FormData(this);
    
    fetch('process_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('formStatus').innerHTML = data.message;
        if (data.success) {
            document.getElementById('contact-form').reset();
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('formStatus').innerHTML = 'An error occurred. Please try again.';
    });
});