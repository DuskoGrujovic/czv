// Choose game
$(".game-item").on("click", function() {
  $(".game-item").removeClass("active");
  $(this).addClass("active");
});

// Choose team
$(".team-item").on("click", function() {
  $(".team-item").removeClass("active");
  $(this).addClass("active");
});

// Choose team category
$(".team-categories").on("click", function() {
  $(".team-categories").removeClass("active");
  $(this).addClass("active");
});

// Choose team game
$(".team-game-item").on("click", function() {
  $(".team-game-item").removeClass("active");
  $(this).addClass("active");
});

$("#game-lol").on("click", function() {
  $(".score-list, .choose-team").removeClass("csgo");
});

$("#game-csgo").on("click", function() {
  $(".score-list, .choose-team").addClass("csgo");
});

// Get current year for footer
$(".currentYear").text( (new Date).getFullYear() );