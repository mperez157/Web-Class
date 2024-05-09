$(document).ready(function(){

    $("#color1").click(function(){
        $(".bg-color1").addClass("color-show");
        $(".bg-color2").removeClass("color-show");
        $(".bg-color3").removeClass("color-show");
        $(".bg-color4").removeClass("color-show");
      });

    $("#color2").click(function(){
        $(".bg-color2").addClass("color-show");
        $(".bg-color1").removeClass("color-show");
        $(".bg-color3").removeClass("color-show");
        $(".bg-color4").removeClass("color-show");
      });

      $("#color3").click(function(){
        $(".bg-color3").addClass("color-show");
        $(".bg-color1").removeClass("color-show");
        $(".bg-color2").removeClass("color-show");
        $(".bg-color4").removeClass("color-show");
      });

      $("#color4").click(function(){
        $(".bg-color4").addClass("color-show");
        $(".bg-color1").removeClass("color-show");
        $(".bg-color2").removeClass("color-show");
        $(".bg-color3").removeClass("color-show");
      });

    $("#shape1").click(function(){
        $(".bg-shape1").addClass("shape-show");
        $(".bg-shape2").removeClass("shape-show");
        $(".bg-shape3").removeClass("shape-show");
        $(".bg-shape4").removeClass("shape-show");
      });

    $("#shape2").click(function(){
        $(".bg-shape2").addClass("shape-show");
        $(".bg-shape1").removeClass("shape-show");
        $(".bg-shape3").removeClass("shape-show");
        $(".bg-shape4").removeClass("shape-show");
      });

    $("#shape3").click(function(){
        $(".bg-shape3").addClass("shape-show");
        $(".bg-shape2").removeClass("shape-show");
        $(".bg-shape1").removeClass("shape-show");
        $(".bg-shape4").removeClass("shape-show");
      });

      $("#shape4").click(function(){
        $(".bg-shape4").addClass("shape-show");
        $(".bg-shape2").removeClass("shape-show");
        $(".bg-shape1").removeClass("shape-show");
        $(".bg-shape3").removeClass("shape-show");
      });

    $("#text1").click(function(){
        $(".bg-text1").addClass("text-show");
        $(".bg-text2").removeClass("text-show");
        $(".bg-text3").removeClass("text-show");
        $(".bg-text4").removeClass("text-show");
      });

    $("#text2").click(function(){
        $(".bg-text2").addClass("text-show");
        $(".bg-text1").removeClass("text-show");
        $(".bg-text3").removeClass("text-show");
        $(".bg-text4").removeClass("text-show");
      });

      $("#text3").click(function(){
        $(".bg-text3").addClass("text-show");
        $(".bg-text2").removeClass("text-show");
        $(".bg-text1").removeClass("text-show");
        $(".bg-text4").removeClass("text-show");
      });

      $("#text4").click(function(){
        $(".bg-text4").addClass("text-show");
        $(".bg-text2").removeClass("text-show");
        $(".bg-text1").removeClass("text-show");
        $(".bg-text3").removeClass("text-show");
      });


});



