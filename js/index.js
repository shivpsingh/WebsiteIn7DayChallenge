// Services Section

$(function () {
    // Animate on Scroll
    new WOW().init();
});

// Work Section

$(function () {
    // Animate on Scroll
    $('#work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

// Team Section
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 700,
        loop: true
    });
});