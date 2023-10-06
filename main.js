
$(function () {

    $(".openbtn").click(function () {
        $(this).toggleClass('active');
    });



    $('.slick-area').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0px',
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 1200,

    });

});



