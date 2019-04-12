const express= require('express');
const app= express();
//Importar rutas
const indiceRutas=require('./rutas/index');

//usamos las rutas
app.use("/",indiceRutas);

//Activar el servidor de escucha
app.listen(3000, ()=> {
	console.log("Escuchando en puerto 3000, jejeje");
})