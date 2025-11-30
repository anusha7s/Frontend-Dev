$(document).ready(function() {
  // 1. Time-based greeting on load
  const hour = new Date().getHours();
  let greeting = "Good Evening";
  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";
  
  $("#greeting").text(greeting + ", Visitor!");

  // 2. Change to motivational quote
  $("#changeBtn").click(function() {
    $("#greeting").text("Believe you can and you're halfway there!");
  });

  // 3. Toggle welcome message
  $("#toggleBtn").click(function() {
    $("#message").toggle(500);
  });

  // 4. Alert when greeting is clicked
  $("#greeting").click(function() {
    alert("Welcome to our website!");
  });
});