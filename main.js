
$(function () {

    $(".openbtn").click(function () {
        $(this).toggleClass('active');
    });
    
    const swiper = new Swiper(".swiper", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 5,
        centerMode: true,
        centeredSlides: true,
        initialSlide: 1,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            slideChange: function () {
                jQuery('.swiper-slide-content').css('opacity', '0');
                realIndex = this.realIndex + 1;
                jQuery('.swiper-slide-content-' + realIndex).css('opacity', '1');
            },
        },
    });

    $('.slick-area2').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0px',
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 1200,
    });

});



