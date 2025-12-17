const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log(`Navigated to ${link.textContent}`);
    })
})

const backToTopButton = document.getElementById('back-to-top');

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

const toggleBackToTopButton = () => {
    if(window.innerWidth > 1100) {
        backToTopButton.style.display = 'none';
    } else {
        backToTopButton.style.display = 'block';
    }
}

window.addEventListener('resize', toggleBackToTopButton);
window.addEventListener('load', toggleBackToTopButton);