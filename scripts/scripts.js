// document.addEventListener('DOMContentLoaded', function() {
//     // Smooth scrolling for navigation links
//     const links = document.querySelectorAll('nav ul li a');
    
//     links.forEach(link => {
//       link.addEventListener('click', function(e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         target.scrollIntoView({ behavior: 'smooth' });
//       });
//     });
//   });
  
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-60px"; // Adjust this value based on your navbar height
  }
  prevScrollpos = currentScrollPos;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    if (target) {
      window.scrollTo({
        top: target.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  });
});


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  


// let prevScrollpos = window.pageYOffset;

// // New code
// let goToTopBtn = document.getElementById("goToTopBtn");

// window.onscroll = function() {
//   let currentScrollPos = window.pageYOffset;
  
//   // Existing navbar hide/show logic
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector(".navbar").style.top = "0";
//   } else {
//     document.querySelector(".navbar").style.top = "-60px"; // Adjust this value based on your navbar height
//   }
//   prevScrollpos = currentScrollPos;

//   // New go-to-top button logic
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     goToTopBtn.style.display = "block";
//   } else {
//     goToTopBtn.style.display = "none";
//   }
// };

// // New function for scrolling to top
// goToTopBtn.onclick = function() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// };


document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      
      fetch('your-server-endpoint', {
          method: 'POST',
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          alert('Message sent successfully!');
          form.reset();
      })
      .catch(error => {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
      });
  });
});