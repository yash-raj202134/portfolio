const backgrounds = [
    'images/home-background1.jpg',
    'images/home-background2.jpg',
    'images/home-background3.jpg',
    'images/home-background4.jpg',
    'images/home-background5.jpg'
];

let currentIndex = 0;
const home = document.getElementById('home');

function changeBackground() {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    const nextImage = new Image();
    nextImage.onload = function() {
        home.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
    };
    nextImage.src = backgrounds[currentIndex];
}

// Preload images
backgrounds.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Change background every 10 seconds
setInterval(changeBackground, 10000);