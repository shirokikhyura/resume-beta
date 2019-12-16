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
        responsive: {
            0: {
                items: 1,
                margin: 0,

            },
            1024: {
                items: 3,
                margin: 48
            }
        }
    })


});