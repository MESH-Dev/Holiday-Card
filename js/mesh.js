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

    $('.rain').click(function() {
        $(document).snowfall({image :"images/MESH.png", minSize: 10, maxSize:32});
    });

    setTimeout(function() {

      $(".pop-up").fadeIn();

    }, 2000)

    $("body").click(function(){
      $(".pop-up").fadeOut();
    })


});
