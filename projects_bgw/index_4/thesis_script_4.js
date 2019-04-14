$(document).on("mousemove", function (event) {

  $("img.square1").css("width", event.pageX)
  $("img.square1").css("height", event.pageY)

  $("img.square2").css("width", $(window).width() - event.pageX)
  $("img.square2").css("height", event.pageY)

  $("img.square3").css("width", event.pageX)
  $("img.square3").css("height", $(window).height() - event.pageY)

  $("img.square4").css("width", $(window).width() - event.pageX)
  $("img.square4").css("height", $(window).height() - event.pageY)

})
