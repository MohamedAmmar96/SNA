$(window).on('load', function() {

    $(".loading-overlay img").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})


var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();


$(window).scroll(function() {
    if (($(this).scrollTop() >= 30) && ($(window).width() >= 992)) {
        // $(".page-language").slideUp(300);
        $(".header").css("top", "-32px");
        $(".header").css("position", "fixed");
        $(".header").css("z-index", "99999");
        $(".header").css("box-shadow", "10px 0 10px #0000001c");
        $(".header-content").css("padding", "15px 0 10px 0");
        $(".header-content .logo").css("width", "20%");
        $(".header-content .menu").css("height", "57px");
        $(".header-content .terms").css("height", "57px");
    } else if (($(window).width() <= 991) && ($(this).scrollTop() >= 50)) {
        // $(".header").css("top", "0");
        $(".header").css("position", "fixed");
        $(".header").css("z-index", "99999");
        $(".header").css("box-shadow", "10px 0 10px #0000001c");
        $(".page-intro").css("display", "none");
        $(".header-content").css("padding", "10px 0 10px 0");
        $(".header-content .logo").css("width", "80%");
        $(".header-content .menu").css("height", "60px");
        $(".header-content .terms").css("height", "60px");
    } else if (($(window).width() <= 991)) {
        $(".header").css("top", "0");
        $(".header").css("position", "relative");
        $(".header").css("box-shadow", "none");
        $(".header").css("z-index", "auto");
        $(".header-content").css("padding", "15px 0 15px 0");
        $(".header-content .logo").css("width", "100%");
        $(".header-content .menu").css("height", "70px");
        $(".header-content .terms").css("height", "70px");
    } else {
        // $(".page-language").slideDown(300);
        $(".header").css("top", "0");
        $(".header").css("position", "relative");
        $(".header").css("box-shadow", "none");
        $(".header").css("z-index", "auto");
        $(".header-content").css("padding", "20px 0");
        $(".header-content .logo").css("width", "100%");
        $(".header-content .menu").css("height", "85px");
        $(".header-content .terms").css("height", "85px");
    }
});


