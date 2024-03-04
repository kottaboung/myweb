// Dynamically adjust the height of the full-screen image section on window resize
window.addEventListener('resize', function() {
    document.querySelector('.full-screen').style.height = window.innerHeight + 'px';
});

// Initialize the height of the full-screen image section on page load
window.addEventListener('load', function() {
    document.querySelector('.full-screen').style.height = window.innerHeight + 'px';
});

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('fixed-top');
    } else {
        navbar.classList.remove('fixed-top');
    }
});

window.addEventListener('scroll', toggleNavbar);

// Add event listener for mousemove event to show navbar on hover
window.addEventListener('mousemove', function() {
    var navbar = document.getElementById('navbar');
    navbar.classList.add('show');
});

// Add event listener for mouseout event to hide navbar when not hovered over
window.addEventListener('mouseout', function() {
    var navbar = document.getElementById('navbar');
    navbar.classList.remove('show');
});

