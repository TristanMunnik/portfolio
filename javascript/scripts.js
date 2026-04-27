const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const backToTopButton = document.getElementById('return-to-top');

const toggleBackToTopButton = () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

window.addEventListener('scroll', toggleBackToTopButton);
window.addEventListener('load', toggleBackToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const messageGenerator = document.querySelector('.message-generator');
if (messageGenerator) {
    messageGenerator.addEventListener('click', () => {
        window.open('https://github.com/TristanMunnik/MessageGenerator', '_blank');
    });
}
