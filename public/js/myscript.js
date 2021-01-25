// ========================banner mobile===========================
jQuery(window).load(function() {
    banner();
});

function banner() {
    if (jQuery(this).width() < 600) {
        var img_mobile = jQuery('#header-page .banner-page .img-banner').find('img').attr('src');
        jQuery('.banner-page').css({
            'background-image': 'url(' + img_mobile + ')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'background-position': 'center center',
            'min-height': '64vh'
        });
        jQuery('#header-page .banner-page .img-banner').find('img').css('display', 'none')
    }
}
// --------------button menu----------
jQuery(document).ready(function() {
    jQuery(".button-sticky").click(function() {
        jQuery("#header-page .sticky .wrap__menu .wrap__menu--bottom .menu__bottom--menu .navbar-menu-mobile").toggleClass("active");
        jQuery("#header-page .sticky .wrap__menu .wrap__menu--bottom .menu__bottom--menu .navbar-menu-mobile .navbar-sticky").toggleClass("active");
        jQuery("body").toggleClass("show-scroll");
    });
    jQuery(document).mouseup(function(e) {
        if (!jQuery(".button-sticky").is(e.target) && jQuery(".button-sticky").has(e.target).length === 0) {
            jQuery("#header-page .sticky .wrap__menu .wrap__menu--bottom .menu__bottom--menu .navbar-menu-mobile").removeClass("active");
            jQuery("#header-page .sticky .wrap__menu .wrap__menu--bottom .menu__bottom--menu .navbar-menu-mobile .navbar-sticky").removeClass("active");
            jQuery('body').removeClass('show-scroll');
        }
    });
});
// -------load more
var width = jQuery(window).width();
if (width < 577) {
    jQuery('#page-home .section_3 .services .services__wrap').addClass('slick-services');
}

jQuery('#page_services .wrap_services .services--left .services__left--list .left__list--tab ul.nav li a').click(function() {

    var id = jQuery(this).attr('id');

    jQuery('html, body').animate({

        scrollTop: jQuery("#scroll-" + id).offset().top + 500

    }, 2000);
});

// jQuery(function() {
//     var width = jQuery(window).width();
//     if (width > 600) {
//         jQuery(".more").slice(0, 16).show();
//         jQuery("#loadMore").on('click', function(e) {
//             e.preventDefault();
//             jQuery(".more:hidden").slice(0, 8).slideDown();
//             if (jQuery(".more:hidden").length == 0) {
//                 jQuery("#load").fadeOut('slow');
//             }
//             jQuery('html,body').animate({
//                 scrollTop: jQuery(this).offset().top
//             }, 1500);
//         });
//     } else {
//         jQuery(".more").slice(0, 8).show();
//         jQuery("#loadMore").on('click', function(e) {
//             e.preventDefault();
//             jQuery(".more:hidden").slice(0, 4).slideDown();
//             if (jQuery(".more:hidden").length == 0) {
//                 jQuery("#load").fadeOut('slow');
//             }
//             jQuery('html,body').animate({
//                 scrollTop: jQuery(this).offset().top
//             }, 1500);
//         });
//     }
// });

// jQuery('a[href=#top]').click(function() {
//     jQuery('body,html').animate({
//         scrollTop: 0
//     }, 600);
//     return false;
// });

// jQuery(window).scroll(function() {
//     if (jQuery(this).scrollTop() > 1200) {
//         jQuery('.totop a').fadeIn();
//     } else {
//         jQuery('.totop a').fadeOut();
//     }
// });

// function formatDate(date) {
//     var d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + d.getDate(),
//         year = d.getFullYear();

//     if (month.length < 2)
//         month = '0' + month;
//     if (day.length < 2)
//         day = '0' + day;

//     return [year, month, day].join('-');
// }
// alert(formatDate('Sun May 11,2014'));
jQuery(document).ready(function() {
    // -------------flexslider
    jQuery('.flexslider').flexslider({
        animation: "fade",
        animationLoop: true,
        slideshowSpeed: 4000,
        animationSpeed: 1200,
        start: function(slider) {
            var next = jQuery(".flexslider ul.slides li.flex-active-slide").next().find(".img-flex img").attr("src");
            jQuery(".banner-slider .outside-slider .img-outside").css('background-image', 'url(' + next + ')');
        },
        after: function(slider) {
            if (jQuery(".flexslider ul.slides li.flex-active-slide").is(":last-child")) {
                var next = jQuery(".flexslider ul.slides li:first-child()").find(".img-flex img").attr("src");
                jQuery(".banner-slider .outside-slider .img-outside").css('background-image', 'url(' + next + ')');
            } else {

                var next = jQuery(".flexslider ul.slides li.flex-active-slide").next().find(".img-flex img").attr("src");
                jQuery(".banner-slider .outside-slider .img-outside").css('background-image', 'url(' + next + ')');
            }
        }
        // controlsContainer:jQuery(".flex-control-nav li"),
        // customDirectionNav:jQuery(".flex-control-nav li a")
    });

    // -------button flexsider
    // jQuery(".arrow-prev").on("click", function(event) {
    //     event.preventDefault();
    //     jQuery(".flexslider").flexslider("prev");
    //     return false;
    // })
    // jQuery(".arrow-next").on("click", function(event) {
    //     event.preventDefault();
    //     jQuery(".flexslider").flexslider("next");
    //     return false;
    // })
});
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
// --------------sticky menu--------------
// jQuery(document).ready(function() {
//     jQuery(function() {
//         var width = jQuery(window).width();
//         var header = jQuery(".sticky");
//         offset = header.offset().top;
//         jQuery(window).scroll(function() {
//             if (jQuery(this).scrollTop() > offset && width > 992) {
//                 header.addClass("fixed");
//             } else {
//                 header.removeClass("fixed");
//             }
//         })
//     })
// });