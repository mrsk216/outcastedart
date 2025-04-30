$(document).ready(function () {
    // Back to Top
    $('#bttop').on('click' ,function () {
        $(window).scrollTop(0);
    });

    //Nav Menu popup
    $('.nav-menu-wrapper').on('click', function () {
        if ($(this).hasClass('show')) {
            $(this).removeClass('show');
            
            setTimeout(function () {
                $('.navbar-link:nth-child(1)').css('opacity', '0');
                setTimeout(function () {
                    $('.navbar-link:nth-child(1)').css('transform', 'translateY(-150px)');
                },50);
            }, 0);
            setTimeout(function () {
                $('.navbar-link:nth-child(2)').css('opacity', '0');
                setTimeout(function () {
                    $('.navbar-link:nth-child(2)').css('transform', 'translateY(-150px)');
                },50);                                
            }, 100);
            setTimeout(function () {
                $('.navbar-link:nth-child(3)').css('opacity', '0');
                setTimeout(function () {
                    $('.navbar-link:nth-child(3)').css('transform', 'translateY(-150px)');
                },50);                               
            }, 200);
            setTimeout(function () {
                $('.navbar-link:nth-child(4)').css('opacity', '0');
                setTimeout(function () {
                    $('.navbar-link:nth-child(4)').css('transform', 'translateY(-150px)');
                },50);                               
            }, 300);
            setTimeout(function () {
                $('.navbar-link:nth-child(5)').css('opacity', '0');
                setTimeout(function () {
                    $('.navbar-link:nth-child(5)').css('transform', 'translateY(-150px)');
                },50);                              
            }, 400);



            setTimeout(function () {
                $('.nav-items-wrapper').css('opacity', '0');
            }, 1000);
            setTimeout(function () {
                $('.nav-items-wrapper').hide();
            }, 1500);
        } else {
            $('.navbar-link').css('transform', 'translateY(150px)');
            $(this).addClass('show');
            $('.nav-items-wrapper').show();
            setTimeout(function () {
                $('.nav-items-wrapper').css('opacity', '1');                
            }, 100);
            setTimeout(function () {
                $('.navbar-link:nth-child(1)').css('opacity', '1');
                setTimeout(function () {
                    $('.navbar-link:nth-child(1)').css('transform', 'translateY(0)');
                },50);
            }, 700);
            setTimeout(function () {
                $('.navbar-link:nth-child(2)').css('opacity', '1');
                setTimeout(function () {
                    $('.navbar-link:nth-child(2)').css('transform', 'translateY(0)');
                },50);                                
            }, 800);
            setTimeout(function () {
                $('.navbar-link:nth-child(3)').css('opacity', '1');
                setTimeout(function () {
                    $('.navbar-link:nth-child(3)').css('transform', 'translateY(0)');
                },50);                               
            }, 900);
            setTimeout(function () {
                $('.navbar-link:nth-child(4)').css('opacity', '1');
                setTimeout(function () {
                    $('.navbar-link:nth-child(4)').css('transform', 'translateY(0)');
                },50);                               
            }, 1000);
            setTimeout(function () {
                $('.navbar-link:nth-child(5)').css('opacity', '1');
                setTimeout(function () {
                    $('.navbar-link:nth-child(5)').css('transform', 'translateY(0)');
                },50);                              
            }, 1100);
        }
    });
});