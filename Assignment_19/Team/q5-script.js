$(function() {
  // 1. Click a manager → highlight all direct reports
  $(".manager").click(function() {
    $(this).nextUntil(".manager").addClass("highlight-report");
    setTimeout(() => $(".employee").removeClass("highlight-report"), 2000);
  });

  // 2. Hover on employee → show contact info using .next()
  $(".employee").hover(
    function() {
      $(this).append("<span class='contact'> • contact@company.com</span>");
    },
    function() {
      $(this).find(".contact").remove();
    }
  );

  // 3. Click department name → highlight all members using .children()
  $("h3").click(function() {
    $(this).next(".team-list").children().toggleClass("dept-highlight");
  });

  // 4. Click button → highlight random employee's siblings
  $("#random").click(function() {
    const employees = $(".employee");
    const randIndex = Math.floor(Math.random() * employees.length);
    employees.eq(randIndex).siblings(".employee").addClass("sibling-glow");
    setTimeout(() => employees.removeClass("sibling-glow"), 2000);
  });

  // 5. Double-click department → collapse/expand team using .parent() and .find()
  $("h3").dblclick(function() {
    $(this).next(".team-list").find(".employee").slideToggle(400);
  });
});