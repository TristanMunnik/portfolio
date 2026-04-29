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

const projectsClicked = document.querySelectorAll('.clickable-project');
projectsClicked.forEach(project => {
    project.addEventListener('click' , () => {
        const url = project.getAttribute('data-url');
        window.open(url, '_blank');
    });
});
