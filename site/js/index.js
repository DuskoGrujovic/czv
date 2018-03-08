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

$("#game-lol").on("click", function() {
  $(".score-list, .choose-team").removeClass("csgo");
});

$("#game-csgo").on("click", function() {
  $(".score-list, .choose-team").addClass("csgo");
});