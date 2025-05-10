// Mobile Menu Toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Mobile Premium Content Toggle
document.getElementById('mobile-premium-toggle').addEventListener('click', function() {
    const premiumMenu = document.getElementById('mobile-premium-menu');
    const arrow = this.querySelector('svg');
    premiumMenu.classList.toggle('hidden');
    arrow.classList.toggle('rotate-180');
});

// Countdown Timer
function startCountdown(duration, elementId) {
    let timer = duration;
    const timerElement = document.getElementById('timer');
    const contentElement = document.getElementById(elementId);

    const countdown = setInterval(() => {
        timer--;
        timerElement.textContent = `${timer} seconds remaining`;

        if (timer <= 0) {
            clearInterval(countdown);
            timerElement.classList.add('hidden');
            contentElement.classList.remove('hidden');
        }
    }, 1000);
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('mobile-menu-button');
    
    if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.add('hidden');
    }
});