$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#cep").mask("00000-000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
      },
      telefone: {
        required: true,
      },
      cpf: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true,
      },
    },
    messages: {
      nome: "Por favor insira seu Nome",
      email: "Por favor insira seu E-mail",
      telefone: "Por favor insira seu Telefone",
      cpf: "Por favor insira seu CPE",
      endereco: "Por favor insira seu Endereco",
      cep: "Por favor insira seu CEP",
    },
    submitHandler: function (form) {
      alert("Fomulário enviado");
      $("form input").val("");
    },
    invalidHandler: function (ev, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });
});
