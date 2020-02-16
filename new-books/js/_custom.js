(function($) {


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



    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 66
    });

    // Collapse Navbar
    let navbarCollapse = function() {

        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-scrolled");
        } else {
            $("#mainNav").removeClass("navbar-scrolled");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);




 /*

    $(window).scroll(function () {
        const mainNav = $('#mainNav');
        if ($(document).scrollTop() > 100) {
            mainNav.addClass('navbar-scrolled');
        } else {
            mainNav.removeClass('navbar-scrolled');
        }
    });
*/
    $('.menu-btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('menu-btn_active');
        $('.menu-nav').toggleClass('menu-nav_active');
    });

})(jQuery);

