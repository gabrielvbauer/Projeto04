$(function() {

    $('.mosaico .container .mosaico-wrapper').slick({
        centerMode: false,
        slidesToShow: 6,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 580,
                settings: {
                    centerMode: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 380,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.tratamentos .container').slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: false,
        infinite: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });

    $('.depoimentos .container').slick({
        slidesToShow: 1,
        dots: true,
        arrows: false,
        infinite: false,
    })

})