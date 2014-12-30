(function($){

  $.fn.shuffle = function() {

    var allElems = this.get(),
    getRandom = function(max) {
      return Math.floor(Math.random() * max);
    },
    shuffled = $.map(allElems, function(){
      var random = getRandom(allElems.length),
      randEl = $(allElems[random]).clone(true)[0];
      allElems.splice(random, 1);
      return randEl;
    });

    this.each(function(i){
      $(this).replaceWith($(shuffled[i]));
    });

    return $(shuffled);

  };

})(jQuery);

$( document ).ready(function() {

    $('.action-item').addClass('gray');
    $('.action-item').shuffle();

    $('.menu-description').hide();

    // click the menu item

    $('.menu-item').click(function() {

        if ($(this).find('.menu-description').length) {

          $('.action-item').addClass('gray');

          $('.menu-description').slideUp();

          $(this).find('.menu-description').slideToggle();

          $action = $(this).find('.menu-description').data('action-type');

          $('.' + $action).fadeTo('fast',1);
          $('.action-item').not($('.' + $action)).fadeTo('fast', 0.3);

          $('.opaque span.client').show();
          $('.action-item').removeClass('opaque');

          $('.' + $action).removeClass('gray');

          $('.action-item').not($('.' + $action)).addClass('opaque');
          $('.opaque span.client').hide();
        }
        else {
          $('.opaque span.client').show();

          $('.action-item').addClass('gray');

          $('.action-item').removeClass('opaque');

          $('.menu-description').slideUp();

          $action = $(this).find('.menu-description').data('action-type');

          $('.' + $action).addClass('opaque');

          $('.' + $action).removeClass('gray');

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

    }, 10500)

    $("body").click(function(){
      $(".pop-up").addClass('animated zoomOutUp');
    })

    $(".rain").click(function(){
      $(this).toggleClass("rotator")  ;
    })

});
