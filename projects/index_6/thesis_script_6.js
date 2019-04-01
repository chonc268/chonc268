// whene i move my mouse on the page, do something

$(document).on("mousemove", function (ev){

  var mouseX = ev.originalEvent.pageX
  var mouseY = ev.originalEvent.pageY

// go through all of images and work out the angle

  $("div").each(function () {
    var imgX = $(this).position().left + 70
    var imgY = $(this).position().top + 70


    var diffX = mouseX - imgX
    var diffY = mouseY - imgY

    var radians = Math.atan2(diffY, diffX)

    var angle = radians * 180 / Math.PI

    $(this).css("transform", "rotate(" + angle + "deg)")


  })
})
