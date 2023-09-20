const form = document.getElementById("validate-form");

const messagePrint = document.querySelector(".message");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  let valorA = parseInt(document.getElementById("valor-a").value);
  let valorB = parseInt(document.getElementById("valor-b").value);
  messagePrint.style.backgroundColor = "";
  const sucessMessage = `O Valor de B (${valorB}) é maior que o valor A (${valorA})`;

  if (valorB > valorA) {
    messagePrint.innerHTML = sucessMessage;
    messagePrint.style.display = "block";
  } else {
    messagePrint.innerHTML = `O Valor de B (${valorB}) não é maior que o valor A (${valorA})`;
    messagePrint.style.backgroundColor = "red";
    messagePrint.style.display = "block";
  }
});

form.addEventListener("reset", function (ev) {
  messagePrint.style.display = "none";
});