$(document).ready(function() {

    //This is to Open Side Menu
    $(".header-content .menu-btn").click(function() {
        $(".side-menu").addClass("menu-open");
        $(".menu-btn .menu-icon").removeClass("open-menu")
        $(".menu-btn .menu-icon").addClass("close-menu")
        $(".overlay-box").fadeIn(500);
    });

    $(".close,.overlay-box").click(function() {
        $(".side-menu").removeClass("menu-open");
        $(".menu-btn .menu-icon").addClass("open-menu")
        $(".menu-btn .menu-icon").removeClass("close-menu")
        $(".overlay-box").fadeOut(500);
    });


    // This is To Open search Box
    $(".search .search-icon").click(function() {
        $(".overlay-box2").slideDown(500);
    });

    $(".search .search-icon").click(function() {
        $(".search .search-icon").removeClass("open-search")
        $(".search .search-icon").addClass("close-search")
        $(".close-search-btn").fadeIn(500)
        $(".search-box").fadeIn(500);
    });

    $(".close-search-btn,.overlay-box2").click(function() {
        $(".overlay-box2").slideUp(500);
    });

    $(".close-search-btn,.overlay-box2").click(function() {
        $(".search .search-icon").addClass("open-search")
        $(".search .search-icon").removeClass("close-search")
        $(".close-search-btn").fadeOut(500)
        $(".search-box").fadeOut(500);
    });

    // //This is to Open Search Box 
    // $(".search .search-icon").click(function() {
    //     $(".search .search-icon").removeClass("open-search")
    //     $(".search .search-icon").addClass("close-search")
    //     $(".terms .search-box").slideDown(500);
    // });

    // $(".search-box .close-search-btn").click(function() {
    //     $(".search .search-icon").addClass("open-search")
    //     $(".search .search-icon").removeClass("close-search")
    //     $(".terms .search-box").slideUp(500);
    // });


    //This is to Open User Config Box 
    $(".config .config-icon").click(function() {
        $(".overlay-box3").slideDown(500);
    });

    $(".config .config-icon").click(function() {
        $(".config .config-list").slideDown(500);
    });

    $(".overlay-box3").click(function() {
        $(".overlay-box3").slideUp(500);
    });

    $(".overlay-box3").click(function() {
        $(".config .config-list").slideUp(500);
    });


    //This is to Open Side Menu
    $(".shop .shop-icon").click(function() {
        $(".cart").addClass("cart-open");
        $(".overlay-box4").fadeIn(500);
    });

    $(".cart-close,.overlay-box4").click(function() {
        $(".cart").removeClass("cart-open");
        $(".overlay-box4").fadeOut(500);
    });

    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        rtl: true,
        margin: 20,
        navText: ["<span class='fas fa-chevron-right'></span>", "<span class='fas fa-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            768: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            992: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            }
        }
    });

    // To Toggle Between Footer Slide Menus
    if ($(window).width() <= 991) {
        $('.collapse[data-parent="#parent"]').on('show.bs.collapse', function() {
            $('.collapse[data-parent="#parent"]').not(this).collapse('hide');
        });
    } else {
        $(".slide-list").addClass("in")
    }

    //This is to Open Side Menu

    // $(".filters .filters-name").click(function() {
    //     $(".overlay-box5").slideDown(500);
    // });

    $(".filters .filters-name").click(function() {
        $(".filters .filters-name").addClass("rotate")
        $(".filters .close-filters").fadeIn(300)
        $(".filters-box").slideDown(300);
    });

    $(".close-filters").click(function() {
        // $(".overlay-box5").slideUp(500);
        $(".filters .filters-name").removeClass("rotate")
        $(".filters .close-filters").fadeOut(300)
        $(".filters-box").slideUp(300);
    });



    if ($(window).width() <= 991) {
        $(".features .features-box").addClass("owl-carousel owl-theme");
        $(".features-box .feature").removeClass("owl-carousel");
        $('.features .owl-carousel').owlCarousel({
            loop: false,
            margin: 20,
            rtl: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    loop: false
                },
                500: {
                    items: 2,
                    nav: false,
                    loop: false
                }
            }
        })
    } else {
        $(".features-box .feature").removeClass("owl-carousel");
        $(".features-box .feature").removeClass("owl-carousel");
    };


    $(".first .footer-heading").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("collapse")) {
            $(".first .footer-heading").addClass("rotate")
            $(".second .footer-heading").removeClass("rotate")
            $(".third .footer-heading").removeClass("rotate")
            $(".last .footer-heading").removeClass("rotate")
        }
    });
    $(".first .footer-heading").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("in")) {
            $(".first .footer-heading").removeClass("rotate")
        }
    });


    $(".second .footer-heading").click(function() {
        var x = $(".second .slide-list")
        if (x.hasClass("collapse")) {
            $(".second .footer-heading").addClass("rotate")
            $(".first .footer-heading").removeClass("rotate")
            $(".third .footer-heading").removeClass("rotate")
            $(".last .footer-heading").removeClass("rotate")
        }
    });
    $(".second .footer-heading").click(function() {
        var x = $(".second .slide-list")
        if (x.hasClass("in")) {
            $(".second .footer-heading").removeClass("rotate")
        }
    });


    $(".third .footer-heading").click(function() {
        var x = $(".third .slide-list")
        if (x.hasClass("collapse")) {
            $(".third .footer-heading").addClass("rotate")
            $(".first .footer-heading").removeClass("rotate")
            $(".second .footer-heading").removeClass("rotate")
            $(".last .footer-heading").removeClass("rotate")
        }
    });
    $(".third .footer-heading").click(function() {
        var x = $(".third .slide-list")
        if (x.hasClass("in")) {
            $(".third .footer-heading").removeClass("rotate")
        }
    });

    $(".last .footer-heading").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("collapse")) {
            $(".last .footer-heading").addClass("rotate")
            $(".first .footer-heading").removeClass("rotate")
            $(".second .footer-heading").removeClass("rotate")
            $(".third .footer-heading").removeClass("rotate")
        }
    });
    $(".last .footer-heading").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("in")) {
            $(".last .footer-heading").removeClass("rotate")
        }
    });


    // This is To Open sort list
    $(".sort .sort-name").click(function() {
        $(".sort .sort-name").toggleClass("rotate")
        $(".sort .sort-list").slideToggle(300);
    });

    // This is To Open size list
    $(".size .size-name").click(function() {
        $(".size .size-name").toggleClass("rotate")
        $(".size .size-list").slideToggle(300);
    });


    // This is To Open orientation list
    $(".orientation .orientation-name").click(function() {
        $(".orientation .orientation-name").toggleClass("rotate")
        $(".orientation .orientation-list").slideToggle(300);
    });

    // This is To Open price list
    $(".price .price-name").click(function() {
        $(".price .price-name").toggleClass("rotate")
        $(".price .price-list").slideToggle(300);
    });


    // This is To Open color list
    $(".color .color-name").click(function() {
        $(".color .color-name").toggleClass("rotate")
        $(".color .color-list").slideToggle(300);
    });

    // This is To Open artist list
    $(".artist .artist-name").click(function() {
        $(".artist .artist-name").toggleClass("rotate")
        $(".artist .artist-list").slideToggle(300);
    });

    // This is To Open category list
    $(".category .category-name").click(function() {
        $(".category .category-name").toggleClass("rotate")
        $(".category .category-list").slideToggle(300);
    });

});