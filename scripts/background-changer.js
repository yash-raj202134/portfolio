const backgrounds = [
    'images/home-background1.jpg',
    'images/home-background2.jpg',
    'images/home-background3.jpg',
    'images/home-background4.jpg',
    'images/home-background5.jpg'
];

let currentIndex = 0;

function changeBackground() {
    const home = document.getElementById('home');
    currentIndex = (currentIndex + 1) % backgrounds.length;
    home.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
}

// Change background every 30 seconds
setInterval(changeBackground, 30000);

// Preload images
backgrounds.forEach(src => {
    const img = new Image();
    img.src = src;
});