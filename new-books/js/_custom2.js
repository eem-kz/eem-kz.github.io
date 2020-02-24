$(window).on('load', function () {
    $('.preloader').delay(1000).fadeOut('slow');
});

document.addEventListener('DOMContentLoaded', function () {
    new Mmenu(
        document.querySelector('#menu'),
        {
            "extensions": [
                "pagedim-black",
                // "position-right",
                // "position-front",
                "multiline",
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
                    "<div style='height: 30px;width: 20px;background-color: red;margin: 10px auto 0;'></div>",
                    "<a href='#/'><i class='fa fa-home'></i></a>",
                    "<a href='#/'><i class='fa fa-user'></i></a>"
                ],
                "bottom": [
                    "<a href='#/'><i class='fa fa-twitter'></i></a>",
                    "<a href='#/'><i class='fa fa-facebook'></i></a>",
                    "<a href='#/'><i class='fa fa-linkedin'></i></a>"
                ]
            },

            "navbars": [
                {
                    "position": "top",
                    "content": [
                        "searchfield"
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



