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