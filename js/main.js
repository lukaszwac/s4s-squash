  $(document).ready(function () {
      historyClick();
      sectionShow();
      count();
      menuExpadn();
      menuElementsClick();

      if ($(document).width() >= 790) {
          setTimeout(function () {
              headerAnimationLarge();

          }, 500);

      } else if ($(document).width() < 790) {
          setTimeout(function () {
              headerAnimationMedium();

          }, 500);
      }

  })


  var mainMenu = $('#main-navbar'),
      navToggler = $('.nav-toggler'),
      textAnim = $('.text-anim');


  // Rozwijalne Menu
  function menuExpadn() {

      $(navToggler).click(function () {

          if ($(this).hasClass('active')) {
              menuColapse();


          } else {
              menuUp();

          }

      })
  }

  function menuColapse() {
      $('.cross-element').animate({
          top: "50%"
      }, 130, function () {
          $({
              deg: 0
          }).animate({
              deg: -45
          }, {
              duration: 100,
              step: function (now) {
                  $('.cross-element:nth-child(1)').css({
                      transform: "rotate(" + now + "deg)"
                  });
              }
          });
          $({
              deg: 0
          }).animate({
              deg: 45
          }, {
              duration: 100,
              step: function (now) {
                  $('.cross-element:nth-child(2)').css({
                      transform: "rotate(" + now + "deg)"
                  });
              }
          });
      });

      $('#main-navbar').animate({
          height: "100vh",
          opacity: "1"
      }, 300, function () {
          $('.menu-container').animate({
              opacity: "1"
          }, 400)
          $(navToggler).removeClass('active');
      });
  }

  function menuUp() {
      $({
          deg: -45
      }).animate({
          deg: 0
      }, {
          duration: 100,
          step: function (now) {
              $('.cross-element:nth-child(1)').css({
                  transform: "rotate(" + now + "deg)"
              });
          }
      });
      $({
          deg: 45
      }).animate({
          deg: 0
      }, {
          duration: 100,
          step: function (now) {
              $('.cross-element:nth-child(2)').css({
                  transform: "rotate(" + now + "deg)"
              });
          }
      });
      $('.cross-element:nth-child(1)').animate({
          top: "0"
      })

      $('.cross-element:nth-child(2)').animate({
          top: "100%"
      });
      $('.menu-container').animate({
          opacity: "0"
      }, 200, function () {
          $('#main-navbar').animate({
              height: "0vh",
              opacity: "0.3"
          }, 300);
      })
      $(navToggler).addClass('active');
  }


  function menuElementsClick() {
      var menuLinks = $('.smooth');

      $(menuLinks).click(function (event) {
          event.preventDefault();

          var goTo = $($(this).attr('href'));

          $('html, body').delay(300).animate({
              scrollTop: $(goTo).offset().top
          }, 800);

          menuUp();
      })
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
                              $('#main-header .button-holder').delay(900).animate({
                                  opacity: "1"
                              }, 800);
                              $('#main-header .header-left').animate({
                                  opacity: '1'
                              });
                              $('#main-header .ball').animate({
                                  opacity: '1'
                              });
                              $('body').removeClass();
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
                          $('#main-header .button-holder').delay(900).animate({
                              opacity: "1"
                          }, 900);
                          $('.header-line').delay(900).animate({
                              height: "85%"
                          }, 800, function () {
                              $('#main-header .ball').animate({
                                  opacity: '1'
                              });
                              $('#main-header .header-content.header-left').css({
                                  opacity: '1'
                              });
                              $('body').removeClass();
                          })
                      }, 800)
                  })

              }, 200);
          })
      })
      clearTimeout();
  }


  function historyClick() {
      var dotsTable = $('.dot'),
          happen = $('.happen'),
          textInDot = $('.dot-text p');

      dotsTable.click(function () {

          if ($(this).hasClass('active')) {

          } else {
              var buttonNum = $(this).index(),
                  paragraphNum = textInDot[buttonNum],
                  headerText = $(this).text();

              dotsTable.removeClass('active');
              $(this).addClass('active');

              $(happen).animate({
                  opacity: "0"
              }, 200);

              $(textInDot).animate({
                  opacity: "0"
              }, 200, function () {
                  $(happen).text(headerText);
              });


              $(paragraphNum).animate({
                  opacity: "1"
              }, 200);

              $(happen).animate({
                  opacity: "1"
              }, 200);

          }
      })
  }

  function sectionShow() {
      $(window).scroll(function () {

          $('.hideme').each(function (i) {
              var bottom_of_object = $(this).offset().top + $(this).outerHeight() - ($(this).outerHeight() * 0.7);

              var bottom_of_window = $(window).scrollTop() + $(window).height();

              if (bottom_of_window > bottom_of_object) {

                  $(this).animate({
                      'opacity': '1'
                  }, 2000);
              }

          })


      })
  }

  function count() {
      $('.number-show button').click(function () {
          $('.loader').animate({
              opacity: "0"
          }, 300)

          $('.procent > .temp-anim').each(function () {
              var $this = $(this);

              $(this).delay(300).animate({
                  opacity: "1"
              }, 500)
              $({
                  Counter: 0
              }).animate({
                  Counter: $this.text()
              }, {
                  duration: 2000,
                  easing: 'swing',
                  step: function () {
                      $this.text(Math.ceil(this.Counter));
                  }
              });
          });
          increase();

          function increase() {
              var balls = $('.procent > .temp-anim')[3];

              setInterval(function () {
                  var num = parseInt($(balls).text());
                  num++;
                  $(balls).text(num);
              }, 1500)
          }

      })
  }
