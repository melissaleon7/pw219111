const path = require ('path');
const morgan=require('morgan');
const express= require('express');
const mysql= require ('mysql');
const myConnection= require ('express-myconnection');
const app= express();
//Importar rutas
const indiceRutas=require('./rutas/index');

//Configuraciones
app.set('port',process.env.PORT || 3000)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));



//Middleware
app.use(morgan('de'));//dev= desarrollo
app.use(myConnection(mysql,{

     host: 'localhost',
     user: 'root',
     password: '',
     port: 3306,
     database : 'crudenodejsmysql'
}, 'single'));

//usamos las rutas
app.use("/",indiceRutas);

//Activar el servidor de escucha
app.listen(app.get('port'),()=> {
	console.log("Escuchando en puerto 3000");
})