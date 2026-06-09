const hamburger = document.getElementById('hamburger');
const navbarLinks = document.getElementById('navbarLinks');
const navItems = document.querySelectorAll('.nav-link, .btn-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('ham-active');
    navbarLinks.classList.toggle('ham-active');
});

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('ham-active');
        navbarLinks.classList.remove('ham-active');
    });
});