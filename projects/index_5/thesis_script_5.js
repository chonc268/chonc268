$(document).on("scroll", function() {

  var pixels = $(document).scrollTop()

  var font = pixels / 10 + 12

  $("div.box").css("width", font)
  $("div.box").css("height", font)


})
