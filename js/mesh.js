$( document ).ready(function() {
    $('.menu-description').hide();
    
    $('.menu-item').click(function() {
        $('.menu-description').slideUp();
        $(this).find('.menu-description').slideToggle();
        $('.action-item').hide();
        
        $action = $(this).find('.menu-description').data('action-type');
        $('.' + $action).show();
    });
    
    $('.rain').click(function() {
        $(document).snowfall({image :"images/MESH.png", minSize: 10, maxSize:32});
    });
    
});