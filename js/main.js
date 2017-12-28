$(document).ready(function () {
    console.log('hola!');

    navbarClick();
    showMenu();

    if ($(document).width() >= 790) {
        headerAnimationLarge();
    } else if ($(document).width() < 790) {
        headerAnimationMedium();
    }
})


var mainMenu = $('#main-navbar'),
    navToggler = $('.nav-toggler'),
    menuContainer = $('.menu-container'),
    menuList = $('.menu-list'),
    socialIcons = $('.social-icons'),
    textAnim = $('.text-anim');


// Rozwijalne Menu
function navbarClick() {
    navToggler.on('click', function () {

        if ($(this).hasClass('active')) {

            navToggler.addClass('rotated');

            mainMenu.animate({
                height: "100vh"
            }, 1000);

            menuContainer.css({
                "display": "flex"
            })

            menuList.delay(250).fadeIn(1200);
            socialIcons.delay(400).fadeIn(1000);

            $(this).removeClass('active')

        } else {
            menuList.fadeOut(200);
            socialIcons.fadeOut(200);

            mainMenu.animate({
                height: "50px"
            });

            menuContainer.css({
                "display": "flex"
            })

            navToggler.removeClass('rotated');
            $(this).addClass('active')
        }

    })
}

function showMenu() {
    mainMenu.css({
        "zIndex": "10"
    })
    mainMenu.delay(2000).animate({
        opacity: "1"
    }, 1500)
}

function headerAnimationLarge() {
    textAnim.animate({
        width: '135px',
        opacity: '1',
        letterSpacing: '3'

    }, 1000, function () {
        textAnim.delay(300).animate({
            width: '0',
            opacity: '0.4',
            letterSpacing: '15'

        }, 400, function () {
            textAnim.html("let's join to" + "<span> us.</span>")
            setTimeout(function () {
                textAnim.animate({
                    width: '360px',
                    opacity: '1',
                    letterSpacing: '4px'

                }, 1300, function () {
                    setTimeout(function () {
                        $('.header-anim').remove();
                        $('.header-content').css({
                            "display": "flex"
                        })

                        $('#main-header h1:first-child').delay(100).fadeIn(400);
                        $('#main-header h1:nth-child(2)').delay(300).fadeIn(400);
                        $('#main-header h1:nth-child(3)').delay(600).fadeIn(400).animate({
                            letterSpacing: "25px",
                        }, 1000);

                        $('#main-header h1:first-child').delay(600).animate({
                            letterSpacing: "20px",
                        }, 1000);
                        $('#main-header h1:nth-child(2)').delay(600).animate({
                            letterSpacing: "15px",
                        }, 700);

                        $('.header-right').delay(800).animate({
                            paddingLeft: "3%"
                        }, 700);
                        $('.header-line').delay(900).animate({
                            height: "85%"
                        }, 800, function(){
                            $('#main-header .header-logo p').fadeIn(800);
                            $('#main-header .header-left').animate({
                                opacity: '1'
                            });
                        });
                        
                    }, 800)
                })

            }, 200);
        })
    })
    clearTimeout();
}

function headerAnimationMedium() {
    textAnim.animate({
        width: '120px',
        opacity: '1',
        letterSpacing: '3'

    }, 1000, function () {
        textAnim.delay(300).animate({
            width: '0',
            opacity: '0.4',
            letterSpacing: '15'

        }, 400, function () {
            textAnim.html("let's join to" + "<span> us.</span>")
            setTimeout(function () {
                textAnim.animate({
                    width: '360px',
                    opacity: '1',
                    letterSpacing: '4px'

                }, 1300, function () {
                    setTimeout(function () {
                        $('.header-anim').remove();
                        $('.header-content').css({
                            "display": "flex"
                        })

                        $('#main-header h1:first-child').delay(100).fadeIn(400);
                        $('#main-header h1:nth-child(2)').delay(300).fadeIn(400);
                        $('#main-header h1:nth-child(3)').delay(600).fadeIn(400).animate({
                            letterSpacing: "20px"
                        }, 1000);

                        $('#main-header h1:first-child').delay(600).animate({
                            letterSpacing: "20px"
                        }, 1000);
                        $('#main-header h1:nth-child(2)').delay(600).animate({
                            letterSpacing: "10px"
                        }, 700);

                        $('.header-right').delay(800).animate({
                            paddingLeft: "3%"
                        }, 700);
                        $('.header-line').delay(900).animate({
                            height: "85%"
                        }, 800,function(){
                            $('#main-header .header-logo p').fadeIn(800);
                            $('#main-header .header-left').animate({
                                opacity: '1'
                            });
                        })
                    }, 800)
                })

            }, 200);
        })
    })
    clearTimeout();
}
