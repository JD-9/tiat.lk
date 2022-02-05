// The JavaScript file for the stuff in landing page

// Image slider 1
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName('my-slides');
    let dots = document.getElementsByClassName('dot');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    setTimeout(showSlides, 3000);
}

// Image slider 2
let secondSlideIndex = 0;
showSecondSlides();

function showSecondSlides() {
    let m;
    let slides2 = document.getElementsByClassName("my-slides-2");
    let secondSlideDots = document.getElementsByClassName("dots-2");
    for (m = 0; m < slides2.length; m++) {
        slides2[m].style.display = 'none';
    }
    secondSlideIndex++;
    if (secondSlideIndex > slides2.length) {
        secondSlideIndex = 1;
    }
    for (m = 0; m < secondSlideDots.length; m++) {
        secondSlideDots[m].className = secondSlideDots[m].className.replace(" active", "");
    }
    slides2[secondSlideIndex - 1].style.display = 'block';
    secondSlideDots[secondSlideIndex - 1].className += ' active';
    setTimeout(showSecondSlides, 3000);
}

// Testimonials slider
let testimonialsIndex = 0;
showTestimonials();

function showTestimonials() {
    let x;
    let testimonials = document.getElementsByClassName('testimonial-slides');
    for (x = 0; x < testimonials.length; x++) {
        testimonials[x].style.display = 'none';
    }
    testimonialsIndex++;
    if (testimonialsIndex > testimonials.length) {
        testimonialsIndex = 1;
    }
    testimonials[testimonialsIndex - 1].style.display = "block";
    setTimeout(showTestimonials, 10000);
}