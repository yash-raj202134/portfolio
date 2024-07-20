document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (validateForm()) {
        // Simulate form submission (replace with actual form submission logic)
        setTimeout(function() {
          showFormStatus('success', 'Thank you! Your message has been sent.');
          form.reset();
        }, 1000);
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