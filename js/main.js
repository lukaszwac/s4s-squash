  $(document).ready(function () {
      console.log('hola!');

      navbarClick();
      historyClick();

      if ($(document).width() >= 790) {
          setTimeout(function () {
              headerAnimationLarge();
              showMenu();
          }, 500);
          setTimeout(function () {
              sectionShow();
          }, 1000);

      } else if ($(document).width() < 790) {
          setTimeout(function () {
              headerAnimationMedium();
              showMenu();
          }, 500);
          setTimeout(function () {
              sectionShow();
          }, 8000);
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

              navToggler.addClass('rotated fixed');

              mainMenu.animate({
                  minHeight: "100vh"
              }, 1000);

              menuContainer.css({
                  "display": "flex"
              })

              menuList.delay(250).fadeIn(1200);
              socialIcons.delay(400).fadeIn(1000);

              $(this).removeClass('active')

          } else {
              menuList.fadeOut(50);
              socialIcons.fadeOut(50);

              mainMenu.animate({
                  minHeight: "50px"
              }, 400);

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
          "zIndex": "1000"
      })
      mainMenu.delay(2000).animate({
          opacity: "1"
      }, 1800)
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
                          $('.header-content').addClass('visible');

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
                          }, 800, function () {
                              $('#main-header .header-logo p').fadeIn(800);
                              $('#main-header .header-left').animate({
                                  opacity: '1'
                              });
                              $('#main-header .ball').animate({
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
                      width: '355px',
                      opacity: '1',
                      letterSpacing: '4px'

                  }, 1300, function () {
                      setTimeout(function () {
                          $('.header-anim').remove();
                          $('.header-content.header-right').css({
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
                          $('#main-header .header-logo p').delay(900).fadeIn(800);
                          $('.header-line').delay(900).animate({
                              height: "85%"
                          }, 800, function () {
                              $('#main-header .ball').animate({
                                  opacity: '1'
                              });
                              $('#main-header .header-content.header-left').css({
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

  function sectionShow() {
      $('section').fadeIn(800);
      $('section').css({
          "display": "flex"
      })
  }

  function historyClick() {
      var dotsTable = $('.dot'),
          happen = $('.happen'),
          textInDot = $('.dot-text p');

      dotsTable.click(function () {

          if ($(this).hasClass('active')) {
//              console.log($(textInDot).index());
              
          } else {
              var buttonNum = $(this).index(),
                  paragraphNum = textInDot[buttonNum],
                  headerText = $(this).text();
              
               $(happen).animate({
                  opacity: "0"
              }, 500);
              
              $(textInDot).animate({
                  opacity: "0"
              }, 500, function(){
                  $(happen).text(headerText);
              });
              
              dotsTable.removeClass('active');
              $(this).addClass('active');
              $(paragraphNum).animate({
                  opacity: "1"
              }, 500);
              
              $(happen).animate({
                  opacity: "1"
              }, 500);
              
          }
      })
  }

