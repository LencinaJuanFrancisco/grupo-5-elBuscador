window.addEventListener("load", function () {
  //const Swal = require("sweetalert2");
  let form = document.querySelector("form.formulario");

  // *************************
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  // *****************************

  let email = document.querySelector("input.email");
  let eEmail = document.querySelector(".errorEmail");
  let eEmailValido = document.querySelector(".errorEmailValido");
  //var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  email.addEventListener("blur", () => {
    eEmail.classList.add("visible");

    if (email.value == "") {
      email.classList.add("invalido");
      email.classList.remove("valido");
      eEmail.classList.remove("visible");
    } else if (!validateEmail(email.value)) {
      console.log("email.value------" + email.value);
      console.log(
        "validateEmail(email.value)------" + validateEmail(email.value)
      );
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
    } else if (contraseña.value.length < 8) {
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
    if (
      email.classList.contains("valido") &&
      contraseña.classList.contains("valido")
    ) {
      // console.log(nombre.classList.contains("valido"));
      // console.log(avatar.classList.contains("valido"));
      // console.log(email.classList.contains("valido"));
      // console.log(contraseña.classList.contains("valido"));
      e.preventDefault();
      Swal.fire({
        title: "Bienvenido!",
        text: "Usuario creado con exito!",
        icon: "success",
        timer: 3000,
      })
      .then(() => {
        form.submit();
    })
    } else {
      // console.log(nombre.classList.contains("valido"));
      // console.log(avatar.classList.contains("valido"));
      // console.log(email.classList.contains("valido"));
      // console.log(contraseña.classList.contains("valido"));
      e.preventDefault();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe completar todos los campos!",
      });
    }
  });
});
