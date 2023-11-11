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
    $('.slick-prev').trigger('click');
});
$('.case-next-btn').on('click', function (e) {
    e.preventDefault();
    $('.slick-next').trigger('click');
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

$('.testimonial-prev-btn').on('click', function (e) {
    e.preventDefault();
    $('.slick-prev').trigger('click');
});
$('.testimonial-next-btn').on('click', function (e) {
    e.preventDefault();
    $('.slick-next').trigger('click');
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
    $('.slick-prev').trigger('click');
});
$('.team-next-btn').on('click', function (e) {
    e.preventDefault();
    $('.slick-next').trigger('click');
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
