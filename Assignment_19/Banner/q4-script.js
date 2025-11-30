$(function() {
  let index = 0;
  const banners = $(".banner");
  
  // 1-4: Manual controls
  $("#hide").click(() => banners.hide(500));
  $("#show").click(() => banners.show(500));
  $("#slide").click(() => banners.slideToggle(600));
  $("#fade").click(() => banners.fadeToggle(800));

  // 5. Auto-rotate every 5 seconds
  setInterval(() => {
    banners.eq(index).fadeOut(800);
    index = (index + 1) % banners.length;
    banners.eq(index).fadeIn(800);
  }, 5000);
});