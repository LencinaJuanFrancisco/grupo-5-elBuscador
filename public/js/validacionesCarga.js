window.addEventListener("load", function () {
  //const Swal = require("sweetalert2");
  let form = document.querySelector("form.form-carga");

  let nombre = document.querySelector("input.nombreProducto");
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

  let detalle = document.querySelector("textarea.detalleProducto");
  let eDetalle = document.querySelector(".errorDetalleLongitud");

  detalle.addEventListener("blur", () => {
    eDetalle.classList.add(".visible");
    if (detalle.value.length < 20) {
      detalle.classList.add("invalido");
      detalle.classList.remove("valido");
      eDetalle.classList.remove("visible");
    } else {
      detalle.classList.remove("invalido");
      detalle.classList.add("valido");
      eDetalle.classList.add("visible");
    }
  });

  let imagen = document.querySelector("input.imgPrincipal");

  let imagen_ext = document.querySelector("input.imgPrincipal").value;

  //vamos a empezar a leerdesde el punto(.) y lo pasamos a minuscula para compararlo con el array de extenciones
  let img_ext = imagen_ext.substring(imagen_ext.lastIndexOf(".")).toLowerCase;
  let eImagen = document.querySelector(".errorImagen");

  let extenciones_validas = [".jpg", ".png", ".gif"];

  imagen.addEventListener("blur", () => {
    if (imagen.value == "") {
      imagen.classList.add("invalido");
      imagen.classList.remove("valido");
      eImagen.classList.remove("visible");
    } else if (extenciones_validas.includes(img_ext)) {
      console.log("-----*****extencion de la imagen------------------");

      console.log("true");
    } else {
      imagen.classList.remove("invalido");
      imagen.classList.add("valido");
      eImagen.classList.add("visible");
    }
  });

  form.addEventListener("submit", (e) => {
    if (
      nombre.classList.contains("valido") &&
      detalle.classList.contains("valido") &&
      imagen.classList.contains("valido")
    ) {
      e.preventDefault();
      Swal.fire({
        title: "El archivo fuecreao con exito!",
        icon: "success",

        timer: 3000,
      });
      form.submit();
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
