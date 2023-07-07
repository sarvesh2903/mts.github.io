(function ($) {
    "use strict";
    const milestonesSection = document.querySelector('#milestones');
    const milestonesList = document.querySelector('#milestones #count');
    let isCounting = false;

    function countNumbers() {
        const scrollTop = window.pageYOffset + window.innerHeight;
        const milestonesOffset = milestonesSection.offsetTop + milestonesSection.offsetHeight / 2;

        if (scrollTop >= milestonesOffset && !isCounting) {
            isCounting = true;
            
                const targetNumber = 20000;
                let currentNumber = 0;
                const countInterval = setInterval(() => {
                    currentNumber+=25;
                    
                    milestonesList.querySelector('.count').innerText = currentNumber;
                  
                    
                    if (currentNumber >= targetNumber) {
                        clearInterval(countInterval);
                    }
                }, 0);
            ;
        }
    }

    window.addEventListener('scroll', countNumbers);

    document.getElementById("whatsappButton").onclick = function() {
        var phoneNumber = "+917219632623"; // Replace with your desired mobile number

            var encodedPhoneNumber = encodeURIComponent(phoneNumber);
            var whatsappURL = "https://web.whatsapp.com/send?phone=" + encodedPhoneNumber;

            window.open(whatsappURL, "_blank");
    };

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


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
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


    // Price carousel
    $(".price-carousel").owlCarousel({
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
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });


    // Team carousel
    $(".team-carousel, .related-carousel").owlCarousel({
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
            992: {
                items: 2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

})(jQuery);

