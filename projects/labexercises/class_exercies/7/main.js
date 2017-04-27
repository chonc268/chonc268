$(function() {
    $(".button").click(function(GetValue){

           var items = $("a");
    var item = Math.floor(Math.random() * items.length);
      $(items).css({backgroundColor:''})
      $(items).css({backgroundColor:"#6A37B7", color:"white"});

        });
    });

console.log("serioulsy?")
