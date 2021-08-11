window.addEventListener("load", function () {
  // function ValidateEmail(mail) {
  //   if (
  //     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
  //       myForm.emailAddr.value
  //     )
  //   ) {
  //     return true;
  //   }

  //   return false;
  // }

  let form = document.querySelector("form.formulario");

  let nombre = document.querySelector("input.fullName");
  let eNombre = document.querySelector(".errorNombre");
  let eNombreLongitud = document.querySelector(".errorNombreLongitud");

  nombre.addEventListener("blur", () => {
    eNombre.classList.add("visible");
    eNombreLongitud.classList.add("visible");
    if (nombre.value == "") {
      // alert("Debe agregar un nombre");
      nombre.classList.add("invalido");
      nombre.classList.remove("valido");
      eNombre.classList.remove("visible");

      // errors.push("El nombre debe tener al menos 2 caracteres");
    } else if (nombre.value.length < 5) {
      //alert("El Nombre debe contener al menos 5 caracteres");
      nombre.classList.add("invalido");
      nombre.classList.remove("valido");
      eNombreLongitud.classList.remove("visible");
    } else {
      nombre.classList.remove("invalido");
      nombre.classList.add("valido");
      eNombreLongitud.classList.add("visible");
    }
  });

  let avatar = document.querySelector("input.avatar");
  let eAvatar = document.querySelector(".errorAvatar");

  avatar.addEventListener("blur", () => {
    if (avatar.value == "") {
      avatar.classList.add("invalido");
      avatar.classList.remove("valido");
      eAvatar.classList.remove("visible");
    } else {
      avatar.classList.remove("invalido");
      avatar.classList.add("valido");
      eAvatar.classList.add("visible");
    }
  });

  let email = document.querySelector("input.email");
  let eEmail = document.querySelector(".errorEmail");
  let eEmailValido = document.querySelector(".errorEmailValido");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  email.addEventListener("blur", () => {
    eEmail.classList.add("visible");

    if (email.value == "") {
      email.classList.add("invalido");
      email.classList.remove("valido");
      eEmail.classList.remove("visible");
    } else if (email.value == mailformat) {
      email.classList.add("invalido");
      email.classList.remove("valido");
      eEmailValido.classList.remove("visible");
    } else {
      email.classList.remove("invalido");
      email.classList.add("valido");
      eEmailValido.classList.add("visible");
    }
  });

  let contraseña = document.querySelector("input.password");
  // span de los errores
  let ePass = document.querySelector(".errorPass");
  let ePassValido = document.querySelector(".errorPassValido");

  contraseña.addEventListener("blur", () => {
    ePass.classList.add("visible");
    ePassValido.classList.add("visible");

    if (contraseña.value == "") {
      contraseña.classList.add("invalido");
      contraseña.classList.remove("valido");
      ePass.classList.remove("visible");
    } else if (contraseña.value.length < 7) {
      contraseña.classList.add("invalido");
      contraseña.classList.remove("valido");
      ePassValido.classList.remove("visible");
    } else {
      contraseña.classList.remove("invalido");
      contraseña.classList.add("valido");
      ePassValido.classList.add("visible");
    }
  });

  form.addEventListener("submit", (e) => {
    if (nombre.classList.replace("invalido")) {
      e.preventDefault();
      nombre.addEventListener("focus", () => {
        nombre.value = "Ingrese un nombre";
      });
    } else if (avatar.classList.replace("invalido")) {
      e.preventDefault();
      avatar.addEventListener("focus", () => {});
    } else if (email.value.classList.replace("invalido")) {
    } else {
      alert("usuario creado con exito!!!!");
    }
  });
});

