// owl carosal
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        video: true,
        nav: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            560: {
                items: 2
            },
            760: {
                items: 2
            },
            990: {
                items: 3
            },
            1200: {
                items: 3
            },
            1500: {
                items: 4
            }
        }
    })
    $("#search").click(function () {
        $("#input").show();
    });
    $(".mega-link").hover(function () {
        $(".mega-menus-list").toggle();
    });
    $(window).scroll(function () {
        var windowscroll = window.pageYOffset;
        if (windowscroll > 176) {
            $('.top').addClass("menu-fixed");
        } else {
            $('.top').removeClass("menu-fixed");
        }
    })

});