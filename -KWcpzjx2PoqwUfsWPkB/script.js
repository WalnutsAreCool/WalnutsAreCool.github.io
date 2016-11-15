var shown = true
setInterval(function() {
  if (shown) {
    $(".blinking").css({"visibility": "hidden"});
    shown = false;
  } else {		
    $(".blinking").css({"visibility": "visible"});
    shown = true;
  }
}, 200)


var lettersToFade = $(".by-letter-fade").children();
var index = 0
setInterval(function() {
  if (index >= lettersToFade.length) {
    index = 0
  }

  var letterToFade = $(lettersToFade[index]);

  letterToFade.animate({"opacity": "0"}, {
    complete: function() {
      letterToFade.animate({opacity: "1"})
    }
  }) 	

  index = index + 1
}, 500)


var english = true
changeLanguage(function() {
  if (english) {
    $(".customFX").html(你好);
    english = false;
  } else {		
    $(".customFX").html(Hello);
    english = true;
  }
}, 200)