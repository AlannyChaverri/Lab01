const express=require('express');
require('dotenv').config();
const cors=require('Cors');

class Server{
 constructor(){
    this.app=express();
    this.port=process.env.PORT;
    this.routesPath='/api/users';
    this.middleware();
    this.routes();
 }

middleware(){
this.app.use(express.static('public'));
this.app.use(cors());
}

routes(){
    this.app.use(this.routesPath,require('../routes/users'));
}


listen(){
    this.app.listen(this.port, ()=>{
        console.log(`Servidor corriendo en el puerto ${this.port}`);
    })
}




}

module.exports=Server;

