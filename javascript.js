$(window).on("load",function(){

var boxes = $(".box"),
    stage = $(".stage");

TweenLite.set(stage, {
  css: {
    perspective: 1100,
    transformStyle: "preserve-3d"
  }
});

boxes.each(function(index, element) {
  TweenLite.set(element, {
    css: {
      rotationY: index * 300 / 10,
      transformOrigin: "50% 50% -420"
    }
  });
  TweenMax.to(element, 50, {
    css: {
      z:0.01,
      rotationY: "+=359"
    },
    repeat: -1, // 20
    ease: Linear.easeNone
  });
});

});
