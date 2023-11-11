(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });

    // window.onscroll = function() {myFunction()};

    // var navbar = document.getElementById("navbar");
    // var sticky = navbar.offsetTop;

    // function myFunction() {
    //   if (window.pageYOffset >= sticky) {
    //     navbar.classList.add("sticky")
    //   } else {
    //     navbar.classList.remove("sticky");
    //   }
    // }


    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

})(jQuery);


    // Documentation
    filterSelection("all")
    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("filterDiv");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
    }

    function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
        }
    }

    function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }

    // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }


    // Scroll-Bar
    $(document).ready(function () {
        if (!$.browser.webkit) {
            $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
        }
    });


    // Tech Slider
    var slide = document.getElementsByClassName("slide");
    var indicator = document.getElementById("indicator");
    var dots = document.getElementsByClassName("dots");
    var autoplay = document.getElementsByClassName("slider-container")[0].getAttribute("data-autoplay");
    var l = slide.length;
    var interval = 5000;
    var set;

    window.onload = function () {
        initialize();
        slide[0].style.opacity = "1";
        for (var j = 0; j < l; j++) {
            indicator.innerHTML += "<div class='dots' onclick=change(" + j + ")></div>";
        }

        dots[0].style.background = "#696969";

    }

    function initialize() {
        if (autoplay === "true")
            set = setInterval(function () { next(); }, interval);
    }

    function change(index) {
        clearInterval(set);
        count = index;
        for (var j = 0; j < l; j++) {
            slide[j].style.opacity = "0";
            dots[j].style.background = "#bdbdbd";
        }
        slide[count].style.opacity = "1";
        dots[count].style.background = "#696969";
    }

    var count = 0;
    function next() {
        clearInterval(set);
        slide[count].style.opacity = "0";
        count++;
        for (var j = 0; j < l; j++) {
            dots[j].style.background = "#bdbdbd";
        }

        if (count == l) {
            count = 0;
            slide[count].style.opacity = "1";
            dots[count].style.background = "#696969";

        } else {
            slide[count].style.opacity = "1";
            dots[count].style.background = "#696969";
        }
        initialize()
    }


    function prev() {
        clearInterval(set);
        slide[count].style.opacity = "0";
        for (var j = 0; j < l; j++) {
            dots[j].style.background = "#bdbdbd";
        }
        count--;

        if (count == -1) {
            count = l - 1;
            slide[count].style.opacity = "1";
            dots[count].style.background = "#696969";

        } else {
            slide[count].style.opacity = "1";
            dots[count].style.background = "#696969";
        }
        initialize()
    }