var btnMenu = document.getElementById('menu-mob-btn');
btnMenu.addEventListener('click', function () {
    this.classList.toggle('active')
})


$(document).ready(function(){
    $("#sliderBrands").owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        rewind: true,
        responsive:{
            0:{
                items:3,
                autoWidth:true,
                margin: 60,
            },
            768:{
                items:6,
                margin: 70

            },
            1114: {
                items:6,
                margin: 0
            }
        }

    });
    $("#testimonialsSlider").owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        rewind: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1,
                margin: 0,

            },
            768: {
                items: 2,
                margin: 18
            },
            1024: {
                items: 3,
                margin: 18
            }
        }
    });

    setTimeout(function (){
        $("#headerHome").addClass('start-animation')},2000)

    var scrollheight = $('#headerHome').outerHeight() + $('#navbar').outerHeight();
    $("#headerScrollBtn").on('click',function () {
        $("html, body").animate({ scrollTop: scrollheight }, 500, 'swing');
        return false;
    })

    function popupClose () {
        if ($('.popup').hasClass('active')) {
            $(".popup").removeClass('active');
            $("body").removeClass('popup-active');
        }
    }
    function popupActive() {
        if (!$('.popup').hasClass('active')) {
            $(".popup").addClass('active');
            $("body").addClass('popup-active');
        }
    }
    $('.popup-close').on('click', function () {
        popupClose();
    });
    $('#login-btn').on('click', function () {
        popupActive();
    });

});