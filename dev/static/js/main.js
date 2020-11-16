$(document).ready(function () {
    // $('.tab_btn').click(function() {
    //     $('.slider').slick({
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //         prevArrow: '.arrowPrev',
    //         nextArrow: '.arrowNext',
    //         dots: true,
    //         dotsClass: 'pagination'
    //     })
    // });
    $('#sliderOne').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.arrowPrev',
        nextArrow: '.arrowNext',
        dots: true,
        dotsClass: 'pagination'
    })
    $('#sliderTwo').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.arrowPrev1',
        nextArrow: '.arrowNext1',
        dots: true,
        dotsClass: 'pagination'
    })
    $('#sliderThree').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.arrowPrev2',
        nextArrow: '.arrowNext2',
        dots: true,
        dotsClass: 'pagination'
    })
    $('#sliderFour').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.arrowPrev3',
        nextArrow: '.arrowNext3',
        dots: true,
        dotsClass: 'pagination'
    })
    $('#sliderFive').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.arrowPrev4',
        nextArrow: '.arrowNext4',
        dots: true,
        dotsClass: 'pagination'
    })
});