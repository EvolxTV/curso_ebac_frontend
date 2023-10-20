document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("form-hello")
    .addEventListener("submit", function (ev) {
      ev.preventDefault();
      alert("HELLO :D");
    });
});
