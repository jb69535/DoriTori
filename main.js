'use strict';

/* Navbar
Scrolling acts */
// Make navbar trasparent when it is on the top.
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener(
    'scroll', () => {
        console.log(window.scrollY)
        console.log('navbarHeight: ${navbarHeight}');
        if (window.scrollY > navbarHeight) {
            navbar.classList.add('navbar--dark');
        } else {
            navbar.classList.remove('navbar--dark');
        }
    });

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
});
/* Ads
Makes Ads move automatically every 5s */ 
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4) {
        counter = 1;
    }
}, 5000); 