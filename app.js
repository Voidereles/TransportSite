import WOW from 'wow.js'
import stickybits from 'stickybits'

new WOW().init();

// stickybits(".sticky-selector", {
//     useStickyClasses: true
// });

var stickybit = stickybits(".sticky-selector");

$('.about__carousel').owlCarousel({
    loop: true,
    dots: true,
    lazyLoad: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    items: 1
});

$('.offer__carousel').owlCarousel({
    loop: true,
    lazyLoad: true,
    margin: 12,
    responsiveClass: true,
    // autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            dots: true
        },
        480: {
            items: 1,
            dots: true
        },
        768: {
            items: 3,
            dots: false
        },
        1200: {
            items: 2,
            dots: false
        }
    },
    autoplayTimeout: 2000
});