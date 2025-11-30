$(function() {
  // 1. Click → highlight
  $(".product").click(function() {
    $(".product").removeClass("highlight");
    $(this).addClass("highlight");
  });

  // 2. Hover → show details
  $(".product").hover(
    function() { $(this).append("<p class='info'>Click to select • Hover for info</p>"); },
    function() { $(this).find(".info").remove(); }
  );

  // 3. Toggle favorite
  $(".fav").click(function(e) {
    e.stopPropagation();
    $(this).toggleClass("selected");
  });

  // 4. Style discounted products
  $(".product.discount").addClass("discounted");

  // 5. Alert if out of stock
  $(".product").click(function() {
    if ($(this).data("stock") === "out") {
      alert("Sorry, this product is out of stock!");
    }
  });
});