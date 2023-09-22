$(document).ready(function () {
  $("form").on("submit", function (ev) {
    ev.preventDefault();
    const inputValue = $("#task-input").val();

    if (inputValue) {
      const novoItem = $("<li style='display:none'></li>");
      $(novoItem).html(inputValue);
      $(novoItem).appendTo("ul");
      $(novoItem).fadeIn();
      $("#task-input").val("");
      $(novoItem).click(function () {
        $(this).toggleClass("done");
      });
    }
  });
});
