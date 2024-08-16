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

