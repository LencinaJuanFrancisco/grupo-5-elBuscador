// 1. Guardar al usuario en la DB
// 2. Buscar un usuario que se quiera loguear por su email
// 3. Buscar a un usuario por su ID 
// 4.Editar la informacionde un usuario.
// 5.-Eliminar a un usuario de la DB

// vamos a crear un objeto literal con todas estas cararcteristicas

const db = require('../database/models');

// const fs= require('fs');
// const path = require("path");

const User = {

    // fileName: path.join(__dirname, '../data/userBD.json'),
    
    // getData:function (){

    //     return JSON.parse(fs.readFileSync(this.fileName,'utf-8'))
    // },

    //generador de ID
    // generateID: function(){
    //     let allUsers = this.findAll();
    //     let lastUsers = allUsers.pop();//obtenemos el ultimo elemento del array
    //     if(lastUsers){
    //         return lastUsers.id + 1;
    //     }
    //         return 1;
        
    // },

    //metodo para obtener a todos lo usuarios
    // findAll: function(){
    //         return db.Usuario.findAll()   
    //      },

    // vamos a buscar a un usurario por su id o pk Primary Key
    findByPk: function(id){
        //let allUser = this.findAll();
       // let userFound = allUser.find(oneUser => oneUser.id === id)
       
     //  return db.Usuarios.findByPk(id)
    },
    // vamos a buscar a un usuario por su EMAIL
    // findByEmail:async (email)=>{

    //     console.log('******> findByEmail '+ email)
    //     //let allUser= this.findAll();
    //     //let userFound = allUser.find(oneUser => oneUser.email === email);

    //    let usuario = await db.Usuario.findOne({
    //         where:{
    //             email:email}
    //         })

    //         try{
    //             console.log('es este?---->'+ usuario)

    //         }
    //         catch(e){
    //             console.log(e)
    //         }
           
    
    //     },

    create: function(userData){

        db.Usuario.create({
            nombre:userData.fullName,
            email:userData.email,
            pass:userData.password,
            rol_id:userData.admin,
            avatar:userData.avatar
        })
        .then((response)=>{
            console.log('******** create '+ response)
        })
        .catch((e)=>{
            console.log(e)
        })
        // let allUser= this.findAll();
        // let newUser = {
        //     id: this.generateID(),
        //     ...userData
        // }
        // allUser.push(newUser);
        
        //  let allUsersJSON = JSON.stringify(allUser,null,' ');
        // fs.writeFileSync(this.fileName, allUsersJSON);
        // return newUser;

    },

    delete: function(id){
        let allUser = this.findAll();
        let finalUsers = allUser.filter(oneUser=> oneUser.id !== id);
        let allUsersJSON = JSON.stringify(finalUsers,null,' ');
        fs.writeFileSync(this.fileName, allUsersJSON);
        return true;

    }
}



module.exports= User;


