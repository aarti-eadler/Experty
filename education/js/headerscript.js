if ($(window).width() < 1020) {}
    
$(window).on("load", function () {

    "use strict";

/* ===================================
        Loading Timeout
 ====================================== */

$('.side-menu').removeClass('hidden');

setTimeout(function () {
    $('.preloader').fadeOut();
    $('.cd-transition-layer').addClass('closing').delay(1000).queue(function () {
        $(this).removeClass("visible closing opening").dequeue();
    });
}, 1000);

setTimeout(function () {
    $('.banner-slider .svg-div').removeClass('svg-anim');
}, 1000);

});

/* ===================================
        Nav Scroll
====================================== */

$(".scroll").on("click", function (event) {
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top - 85
    }, 700);
});

$(".scroll1").on("click", function (event) {
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top - 0
    }, 700);
});

/* ===================================
        Header Appear
====================================== */

$(window).on('scroll', function () {
    if ($(this).scrollTop() >= 250) { // Set position from top to add class
        $('.full-nav').addClass('header-appear');
    } else {
        $('.full-nav').removeClass('header-appear');
    }
});

/* ===================================
    Side Menu
====================================== */

if ($("#sidemenu_toggle").length) {
    $("#sidemenu_toggle").on("click", function () {
        $(".side-menu").removeClass("side-menu-opacity");
        $(".pushwrap").toggleClass("active");
        $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
    }), $("#close_side_menu").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function () {
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    }), $(".side-menu .navbar-nav .nav-link").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function () {
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    }), $("#btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function () {
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    });
}
