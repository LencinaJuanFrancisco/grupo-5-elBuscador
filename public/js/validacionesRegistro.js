window.addEventListener("load", function () {
  //const Swal = require("sweetalert2");
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
  let extenciones_validas = [".jpg", ".jpeg", ".png", ".gif"];

  avatar.addEventListener("blur", () => {
    let imagen_ext = document.querySelector("input.avatar").value;
    let img_ext = imagen_ext.substr(imagen_ext.lastIndexOf("."));
    if (avatar.value != "" && extenciones_validas.includes(img_ext)) {
      avatar.classList.remove("invalido");
      avatar.classList.add("valido");
      eAvatar.classList.add("visible");
    } 
    else {
      avatar.classList.add("invalido");
      avatar.classList.remove("valido");
      eAvatar.classList.remove("visible");
    }
  });

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

  let contrase??a = document.querySelector("input.password");
  // span de los errores
  let ePass = document.querySelector(".errorPass");
  let ePassValido = document.querySelector(".errorPassValido");

  contrase??a.addEventListener("blur", () => {
    ePass.classList.add("visible");
    ePassValido.classList.add("visible");

    if (contrase??a.value == "") {
      contrase??a.classList.add("invalido");
      contrase??a.classList.remove("valido");
      ePass.classList.remove("visible");
    } else if (contrase??a.value.length < 8) {
      contrase??a.classList.add("invalido");
      contrase??a.classList.remove("valido");
      ePassValido.classList.remove("visible");
    } else {
      contrase??a.classList.remove("invalido");
      contrase??a.classList.add("valido");
      ePassValido.classList.add("visible");
    }
  });

  form.addEventListener("submit", (e) => {
    if (
      nombre.classList.contains("valido") &&
      avatar.classList.contains("valido") &&
      email.classList.contains("valido") &&
      contrase??a.classList.contains("valido")
    ) {
      // console.log(nombre.classList.contains("valido"));
      // console.log(avatar.classList.contains("valido"));
      // console.log(email.classList.contains("valido"));
      // console.log(contrase??a.classList.contains("valido"));
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
      // console.log(contrase??a.classList.contains("valido"));
      e.preventDefault();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe completar todos los campos!",
      });
    }
  });
});
