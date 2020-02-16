(function($) {
    $(window).scroll(function () {
        const mainNav = $('#mainNav');
        console.log($(document).scrollTop());
        if ($(document).scrollTop() > 100) {
            mainNav.addClass('navbar-scrolled');
        } else {
            mainNav.removeClass('navbar-scrolled');
        }
    });

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {

                if ($(document).width() < 992) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 50)
                    }, 1000, "easeInOutExpo");
                }else {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 66)
                    }, 1000, "easeInOutExpo");
                }

                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    /*$('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });*/

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 66
    });

    $(window).on('scroll',function(){
        console.log($(document).scrollTop());
    });

    document.addEventListener('scroll', function(event) {
        if (event.target.id === 'scroll') {
            console.log('scrolling', event.target);
        }
    }, true);

    $('.menu-btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('menu-btn_active');
        $('.menu-nav').toggleClass('menu-nav_active');
    });

})(jQuery);




document.addEventListener("DOMContentLoaded", function () {
     "use strict"; // Start of use strict





    /*// Collapse Navbar
    let navbarCollapse = function() {
        console.log(1);
        const mainNav = $("#mainNav");
        // if (mainNav.offset().top > 100) {
        if ($(document).scrollTop()>100) {
            mainNav.addClass("navbar-scrolled");
        } else {
            mainNav.removeClass("navbar-scrolled");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);*/


//
   /* $('.navbar-toggler').on('click', function (e) {
        e.preventDefault();
        // const category_menu = $('.category-menu');
        const category_menu__body = $('.category-menu__body');
        $(this).toggleClass('navbar-toggler__active');
        category_menu__body.toggleClass('category-menu__active');
        /!* if (category_menu__body.hasClass('category-menu__active')) {
             category_menu__body.css('top', navH + 'px');
         } else {
             category_menu__body.css('top', '-' + wH + 'px');
         }*!/
        $('.body').toggleClass('lock');
    });*/

//


});
