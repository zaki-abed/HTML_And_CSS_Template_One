$(document).ready(function () {
  // Show "List" When Click On The Button
  $(".icon").click(function () {
    $(".list").fadeToggle();
  });

  // Show "Color Option Box" When Click On The Cog
  $(".cog").click(function () {
    $(".color-option").fadeToggle();
  });

  // Change Theme Color On Click
  var colorLi = $(".color-option ul li");
  colorLi.click(function(){
      $("link[href*='theme']").attr("href", $(this).attr("data-value"));
  })

  // Scroll To Top
  var scrollButton = $("#scroll-top");

  $(window).scroll(function(){
      if($(this).scrollTop() >= 700){
        scrollButton.show();
      }else{
        scrollButton.hide(); 
      }
  });
    scrollButton.click(function(){
      $("html, body").animate({scrollTop: 0}, 600);
  });

  // NiceScroll.js
  // $("body").niceScroll({
  //   cursorcolor:"var(--main-color)",
  //   cursorwidth:"10px",
  // });

});

// Loading Screen
$(window).load(function(){
    $('.loading, .loading .sk-chase').fadeOut(1000); 
});



