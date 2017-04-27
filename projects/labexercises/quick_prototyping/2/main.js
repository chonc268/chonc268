var date = new Date();

setInterval(function(){
  rotateGridObjects();
  //console.log('function is running');
}, 1);
drawGridObjects();

function updateTime() {
  date = new Date();
  $('.time-gmt').html( date.toGMTString() );
  $('.time-seconds').html( date.getTime() );
}

$(function() {
  updateTime();
  setInterval(updateTime, 50);

  $('.month').html( date.getMonth() );
  $('.day').html( date.getDate() );
  $('.year').html( date.getUTCFullYear() );
});

function rotateGridObjects(){
  var now = new Date();
  var second = now.getSeconds();
  //console.log(second);
  $('.random').css('transform','rotate(' + second*10 + 'deg)');
}

function drawGridObjects(){
  for (j = 0; j < 1; j++) {
    for (i = 0; i < 14; i++) {
      $("body").append( "<div class='element' style='left:" + i*7 + "vw; top:" + j*100 + "px;'></div>" );
      // console.log("element " + j + ", " + i + " added");
    }
  }
}


