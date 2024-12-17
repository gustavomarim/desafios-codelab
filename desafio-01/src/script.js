const $favoriteButtons = $(".favoriteBtn");

$favoriteButtons.each((_, favoriteBtn) => {
  $(favoriteBtn).on("click", () => {
    $(favoriteBtn).parent().toggleClass("selectedCard");

    if ($(favoriteBtn).parent().hasClass("selectedCard")) {
      $(favoriteBtn).attr("src", "./assets/icons/heart-selected-icon.svg");
    } else {
      $(favoriteBtn).attr("src", "./assets/icons/heart-icon.svg");
    }
  });
});
