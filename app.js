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
    dots: false,
    lazyLoad: true,
    margin: 12,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    items: 4,
    responsive: {
        // breakpoint from 0 up
        0: {
            items: 1,
        },
        // breakpoint from 480 up
        480: {
            items: 2,
        },
        // breakpoint from 768 up
        768: {
            items: 4,
        }
    },
    autoplayTimeout: 2000
});