// Image Slider JavaScript
let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);

// MPG Calculator JavaScript
function calculateMPG() {
    const miles = parseFloat(document.getElementById('miles').value);
    const gallons = parseFloat(document.getElementById('gallons').value);

    if (!isNaN(miles) && !isNaN(gallons) && gallons !== 0) {
        const mpg = (miles / gallons).toFixed(2);
        document.getElementById('result').textContent = `Your MPG is ${mpg}`;
    } else {
        document.getElementById('result').textContent = "Please enter valid values for miles and gallons.";
    }
}
