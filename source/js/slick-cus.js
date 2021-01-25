// -----------------slick----------
jQuery(document).ready(function() {
    jQuery('.slick-services').slick({
        autoplay: false,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        draggable: false,
        infinite: true,
        pauseOnHover: false,
        swipe: true,
        touchMove: false,
        speed: 1500,
        autoplaySpeed: 5000,
        useTransform: true,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        adaptiveHeight: false,
        focusOnSelect: true
            // centerMode: true,
            // variableWidth: false
    });

    jQuery(".btn-prev").click(function(event) {
        event.preventDefault();
        jQuery(".slick-services").slick("slickPrev");
    })
    jQuery(".btn-next").click(function(event) {
        event.preventDefault();
        jQuery(".slick-services").slick("slickNext");
    })


    // function setSlideCount() {
    //     var $el = jQuery('.slide-count-wrap').find('.total');
    //     $el.text(slideCount);
    // }

    // function setCurrentSlideNumber(currentSlide) {
    //     var $el = jQuery('.slide-count-wrap').find('.current');
    //     $el.text(currentSlide + 1);
    // }

    // jQuery('.slick-services').on('init', function(event, slick) {
    //     slideCount = slick.slideCount;
    //     console.log(slideCount);
    //     setSlideCount();
    //     setCurrentSlideNumber(slick.currentSlide);
    // });

    // jQuery('.slick-services').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    //     setCurrentSlideNumber(nextSlide);
    // });

});
var $slickElement = jQuery('.slick-services');
var $status = $('.slide-count-wrap');

$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});