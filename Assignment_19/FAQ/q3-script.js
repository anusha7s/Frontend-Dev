$(function() {
  // 1. Click question → toggle answer
  $(".question").click(function() {
    $(this).next(".answer").slideToggle(400);
  });

  // 2. Hover effect on question
  $(".question").hover(
    function() { $(this).css("color", "#007bff"); },
    function() { $(this).css("color", ""); }
  );

  // 3. Double-click any question → collapse all answers
  $(".question").dblclick(function() {
    $(".answer").slideUp(300);
  });

  // 4. Focus on input inside answer → highlight parent
  $(".answer input").focus(function() {
    $(this).closest(".faq-item").css({
      "background": "#e7f3ff",
      "border-radius": "8px",
      "padding": "10px"
    });
  });

  // 5. Blur (lose focus) → reset style
  $(".answer input").blur(function() {
    $(this).closest(".faq-item").css({
      "background": "",
      "padding": "",
      "border-radius": ""
    });
  });
});