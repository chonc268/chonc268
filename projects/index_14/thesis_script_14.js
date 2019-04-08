$("div.wilson").on("mouseenter", function () {
  $(this).addClass("animate")
})

$("div.wilson").on("animationend", function () {
  $(this).removeClass("animate")
})
