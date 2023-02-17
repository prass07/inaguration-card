$(".diya").on("click", () => {
  $(".flame").css("display", "block");
  $(".diya").css("filter", "none");
  $(".namaste-image").css("filter", "none");
  $(".welcome-text").css("color", "#ffa300");
  $(".welcome-message-container").css("cursor", "default");
});

//curtain opening effect
$(".rope").on("click", () => {
  $(".left-curtain, .right-curtain").css("width", "7%");
  $(".rope").css("display", "none");
  $(".container").css("cursor", "default");
  $(".welcome-message-container").css(
    "cursor",
    "url(./images/flame.png), auto"
  );
});
