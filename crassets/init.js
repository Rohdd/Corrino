/*- Using jQuery in WordPress --------- */

/*jQuery(function($){
      //code here
})*/

/* Initialize */
(function($) {
  window.onload = function() {

  

    /*- Slick Settings ----------------------*/
    $('.responsive').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
     // autoplay: true,
     // autoplaySpeed: 4000,
     // centerMode: true,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    /*- Poptrox Init ----------------------- */
    $('.gallery').poptrox();


    /*- Side Scroll ------------------------ */
    var length = $('#left').height() - $('#side').height() + $('#left').offset().top;
    var height = $('#side').height() + 'px';

    $(window).scroll(function () {

        var scroll = $(this).scrollTop();

        if (scroll < $('#left').offset().top) {

            $('#side').css({
                'position': 'absolute',
                'top': '0'
            });

        } /*else if (scroll > length) {

            $('#side').css({
                'position': 'absolute',
                'bottom': '0',
                'top': 'auto'
            });

        }*/ else {

            $('#side').css({
                'position': 'fixed',
                'top': '0',
                'height': height
            });

        }
    });


    /*- Angular ---------------------------- */
    /*    var app = angular.module('chat', []);
        app.controller('chatCtrl', function(){
          this.msg = messages;
        });

        messages = [
          {
            name: nick,
            message: message
          }
        ];*/
  }
})(jQuery);
