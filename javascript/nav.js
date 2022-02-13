// The JavaScript components file responsible for navigation and the header

// Variables
const menuBtn = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navBtn = document.querySelectorAll('.nav-btn');
const dropdownLinks = document.querySelectorAll('.dropdown-content');
const mainBtns = document.querySelectorAll('.primary-anchor');
const mainHeader = document.querySelector('.main-header');
const mainHeaderTxt = document.querySelector('.header-txt');
const logoImg = document.querySelector('.header-logo');

// Main header
mainHeader.addEventListener('click', () => {
    mainHeaderTxt.classList.add('animate__zoomIn');
    logoImg.classList.add('animate__zoomIn');
    setTimeout(() => {
        mainHeaderTxt.classList.remove('animate__zoomIn');
        logoImg.classList.remove('animate__zoomIn');
    }, 900);
});

// Mobile navigation
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.remove('bg-color-2');
        menuBtn.classList.add('bg-color-1', 'open');
        navLinks.classList.remove('invisible', 'hidden', 'animate__fadeOutRight');
        navLinks.classList.add('animate__fadeInRight');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('bg-color-1', 'open');
        menuBtn.classList.add('bg-color-2');
        navLinks.classList.remove('animate__fadeInRight');
        navLinks.classList.add('animate__fadeOutRight');
        setTimeout(function () {
            navLinks.classList.add('hidden', 'invisible');
        }, 500);
        menuOpen = false;
    }
});

// Navigation for medium to large screens
function showNavLinks() {
    if (window.innerWidth >= 768) {
        navLinks.classList.remove('invisible', 'hidden');

    } else {
        navLinks.classList.add('invisible', 'hidden');
    }
};

showNavLinks();