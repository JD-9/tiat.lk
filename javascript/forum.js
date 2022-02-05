// JavaScript of the forum

// Image slider
let slideIndexOfForumMain = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName('my-slides');
    let dots = document.getElementsByClassName('dot');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndexOfForumMain++;
    if (slideIndexOfForumMain > slides.length) {
        slideIndexOfForumMain = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndexOfForumMain - 1].style.display = 'block';
    dots[slideIndexOfForumMain - 1].className += ' active';
    setTimeout(showSlides, 3000);
}

// FAQ - accordian
const toggles = document.getElementsByClassName('toggle');
const faqParagraph = document.getElementsByClassName('faq-para');
const faToggleIcons = document.getElementsByClassName('toggle-icon');

for (let x = 0; x < toggles.length; x++) {
    toggles[x].addEventListener('click', () => {
        if (parseInt(faqParagraph[x].style.height) != faqParagraph[x].scrollHeight) {
            faToggleIcons[x].classList.remove('fa-plus');
            faToggleIcons[x].classList.add('fa-minus');
            faqParagraph[x].style.height = faqParagraph[x].scrollHeight + "px";
        } else {
            faToggleIcons[x].classList.add('fa-plus');
            faToggleIcons[x].classList.remove('fa-minus');
            faqParagraph[x].style.height = '0';
        }
    })
};