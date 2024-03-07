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


window.addEventListener('mouseout', function() {
    var navbar = document.getElementById('navbar');
    navbar.classList.remove('show');
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

