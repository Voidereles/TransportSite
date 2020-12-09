import WOW from 'wow.js'
import stickybits from 'stickybits'

new WOW().init();

// stickybits(".sticky-selector", {
//     useStickyClasses: true
// });

var stickybit = stickybits(".sticky-selector");

$('.intro__carousel').owlCarousel({
    loop: true,
    dots: true,
    lazyLoad: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    items: 1
});

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

function headerOnScroll() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        console.log('dasd');
        let currentScrollPos = window.pageYOffset;
        if (this.window.pageYOffset > 105) {
            $('.header .container-fluid').addClass('scrolled');


            if (prevScrollpos > currentScrollPos) {
                document.getElementById("header").style.top = "16px";
            } else {
                document.getElementById("header").style.top = "-145px";
            }
            prevScrollpos = currentScrollPos;
        } else {
            $('.header .container-fluid').removeClass('scrolled');
        }
    }
}

$(document).ready(function () {
    $("a[href*='#']:not([href='#])").click(function () {
        let target = $(this).attr("href");
        $('html,body').stop().animate({
            scrollTop: $(target).offset().top - 10
        }, 1000);
        event.preventDefault();


        $('.header__nav').removeClass('header__nav--entered');
        $('.nav-toggle').removeClass('nav-toggle--entered');
    });



    headerOnScroll();
    $('a[href^="#"]').click(function () {

        document.getElementById("header").style.top = "0";

    });

    $(window).bind('scroll', function () {
        var currentTop = $(window).scrollTop();
        var elems = $('.scrollspy');
        elems.each(function (index) {
            var elemTop = $(this).offset().top - 100;
            var elemBottom = elemTop + $(this).height();
            if (currentTop >= elemTop && currentTop <= elemBottom) {
                var id = $(this).attr('id');
                var navElem = $('a[href="#' + id + '"]');
                navElem.addClass('active').siblings().removeClass('active');
            }
        })
    });

    $('.header__logo').click(function () {
        $('html,body').stop().animate({
            scrollTop: 0
        }, 1000);
    })

    $('.nav-toggle').click(function () {
        $('.header__nav').toggleClass('header__nav--entered');
        $('.nav-toggle').toggleClass('nav-toggle--entered');
    })
});