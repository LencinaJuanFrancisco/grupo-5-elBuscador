const express = require ('express');

const app= express();
const path = require('path');

app.use(express.static(path.resolve(__dirname,'./public')))


app.listen(3000,()=>{
    console.log('SERVER corriendo en http://localhost:3000/index')
})

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
})

app.get('/index',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
})
app.get('/carrito',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/carrito.html'))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})
app.get('/producto',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/producto.html'))
})
app.get('/registro',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/registro.html'))
})