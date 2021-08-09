window.addEventListener("load", function () {
  let form = document.querySelector("form.formulario");

  form.addEventListener("submit", (e) => {
    const errors = [];

    let nombre = document.querySelector("input.fullName");

    if (nombre.value == "") {
    } else if (nombre.value.length < 5) {
      errors.push("El nombre debe contener mas de 5 caracteres");
    }

    let avatar = document.querySelector("input.avatar");

    if (avatar.value == "") {
      errors.push("Debe seleccionar una imagen en su avatar");
    }

    let email = document.querySelector("input.email");

    if (email.value == /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i) {
    errors.push("Debes ingresar un mail válido");
    }

    let contraseña = document.querySelector("input.password");

    if (contraseña.value == "") {
      errors.push("Debes ingresar una contraseña");
    } else if(contraseña.value.length <8) {
      errors.push("La contraseña debe contener minimo 8 caracteres")}
    /*} else if(contraseña.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/){
      errors.push("La contraseña debe tener letras mayúsculas, minúsculas, un número y un carácter especial")
    }*/
      

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
