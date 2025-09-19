document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navBar = document.querySelector('.nav-bar');
    const navLinks = document.querySelectorAll('.nav-bar ul li a');

    // Toggle menu saat hamburger di-klik
    hamburger.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });

    // Tutup menu saat link di-klik
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navBar.classList.contains('active')) {
                navBar.classList.remove('active');
            }
        });
    });
});