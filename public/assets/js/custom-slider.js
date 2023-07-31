/*====================
   swiper custom js
=======================*/
var featureSlider = new Swiper(".featureSlider", {
    pagination: {
        el: ".feature-pagination",
        type: "progressbar",
    },
});


var swiper = new Swiper(".testimonialSlider", {
    slidesPerView: 3,
    spaceBetween: 50,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 50,
            centeredSlides: false,
        },
        1199: {
            slidesPerView: 3,
        },
    },
});