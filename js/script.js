(function ($) {
    "use strict";
    $(document).ready(function () {


        // preloader //
        $(window).on("load", function () {
            $("#preloader").fadeOut();
            $("#preloader-status").delay(500).fadeOut("slow");
            // $("#preloader").css({"visibility": "hidden"});
            // $("#preloader-status").delay(200).css({"visibility": "hidden"});
            $("body").delay(200).css({
                "overflow-x": "hidden"
            });
        });


        // Moblie Menu
        $('#main-menu').meanmenu({
            meanMenuContainer: '.mobile-nav-menu',
            meanScreenWidth: '991',
            meanExpand: ['<i class="fal fa-plus"></i>'],

        });


        // Mobile toggle button
        $(".mobile-menu-toggle-btn").on("click", function () {
            $(".sidebar-menu-area").addClass("active");
            $(".body-overlay").addClass("active");
        });

        $("#sidebar-menu-close-btn").on("click", function () {
            $(".sidebar-menu-area").removeClass("active");
            $(".body-overlay").removeClass("active");
        });


        // Jquery Body Overlay
        $(".body-overlay").on("click", function () {
            $(".sidebar-menu-area").removeClass("active");
            $(".body-overlay").removeClass("active");
        });


        // Hero section //

        $('.hero-slider').slick({
            dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            loop: true,
            autoplay: true,
            autoplaySpeed: 5000,
            rtl: false,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        dots: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });



        // Services slider sections //
        $('.services-slider').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            loop: true,
            autoplay: true,
            autoplaySpeed: 4000,
            rtl: false,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });




        // Case studies section //

        $('.case-slider').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            loop: true,
            autoplay: true,
            autoplaySpeed: 4000,
            rtl: false,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

        $('.case-prev-btn').on('click', function (e) {
            e.preventDefault();
            $('.case-slider .slick-prev').trigger('click');
        });
        $('.case-next-btn').on('click', function (e) {
            e.preventDefault();
            $('.case-slider .slick-next').trigger('click');
        });



        // Testimonial Section //

        $('.testimonial-slider').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            loop: true,
            autoplay: true,
            autoplaySpeed: 4000,
            rtl: false,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

        $('.testimonial-prev-btn').on('click', function (e) {
            e.preventDefault();
            $('.testimonial-slider .slick-prev').trigger('click');
        });
        $('.testimonial-next-btn').on('click', function (e) {
            e.preventDefault();
            $('.testimonial-slider .slick-next').trigger('click');
        });




        // Team sections //

        $('.team-slider').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            loop: true,
            autoplay: true,
            autoplaySpeed: 3000,
            rtl: false,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

        $('.team-prev-btn').on('click', function (e) {
            e.preventDefault();
            $('.team-slider .slick-prev').trigger('click');
        });
        $('.team-next-btn').on('click', function (e) {
            e.preventDefault();
            $('.team-slider .slick-next').trigger('click');
        });


        // Brand Section //

        $('.brand-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            loop: true,
            autoplay: true,
            autoplaySpeed: 3000,
            rtl: false,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

    });
})(jQuery);