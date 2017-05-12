$(document).ready(function(){

  setInterval(function(){
    rotateSeconds();
  }, 1000);

  setInterval(function(){
    rotateMinutes();
  }, 1000);

  setInterval(function(){
    rotateHours();
  }, 1000);

  setInterval(function(){
    rotateDate();
  }, 1000);

  setInterval(function(){
    rotateMonth();
  }, 1000);

  setInterval(function(){
    rotateYear();
  }, 1000);

//mouse interaction
  $('.space').mouseover(function(){
    $(this).css('background-color','white');
  });
  $('.space').mouseout(function(){
    $(this).css('background-color','white');
  });




  var now = new Date();
  var second = now.getSeconds();
  console.log(second);

  drawSeconds();
  rotateSeconds(second)

  var now = new Date();
  var minute = now.getMinutes();
  console.log(minute);

  drawMinutes();
  rotateMinutes(minute)

  var now = new Date();
  var hour = now.getHours();
  console.log(hour);

  drawHours();
  rotateHours(hour)

  var now = new Date();
  var date = now.getDate();
  console.log(date);

  drawDate();
  rotateDate(date)

  var now = new Date();
  var month = now.getMonth();
  console.log(month);

  drawMonth();
  rotateMonth(month)

  var now = new Date();
  var year = now.getFullYear();
  console.log(year);

  drawYear();
  rotateYear(year)


  /* -------------------------------------------
  Custom functions used above are defined below
  ----------------------------------------------- */
  function drawSeconds(){
    //append new element 1000 times (50*20=1000)
    for (j = 0; j < 50; j++){
      for (i = 0; i < 20; i++) {
        $("body").append( "<div class='element' style='left:" + i*5 + "vw; top:" + j*50 + "px;'></div>" );
        // console.log("element " + j + ", " + i + " added");
      }
    }
  }

  function drawMinutes(){
    //append new element 1000 times (50*20=1000)
    for (j = 0; j < 50; j++){
      for (i = 0; i < 20; i++) {
        $("body").append( "<div class='element' style='left:" + i*5 + "vw; top:" + j*50 + "px;'></div>" );
        // console.log("element " + j + ", " + i + " added");
      }
    }
  }

  function drawHours(){
    //append new element 1000 times (50*20=1000)
    for (j = 0; j < 50; j++){
      for (i = 0; i < 20; i++) {
        $("body").append( "<div class='element' style='left:" + i*5 + "vw; top:" + j*50 + "px;'></div>" );
        // console.log("element " + j + ", " + i + " added");
      }
    }
  }

  function drawDate(){
    //append new element 1000 times (50*20=1000)
    for (j = 0; j < 50; j++){
      for (i = 0; i < 20; i++) {
        $("body").append( "<div class='element' style='left:" + i*5 + "vw; top:" + j*50 + "px;'></div>" );
        // console.log("element " + j + ", " + i + " added");
      }
    }
  }

  function drawMonth(){
    //append new element 1000 times (50*20=1000)
    for (j = 0; j < 50; j++){
      for (i = 0; i < 20; i++) {
        $("body").append( "<div class='element' style='left:" + i*5 + "vw; top:" + j*50 + "px;'></div>" );
        // console.log("element " + j + ", " + i + " added");
      }
    }
  }

  function drawYear(){
    //append new element 1000 times (50*20=1000)
    for (j = 0; j < 50; j++){
      for (i = 0; i < 20; i++) {
        $("body").append( "<div class='element' style='left:" + i*5 + "vw; top:" + j*50 + "px;'></div>" );
        // console.log("element " + j + ", " + i + " added");
      }
    }
  }

function rotateSeconds(){
  var now = new Date();
  var second = now.getSeconds();
  //console.log(second);
  $('.second').css('transform','rotate(' + second*6 + 'deg)');
}

function rotateMinutes(){
  var now = new Date();
  var minute = now.getMinutes();
  //console.log(second);
  $('.minute').css('transform','rotate(' + minute*6 + 'deg)');
}

function rotateHours(){
  var now = new Date();
  var hour = now.getHours();
  //console.log(second);
  $('.hour').css('transform','rotate(' + hour*30 + 'deg)');
}

function rotateDate(){
  var now = new Date();
  var date = now.getDate();
  //console.log(second);
  $('.date').css('transform','rotate(' + date*12 + 'deg)');
}

function rotateMonth(){
  var now = new Date();
  var month = now.getMonth();
  //console.log(second);
  $('.month').css('transform','rotate(' + month*30 + 'deg)');
}

function rotateYear(){
  var now = new Date();
  var year = now.getFullYear();
  //console.log(second);
  $('.year').css('transform','rotate(' + date*3.6 + 'deg)');
}

  function drawRandomObject(){
    //store random values between 0 to 100, to rx and ry
    var color = "#000";
  }
});

