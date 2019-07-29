$(document).ready(function(){
    $("#1").click(function(){
      $(".good").toggle();
    });
    $("#2").click(function(){
        $(".nice").toggle();
      });
      $("#3").click(function(){
        $(".best").toggle();
      });
      function studio(){
        var name = document.getElementsByClassName("giant").value;
        var message= document.getElementById("area").value
      }
      $('#bal').hide();
      $('#11').animate({opacity:1});
      $("#11").hover(function () {
        $(this).stop().animate({opacity:0.4},600);
        $('#bal').fadeIn();
      },
      function(){
        $(this).stop().animate({opacity:1},200);
        $('#bal').fadeOut();
      });
      $('#gap').hide();
      $('#12').animate({opacity:1});
      $("#12").hover(function () {
        $(this).stop().animate({opacity:0.4},600);
        $('#gap').fadeIn();
      },
      function(){
        $(this).stop().animate({opacity:1},200);
        $('#gap').fadeOut();
      });
      $('#sal').hide();
      $('#13').animate({opacity:1});
      $("#13").hover(function () {
        $(this).stop().animate({opacity:0.4},600);
        $('#sal').fadeIn();
      },
      function(){
        $(this).stop().animate({opacity:1},200);
        $('#sal').fadeOut();
      });
      $('#nal').hide();
      $('#14').animate({opacity:1});
      $("#14").hover(function () {
        $(this).stop().animate({opacity:0.4},600);
        $('#nal').fadeIn();
      },
      function(){
        $(this).stop().animate({opacity:1},200);
        $('#nal').fadeOut();
      });

      $('#web').hide();
      $('#15').animate({opacity:1});
      $("#15").hover(function () {
        $(this).stop().animate({opacity:0.4},600);
        $('#web').fadeIn();
      },
      function(){
        $(this).stop().animate({opacity:1},200);
        $('#web').fadeOut();
      });
      $('#form').hide();
      $('#16').animate({opacity:1});
      $("#16").hover(function () {
        $(this).stop().animate({opacity:0.4},600);
        $('#form').fadeIn();
      },
      function(){
        $(this).stop().animate({opacity:1},200);
        $('#form').fadeOut();
      });
      $('#mock').hide();
      $('#17').animate({opacity:1});
      $("#17").hover(function () {
        $(this).stop().animate({opacity:0.4},600);
        $('#mock').fadeIn();
      },
      function(){
        $(this).stop().animate({opacity:1},200);
        $('#mock').fadeOut();
      });
      $('#gir').hide();
      $('#18').animate({opacity:1});
      $("#18").hover(function () {
        $(this).stop().animate({opacity:0.4},600);
        $('#gir').fadeIn();
      },
      function(){
        $(this).stop().animate({opacity:1},200);
        $('#gir').fadeOut();
      });
  });
  
  
  
