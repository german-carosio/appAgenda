//importo fs/path
const fs = require('fs');
const path = require('path');



let agenda;

//Funcion para leer JSON
function leerJson() {
    const agendaRead = fs.readFileSync(path.join(__dirname, '../database/agenda.json'),{encoding:'utf-8'});
    if (agendaRead === "") {
    agenda = [];
    }else {
    agenda = JSON.parse(agendaRead);
    }
    return agenda;
}

//Función para escribir JSON 
function escribirJson() {
    const agendaWrite = JSON.stringify(agenda, null, "\t");
    fs.writeFileSync(path.join(__dirname, '../database/agenda.json'), agendaWrite);
}

let MainController = {

    index: (req,res) => {
        leerJson();
        res.render('index', {agenda: agenda});
       },
    
    
    contactoDetail: (req,res) => {
        leerJson();
        const contacto = agenda.find(element =>{
            return element.id === parseInt(req.params.id);
       });
         res.render('contactoDetail', {contacto: contacto});
       },
       
    //Creacion de usuario
    contactoCreate: (req,res) => {
       res.render('contactoCreate');
    },

    
    contactoSave: (req,res) => {

        leerJson();

        let ultimoContacto = agenda.length -1;
        let nuevoId = agenda[ultimoContacto].id + 1;

        let contactoNuevo = {

            id: nuevoId,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            email: req.body.email

        };

        agenda.push(contactoNuevo);

        escribirJson();

        res.redirect("/")
      
    },
     

    //Edición de contacto
    contactoEdit: (req,res) => {
        leerJson();
        const contacto = agenda.find(element =>{
            return element.id === parseInt(req.params.id);
       });
         res.render('contactoEdit', {contacto: contacto});
       },
    
       
    contactoUpdate: (req,res) => {

      res.redirect('/')
    },
     
   
}
   
//exporto el controlador
module.exports = MainController;