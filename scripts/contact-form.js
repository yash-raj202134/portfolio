document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
  
    form.addEventListener('submit', function(e) {
        e.preventDefault();
      
        if (validateForm()) {
            var formData = new FormData(this);
    
            fetch('process_form.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                showFormStatus(data.success ? 'success' : 'error', data.message);
                if (data.success) {
                    form.reset();
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showFormStatus('error', 'An error occurred. Please try again.');
            });
        }
    });
  
    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
  
        if (name === '' || email === '' || message === '') {
            showFormStatus('error', 'Please fill in all fields.');
            return false;
        }
  
        if (!isValidEmail(email)) {
            showFormStatus('error', 'Please enter a valid email address.');
            return false;
        }
  
        return true;
    }
  
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
  
    function showFormStatus(type, message) {
        formStatus.textContent = message;
        formStatus.className = type === 'success' ? 'alert alert-success' : 'alert alert-danger';
        formStatus.style.display = 'block';
  
        setTimeout(function() {
            formStatus.style.display = 'none';
        }, 3000);
    }
});


//JavaScript for Modal and Form Handling 
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Perform the form submission using fetch
    fetch(this.action, {
      method: this.method,
      body: new FormData(this),
    }).then(response => {
      if (response.ok) {
        // Reset the form after successful submission
        this.reset();
        showAlert('Message delivered successfully! \nWill contact you shortly.');
      } else {
        showAlert('There was an issue sending the message.');
      }
    }).catch(error => {
      console.error('Error:', error);
      showAlert('There was an error sending the message.');
    });
  });

  function showAlert(message) {
    document.getElementById('alertMessage').innerText = message;
    document.getElementById('alertModal').style.display = 'block';
  }

  // Close the modal when the close button or the span (X) is clicked
  document.querySelector('.custom-close').addEventListener('click', function() {
    document.getElementById('alertModal').style.display = 'none';
  });

  document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('alertModal').style.display = 'none';
  });

  // Close the modal when the user clicks anywhere outside of the modal
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('alertModal')) {
      document.getElementById('alertModal').style.display = 'none';
    }
  });