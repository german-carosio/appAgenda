const express = require("express");//llamar express
const router = express.Router();//llamar al router de express
const MainController = require ("../controllers/MainController");//llamar al controlador
const {body} = require('express-validator');

const validaciones = [
    body('nombre').notEmpty().withMessage('El campo Nombre no es correcto'),
    body('apellido').notEmpty().withMessage('El campo Apellido no es correcto'),
    body('telefono').notEmpty().isNumeric().withMessage('El campo Teléfono no es correcto'),
    body('direccion').notEmpty().withMessage('El campo Dirección no es correcto'),
    body('email').notEmpty().isEmail().withMessage('El campo Email no es correcto'),
]

//crear las rutas para "/..."  (app.get)
router.get("/", MainController.index);
router.get("/contacto/:id", MainController.contactoDetail);//detalle de contacto
router.get("/contactoCreate", MainController.contactoCreate);//crear contacto
router.post("/contactoCreate", validaciones, MainController.contactoSave);//crear contacto - save
router.get("/contactoEdit/:id", MainController.contactoEdit);//editar contacto
router.put("/contactoEdit/:id", MainController.contactoUpdate);//editar contacto - update
router.delete("/delete/:id", MainController.contactoDelete);//eliminar contacto

//exportar el router
module.exports = router;