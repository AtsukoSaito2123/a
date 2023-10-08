
$(function () {

    $(".openbtn").click(function () {
        $(this).toggleClass('active');
    });


    $('.slick-area').slick({
        // arrows: false,
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0px',
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 1200,
    });

    $(".slick-area").prepend($(".slick-area .slick-dots"))

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



