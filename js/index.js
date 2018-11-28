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