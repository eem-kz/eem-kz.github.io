$(window).on('load', function () {
    $('.preloader').delay(1000).fadeOut('slow');
});

document.addEventListener('DOMContentLoaded', function () {
    new Mmenu(
        document.querySelector('#menu'),
        {
            "extensions": [
                "pagedim-black",
                // "position-top",
                // "position-front",
                "multiline",
                // "fullscreen",
                "theme-black",
                "border-full",
                "shadow-page"
            ],
            // "dropdown": true,
            "counters": true,

             sidebar: {
                 collapsed: 768,
                 expanded: 1200,
             },
            // drag: true,
            // setSelected: true,
             "iconbar": {
                 "use": true,
                 // "position": "right",
                 "top": [
                     "<a href='/'><i class='fas fa-home'></i></a>",
                 ],
                 "bottom": [
                     "<a target='_blank' title='Телеграмм канал' href='https://t.me/atazholy'><i class='fab fa-telegram'></i></a>",
                     "<a target='_blank' href='https://twitter.com/AtazholyKZ'><i class='fab fa-twitter'></i></a>",
                     "<a target='_blank' href='https://www.facebook.com/atazholy/'><i class='fab fa-facebook-f'></i></a>",
                     "<a target='_blank' href='https://www.youtube.com/channel/UCG3yvnpQHKPb4WX9fHZ6_9A/videos'><i class='fab fa-youtube'></i></a>"
                 ]
             },

            "navbars": [
                {
                    height: 2,
                    // "position": "top",
                    "content": [
                        "searchfield",
                        // 'close'
                    ]
                },
                {
                    content: [
                        "prev",
                        // "title",
                        // 'breadcrumbs',
                    ]
                }
            ],
            "searchfield": {
                "showSubPanels": false,
                placeholder: 'Іздеу...',
                noResults: "Іздеу нәтижесіз...",
                panel:
                    {
                        add: true,
                        title: "Іздеу",
                    }
            }
        }, {
            "searchfield": {
                "clear": true
            },
            // "slidingSubmenus": false


        }
    );
    $(".mh-head.Sticky").mhead({
        scroll: {
            hide: 200
        }
    });
    $(".mh-head:not(.Sticky)").mhead({
        scroll: false
    });

    $('.menu-btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('menu-btn_active');
        $('.menu-nav').toggleClass('menu-nav_active');
        $('body').toggleClass('fix');
    });

});

/*
(function ($) {

})(jQuery);

*/



