var main = function() {
    // navigate nav

    $("#nav a span").click(function() {
      var firstChar = $(this)
        .text()
        .charAt(0);
      var newPos = 0;
      switch (firstChar) {
        case "I":
          newPos = $("#about").offset().top;
          break;
        case "R":
          newPos = $("#researches").offset().top;
          break;
        case "P":
            newPos = $("#projects").offset().top;
            break;
        case "C":
          newPos = $("#contact").offset().top;
          break;       
      }
      newPos -= $("header").outerHeight();
      $(document).scrollTop(newPos);
    });
  };
  
  $(document).ready(main);
  