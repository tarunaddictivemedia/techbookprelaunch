$(document).ready(function() {
    var bluebook1Animation = lottie.loadAnimation({
        container: document.getElementById('bluebook1'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'images/BLUE_Book_Open_ARI_min.json'
    });
    var bluebook2Animation = lottie.loadAnimation({
        container: document.getElementById('bluebook2'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'images/BLUE_Book_Fold_02_PIE_min.json'
    });
    bluebook2Animation.setSpeed(0.5);
    var redbook1Animation = lottie.loadAnimation({
        container: document.getElementById('redbook1'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'images/RED_Book_Open_min.json'
    });
    redbook1Animation.setSpeed(0.5);
    var greenbook1Animation = lottie.loadAnimation({
        container: document.getElementById('greenbook1'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'images/GREEN_Book_Open_ARI_min.json'
    });
    var greenbook2Animation = lottie.loadAnimation({
        container: document.getElementById('greenbook2'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'images/GREEN_Book_Fold02_PIE_min.json'
    });
    greenbook2Animation.setSpeed(0.5);
    $('.bookslider').on('afterChange', function(event, slick, currentSlide) {
        var $currentSlide = $(slick.$slides[currentSlide]);
        if ($currentSlide.find('#bluebook1').length) {
            bluebook1Animation.goToAndStop(0, true);
            bluebook1Animation.play();
        }
        if ($currentSlide.find('#bluebook2').length) {
            bluebook2Animation.goToAndStop(0, true);
            bluebook2Animation.play();
        }
        if ($currentSlide.find('#redbook1').length) {
            redbook1Animation.goToAndStop(0, true);
            redbook1Animation.play();
        }
        if ($currentSlide.find('#greenbook1').length) {
            greenbook1Animation.goToAndStop(0, true);
            greenbook1Animation.play();
        }
        if ($currentSlide.find('#greenbook2').length) {
            greenbook2Animation.goToAndStop(0, true);
            greenbook2Animation.play();
        }
    });
});
function bluebooktechbook() {
    $('.bookthreeblock').hide();
    $('#bluebookpdf').show();
    $('.bookslider').slick('refresh');
}
function REDbooktechbook() {
    $('.bookthreeblock').hide();
    $('#redbookpdf').show();
    $('.bookslider').slick('refresh');
}
function greenbooktechbook() {
    $('.bookthreeblock').hide();
    $('.greenbookpdf').show();
    $('.bookslider').slick('refresh');
}
$('.requestaquote').click(function() {
    $('html, body').animate({
        scrollTop: $('#demorequestsec').offset().top
    }, 500);
});
$('.sciencebook').click(function() {
    $('html, body').animate({
        scrollTop: $('#sciencebook').offset().top
    }, 500);
});
$('.englishbook').click(function() {
    $('html, body').animate({
        scrollTop: $('#englishbook').offset().top
    }, 500);
});
$('.mathbook').click(function() {
    $('html, body').animate({
        scrollTop: $('#mathbook').offset().top
    }, 500);
});
$('.curiouslearn').click(function() {
    $('html, body').animate({
        scrollTop: $('#curiouslearnsec').offset().top
    }, 500);
});
$('.demorequest').click(function() {
    $('html, body').animate({
        scrollTop: $('#demorequestsec').offset().top
    }, 500);
});
$('.faq').click(function() {
    $('html, body').animate({
        scrollTop: $('#faqsection').offset().top
    }, 500);
});
$(document).ready(function() {
    $(".bookslider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: false,
        pauseOnHover: false,
    });
});
function showPopup() {
    $('.iraredbook').show();
}
function scipiePopup() {
    $('.scipiedbook').show();
}
function showpiePopup() {
    $('.pieredbook').show();
}
function showairPopup() {
    $('.ariredbook').show();
}
function showmathariPopup() {
    $('.matharibook').show();
}
$('.pieredbook .close').click(function() {
    $('.pieredbook').hide();
    $(".pieredbook video").each(function() {
        this.pause(); 
    });
});
$('.ariredbook .close').click(function() {
    $('.ariredbook').hide();
    $(".ariredbook video").each(function() {
        this.pause(); 
    });
});
$('.iraredbook .close').click(function() {
    $('.iraredbook').hide();
    $(".iraredbook video").each(function() {
        this.pause(); 
    });
});
$('.scipiedbook .close').click(function() {
    $('.scipiedbook').hide();
    $(".scipiedbook video").each(function() {
        this.pause(); 
    });
});
$('.matharibook .close').click(function() {
    $('.matharibook').hide();
    $(".matharibook video").each(function() {
        this.pause(); 
    });
});
$(document).ready(function() {
    $('.blueactive').click(function() {
        $('.bluebookpdf').show();
        $(".bluebookactive").hide();
        $('.bookslider').slick('refresh');
    });
    $('.redactive').click(function() {
        $('#redbookpdf').show();
        $(".redbookactive").hide();
        $('.bookslider').slick('refresh');
    });
    $('.greenactive').click(function() {
        $('.greenbookpdf').show();
        $(".greenbookactive").hide();
        $('.bookslider').slick('refresh');
    });
    $('.scienceclickexplore').click(function() {
        $('#sciencebookpdf').show();
    });
    $('#sciencebookpdf .close').click(function() {
        $('#sciencebookpdf').hide();
    });
    $('.englishclickexplore').click(function() {
        $('#englishbookpdf').show();
    });
    $('#englishbookpdf .close').click(function() {
        $('#englishbookpdf').hide();
    });
    $('.mathclickexplore').click(function() {
        $('#mathbookpdf').show();
    });
    $('#mathbookpdf .close').click(function() {
        $('#mathbookpdf').hide();
    });
    $('.humburgur').click(function() {
        $('.menu').slideToggle();
        $(this).toggleClass('active');
    });
    $('.bookpdfrow .close').click(function() {
        $('.bookpdf').hide();
        $('.bookthreeblock').show();
    });
});
$(document).ready(function() {
    $('.accordion h4').click(function() {
        $('.details').slideUp();
        $('.accordion h4 .icon').text('+');
        if ($(this).next('.details').is(':visible')) {
            $(this).next('.details').slideUp();
            $(this).find('.icon').text('+');
        } else {
            $(this).next('.details').slideDown();
            $(this).find('.icon').text('-');
        }
    });
});
jQuery(document).ready(function($) {
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) { 
            $('.siteheader').addClass('sticky');
        } else {
            $('.siteheader').removeClass('sticky');
        }
    });
});