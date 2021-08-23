const express = require("express");

const app = express();
const path = require("path");
const routeIndex = require("./src/routers/index");
const routeProducto = require("./src/routers/productos");
const routeUsers = require("./src/routers/users");
const routeApiProducto = require("./src/routers/api/producto");
const routeApiUsuario = require("./src/routers/api/user");
const methodOverride = require("method-override");
const session = require("express-session");
const userLoggedMiddleware = require("./src/middelwares/userLoggedMiddleware");
//es para habilitar o desabilitar el user y el login dependiendo si esta o no esta
//logueado el usuario, se configura aqui xq es un middelware de app y no de ruta,
//ya que lo que vamos a usar ensta en el menu, y el menu se encuentra en toda la app
const cookies = require("cookie-parser");
const router = require("./src/routers/api/producto");

app.use(express.static(path.resolve(__dirname, "./public")));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "Nuestro mensaje secreto",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cookies());
//el userLoggedMiddelware debe ir si o si despues del app.use(session....{}), si no da error
app.use(userLoggedMiddleware);

//views engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

// con estas lineas de codigo indecamos a app.js que vamos a trabajar los datos enviados
//por foumulario como un objeto literal, y que en caso de requeririlo poder tener la
//posibilidad  de poder convertirlo en formato JSON.
// app.use(express.urlencoded({extended=false}));
// app.use(express.json())

app.listen(3000, () => {
  console.log("SERVER corriendo en http://localhost:3000");
});

// app.listen(3001, () => {
//   console.log("SERVER de API corriendo en http://localhost:3001");
// });

app.use("/", routeIndex);
app.use("/api/productos", routeApiProducto);
app.use("/api/usuarios", routeApiUsuario);
app.use("/producto", routeProducto);
app.use("/users", routeUsers);
