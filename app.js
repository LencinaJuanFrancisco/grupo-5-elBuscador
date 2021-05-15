const express = require ('express');

const app= express();
const path = require('path');
const routeIndex=    require('./routers/index');
const routeProducto= require('./routers/productos')
const routeUsers =require ('./routers/users')

app.use(express.static(path.resolve(__dirname,'./public')))

//views engine
app.set('view engine', 'ejs');
app.set('views','./views');


app.listen(3000,()=>{
    console.log('SERVER corriendo en http://localhost:3000')
})

app.use('/',routeIndex);
app.use('/producto', routeProducto);
app.use('/users', routeUsers);

