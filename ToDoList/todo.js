$(document).ready(function () {




  $("#headname").keypress(function (e) {
    if(e.keyCode==13)
    {
      var s=$("#headname").val();
      $(".forms").append('<p>'+s+'</p>');

      $("#headname").val("");
    }

        $( "p" ).mouseover(function() {
        $(this).css("text-decoration","line-through");
      });

              $( "p" ).mouseout(function() {
              $(this).css("text-decoration","none");
            });

            $( "p" ).dblclick(function() {
            $(this).hide();
          });

  });


});
