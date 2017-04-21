$(function() {
  $('.hello').click(function() {
    if ( $('body').hasClass('active') ) {
      $('body').removeClass('active').css('background', '');
    } else {
      $('body').addClass('active').css('background', '#FFD100');
    }
  });
});
