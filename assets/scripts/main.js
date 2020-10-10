var www;
!(function ($) {
    // Smooth scroll for the navigation menu and links with .scrollto classes
    var scrolltoOffset = $('#header').outerHeight() - 1;
    $(document).on('click', '.navbar-nav a, .mobile-nav a, .scrollto', function (e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                e.preventDefault();

                var scrollto = target.offset().top - scrolltoOffset;

                if ($(this).attr("href") == '#header') {
                    scrollto = 0;
                }

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.navbar-nav, .mobile-nav').length) {
                    $('.navbar-nav .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
                if ($(this).parent().hasClass('show')) {
                    $(this).parent('.dropdown-menu.show').dropdown('toggle');
                }
                return false;
            }
        }
    });

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function () {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top - scrolltoOffset;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
        if (jQuery().slick) {
            $('.customer-logos').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
                arrows: false,
                dots: false,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4
                    }
                }, {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 3
                    }
                }]
            });
        }
    });
    // Mobile Navigation
    if ($('.navbar-nav').length) {
        var $mobile_nav = $('.navbar-nav').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('.mobile-nav .nav-item').removeClass('nav-item');
        $('.mobile-nav .nav-link').removeClass('nav-link');
        $('.mobile-nav .text-light').removeClass('text-light');

        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        $(document).on('click', '.mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').toggle();
        });

        $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass('active');
        });

        $(document).click(function (e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.navbar-nav, .mobile-nav');

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop() + 200;

        nav_sections.each(function () {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                    main_nav.find('.active').removeClass('active');
                }
                var loc = window.location.pathname.split("/").pop();
                if (!!loc) {
                    main_nav.find("a[href*='" + loc + "#" + $(this).attr('id') + "']").addClass('active');
                } else {
                    main_nav.find("a[href*='#" + $(this).attr('id') + "']").addClass('active');
                }
            }
        });
    });

    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    }

    // Stick the header at top on scroll
    $("#header").sticky({
        topSpacing: 0,
        zIndex: '50'
    });
    var styles = [
        'border: 1px solid #fd746c', 'color: white', 'display: block', 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)', 'background: #2C3E50;', 'background: -webkit-linear-gradient(to right, #2c3e50, #fd746c)', 'background: linear-gradient(to right, #2c3e50, #fd746c)', 'line-height: 40px', 'text-align: center', 'font-weight: bold', 'font-size: 20px', 'padding: 20px', 'font-family: "Lucida Console", Courier, monospace;', 'border-radius: 10px'
    ].join(';');
    console.log("%c Developed and created by Sachin Ranka." + "%cFor more details: www.linkedin.com/in/sachinranka4u", styles, 'color:blue');
})(jQuery);