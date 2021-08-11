window.addEventListener("load", function () {
  let form = document.querySelector("form.formulario");

  form.addEventListener("submit", (e) => {
    const errors = [];

    let email = document.querySelector("input.email");

    if (email.value != /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i) {
      errors.push("Debe elegir un email válido");
    } else if (nombre.value.length < 5) {
      errors.push("El nombre debe contener mas de 5 caracteres");
    }


    let contraseña = document.querySelector("input.pass");

    if (contraseña.value == "") {
      errors.push("Debes ingresar una contraseña");
    }
    console.log("errores de validacion FRONT---------------------");
    console.log("--------" + errors);
    console.log("----------------------------------------****----");
    if (errors.length > 0) {
      e.preventDefault();

      let ulErrores = document.querySelector("div.errores ul");

      for (let i = 0; i < errors.length; i++) {
        ulErrores.innerHTML += "<li>" + errors[i] + "</li>";
      }
    }
  });
});