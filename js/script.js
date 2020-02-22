(function ($) {

    "use strict";

    // Window Resize Mobile Menu Fix
    mobileNav();

    // Window Resize Mobile Menu Fix
    $(window).on('resize', function () {
        mobileNav();
    });


    // Window Resize Mobile Menu Fix
    function mobileNav() {
        var width = $(window).width();
        $('.submenu').on('click', function () {
            if (width < 992) {
                $('.submenu ul').removeClass('active');
                $(this).find('ul').toggleClass('active');
            }
        });
    }


    // Menu Dropdown Toggle
    if ($('.menu-trigger').length) {
        $(".menu-trigger").on('click', function () {
            $(this).toggleClass('active');
            $('.header-container .nav-menu').slideToggle(200);
        });
    }

    // Menu elevator animation
    $('a[href*=\\#]:not([href=\\#])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                var width = $(window).width();
                if (width < 991) {
                    $('.menu-trigger').removeClass('active');
                    $('.header-container .nav-menu').slideUp(200);
                }
                $('html,body').animate({
                    scrollTop: (target.offset().top) - 130
                }, 700);
                return false;
            }
        }
    });


})(window.jQuery);


var waypoint_ele = document.getElementsByClassName('basic-waypoint');
for (var i = 0; i < waypoint_ele.length; i++) {
    new Waypoint({
        element: waypoint_ele[i],
        handler: function () {
            console.log("ativou")
        },
        offset: '75%'
    })
}
