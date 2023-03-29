//importo fs/path
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')

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
    
    //Detalle del contacto
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

        const resultValidations = validationResult(req);

        
        if (resultValidations.errors.length > 0) {

            return res.render('contactoCreate', {
                errors: resultValidations.mapped(),
                oldData: req.body
            })
        } else {
            
        leerJson();

        let ultimoContacto = agenda.length-1; 
                
        let nuevoId;

        agenda.length === 0 ? nuevoId = 1 : nuevoId = agenda[ultimoContacto].id + 1; 

        

        let contactoNuevo = {

            id: nuevoId,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            email: req.body.email,
            fechaNacimiento: req.body.fechaNacimiento,
            creador: 1

        };
        
        agenda.push(contactoNuevo);

        escribirJson();

        res.redirect("/")
        }       
      
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
  
        leerJson();
           
        agenda.forEach(element => {

            if (element.id === parseInt(req.params.id)) {
                element.nombre = req.body.nombre;
                element.apellido = req.body.apellido;
                element.telefono = req.body.telefono;
                element.direccion = req.body.direccion;
                element.fechaNacimiento = req.body.fechaNacimiento,
                element.email = req.body.email;
            }
             
        });
        
        escribirJson();

        res.redirect('/')
    },

    //Eliminar contacto
    contactoDelete : (req,res) => {

        leerJson();

          const eliminar = agenda.filter(element =>{
              return element.id !== parseInt(req.params.id)
          });

          agenda = eliminar;

          escribirJson();

          res.redirect("/");
    }
     
   
}
   
//exporto el controlador
module.exports = MainController;