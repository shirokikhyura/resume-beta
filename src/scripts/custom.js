var btnMenu = document.getElementById('menu-mob-btn');
btnMenu.addEventListener('click', function () {
    this.classList.toggle('active')
})


$(document).ready(function(){
    $("#sliderBrands").owlCarousel({
        margin: 70,
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
                responsiveClass: 'off',

            }
        }

    });


});