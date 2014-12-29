$( document ).ready(function() {
    $('.menu-description').hide();

    $('.menu-item').click(function() {

        if ($(this).find('.menu-description').length) {
          $('.menu-description').slideUp();

          $(this).find('.menu-description').slideToggle();

          $action = $(this).find('.menu-description').data('action-type');

          $('.' + $action).fadeTo('fast',1);
          $('.action-item').not($('.' + $action)).fadeTo('fast', 0.3);

          $('.opaque span').show();
          $('.action-item').removeClass('opaque');

          $('.action-item').not($('.' + $action)).addClass('opaque');
          $('.opaque span').hide();
        }
        else {
          $('.opaque span').show();
          $('.action-item').removeClass('opaque');

          $('.menu-description').slideUp();
          $('.' + $action).addClass('opaque');
          $('.action-item').fadeTo('fast',1);
        }

    });

    $snowfall = false;

    $('.rain').click(function() {
      if ($snowfall == false) {
        $(document).snowfall({
          image :"images/emojis/2.png", minSize: 10, maxSize:32
        });
        $snowfall = true;

        $('.snowfall-flakes').each(function(i, el){
          var randomNumber = Math.floor(Math.random() * 12) + 1;
          var newSrc = randomNumber + '.png';

          console.log(newSrc);

          $(this).attr("src", "images/emojis/" + newSrc);
        });


      } else {
        $(document).snowfall('clear');
        $snowfall = false;
      }

    });


    setTimeout(function() {

      $(".pop-up").fadeIn();

    }, 500)

    setTimeout(function() {


      $(".pop-up").addClass('animated zoomOutUp');

    }, 5500)

    $("body").click(function(){
      $(".pop-up").addClass('animated zoomOutUp');
    })

    $(".rain").click(function(){
      $(this).toggleClass("rotator")  ;
    })

});
