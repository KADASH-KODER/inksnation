
function showNav(){
    $(".nav-page").fadeIn(500);
     $("#navbar").fadeOut(500);
     $("#part1").css("filter" , "blur(2px)");
}

function hideNav(){
    $(".nav-page").fadeOut(500); 
     $("#navbar").fadeIn(500);
    $("#frontPage").css({"filter" : "blur(0px)"});
}






function inksNodes(){
  $("#packy3").fadeIn(500);
   $("#packy2").fadeOut(500);
   $(".title").text("Inks Nodes Packages");
   $(".title").css("color","#ff00ff")
   $(".title").css("font-size","2em")
   $(".title").css("font-weight","800")
   
}

function livingNodes(){
  $("#packy2").fadeIn(500);
   $("#packy3").fadeOut(500);
   $(".title").text("Living Nodes Packages");
   $(".title").css("color","#ff00ff")
   $(".title").css("font-size","2em")
   $(".title").css("font-weight","800")
}


// $(document).ready(function() {
//     $("#myCarousel").on("slide.bs.carousel", function(e) {
//       var $e = $(e.relatedTarget);
//       var idx = $e.index();
//       var itemsPerSlide = 3;
//       var totalItems = $(".carousel-item").length;
  
//       if (idx >= totalItems - (itemsPerSlide - 1)) {
//         var it = itemsPerSlide - (totalItems - idx);
//         for (var i = 0; i < it; i++) {
//           // append slides to end
//           if (e.direction == "left") {
//             $(".carousel-item")
//               .eq(i)
//               .appendTo(".carousel-inner");
//           } else {
//             $(".carousel-item")
//               .eq(0)
//               .appendTo($(this).find(".carousel-inner"));
//           }
//         }
//       }
//     });
//   });
  
