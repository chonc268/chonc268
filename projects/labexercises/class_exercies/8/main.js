$(function() {
  var $html = $('html');
  var $percentageContainer = $('.percent');

  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var totalHeight = $(document).height();
    var windowHeight = $(window).height();
    var percentScrolled = scrollTop / (totalHeight - windowHeight);

    $percentageContainer.html( percentScrolled );

    $html.css('background', 'rgba(0, 0, 0, ' + percentScrolled + ')');
  });
});
