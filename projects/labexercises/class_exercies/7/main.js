$(function() {
    $(".button").click(function(GetValue){

           var items = $("a");
    var item = Math.floor(Math.random() * items.length);
          $(items[item]).css({backgroundColor:"#6A37B7", color:"white"});
        });
    });

console.log("serioulsy?")
