
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