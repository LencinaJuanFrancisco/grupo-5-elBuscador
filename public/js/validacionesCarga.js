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

// validaciones input precio
  let precio = document.querySelector(".precio-producto");
  let ePrecio = document.querySelector(".errorPrecio");

  precio.addEventListener("blur", () => {
    ePrecio.classList.add(".visible");
    if (precio.value.length < 1) {
      precio.classList.add("invalido");
      precio.classList.remove("valido");
      ePrecio.classList.remove("visible");
    } else {
      precio.classList.remove("invalido");
      precio.classList.add("valido");
      ePrecio.classList.add("visible");
    }
  });

// validaciones input cantidad


  let cantidad = document.querySelector(".cantidad-producto");
  let eCantidad = document.querySelector(".errorCantidad");

  cantidad.addEventListener("blur", () => {
    eCantidad.classList.add(".visible");
    if (cantidad.value.length < 1) {
      cantidad.classList.add("invalido");
      cantidad.classList.remove("valido");
      eCantidad.classList.remove("visible");
    } else {
      cantidad.classList.remove("invalido");
      cantidad.classList.add("valido");
      eCantidad.classList.add("visible");
    }
  });

  

  // validaciones front talle
  // let selectTalle = document.querySelector(".talle-selector");
  // let eTalle = document.querySelector(".errorTalle");

  // selectTalle.addEventListener("blur", () => {
  //   eTalle.classList.add(".visible");
  //   if (selectTalle.value !== "talle") {
  //     selectTalle.classList.remove("invalido");
  //     selectTalle.classList.add("valido");
  //     eTalle.classList.add("visible");

  //   } else {
  //     selectTalle.classList.add("invalido");
  //     selectTalle.classList.remove("valido");
  //     eTalle.classList.remove("visible");
  //   }
  // });

    // validaciones front colores
    // let selectColor = document.querySelector(".color-selector");
    // let eColor = document.querySelector(".errorColor");
  
    // selectColor.addEventListener("blur", () => {
    //   eColor.classList.add(".visible");
    //   if (selectColor.value == "red") {
    //     selectColor.classList.remove("invalido");
    //     selectColor.classList.add("valido");
    //     eColor.classList.add("visible");
  
    //   } else {
    //     selectColor.classList.add("invalido");
    //     selectColor.classList.remove("valido");
    //     eColor.classList.remove("visible");
    //   }
    // });


// validaciones imagen
  let imagen = document.querySelector("input.imgPrincipal");
  let eImagen = document.querySelector(".errorImagen");
  let extenciones_validas = [".jpg", ".jpeg", ".png", ".gif"];

  imagen.addEventListener("blur", () => {
    let imagen_ext = document.querySelector("input.imgPrincipal").value;
    let img_ext = imagen_ext.substr(imagen_ext.lastIndexOf("."));
    if (imagen.value != "" && extenciones_validas.includes(img_ext)) {
      imagen.classList.remove("invalido");
      imagen.classList.add("valido");
      eImagen.classList.add("visible");
    } else {
      imagen.classList.add("invalido");
      imagen.classList.remove("valido");
      eImagen.classList.remove("visible");
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
        title: "El archivo fue creao con exito!",
        icon: "success",

        timer: 3000,
      }).then(()=>{
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
