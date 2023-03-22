//importar express
const express = require('express');
//importo method override para put y delete
const methodOverride = require('method-override');

//importar el router
const mainRouter = require ('./routes/main');

//declaro express y el puerto
const app = express();
const port = 3000;

//usando metodo post (viene con paquete node)
app.use(express.urlencoded({ extended : false}));
app.use(express.json());
//usando metodo put y delete
app.use(methodOverride('_method'));
//archivos estaticos
app.use(express.static("public"));

//template engine - motor de plantillas (en este caso ejs)
app.set('view engine','ejs')

//usar los get del router
app.use("/", mainRouter);


//levantar servidor 
app.listen(process.env.PORT || port, () => {
    console.log("Levantando un servidor con Express")
  });



