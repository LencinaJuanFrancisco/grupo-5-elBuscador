const express = require ('express');

const app= express();
const path = require('path');
const routeIndex=    require('./src/routers/index');
const routeProducto= require('./src/routers/productos')
const routeUsers =require ('./src/routers/users')
const methodOverride = require("method-override");
const session = require("express-session")

app.use(express.static(path.resolve(__dirname,'./public')))
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({secret: "Nuestro mensaje secreto", resave:false,
saveUninitialized: false,
}))

//views engine
app.set('view engine', 'ejs');
app.set('views','./scr/views');

// con estas lineas de codigo indecamos a app.js que vamos a trabajar los datos enviados
//por foumulario como un objeto literal, y que en caso de requeririlo poder tener la 
//posibilidad  de poder convertirlo en formato JSON. 
// app.use(express.urlencoded({extended=false}));
// app.use(express.json())

app.listen(3000,()=>{
    console.log('SERVER corriendo en http://localhost:3000')
})

app.use('/',routeIndex);
app.use('/producto', routeProducto);
app.use('/users', routeUsers);

