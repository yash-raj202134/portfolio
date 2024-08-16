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

window.onload = function() {
  // Check if the redirect flag is set in session storage
  if (!sessionStorage.getItem('redirected')) {
      // If not redirected yet, set the flag and redirect to x.html
      sessionStorage.setItem('redirected', 'true');
      window.location.href = "../index.html";
  } else {
      // If already redirected, clear the flag for future reloads
      sessionStorage.removeItem('redirected');
  }
};

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
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




document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const animatedElements = document.querySelectorAll('.animate-text, .animate-image');

  animatedElements.forEach(el => {
    el.style.opacity = '0';
  });

  setTimeout(() => {
    animatedElements.forEach(el => {
      el.style.opacity = '1';
    });
  }, 100);


});

