
$(function() {
 
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
      $("#page_top").fadeIn("fast");
    } else {
      $("#page_top").fadeOut("fast");
    }
 
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight();
 
    if ( scrollHeight - scrollPosition  <= footHeight ) {
      $("#page_top").css({
        "position":"absolute",
      });
    } else {
      $("#page_top").css({
        "position":"fixed",
      });
    }
  });
 
});