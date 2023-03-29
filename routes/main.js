const express = require("express");//llamar express
const router = express.Router();//llamar al router de express
const MainController = require ("../controllers/MainController");//llamar al controlador
const validacionesContacto = require('../middlewares/validacionesContacto')

//crear las rutas para "/..."  (app.get)
router.get("/", MainController.index);
router.get("/contacto/:id", MainController.contactoDetail);//detalle de contacto
router.get("/contactoCreate", MainController.contactoCreate);//crear contacto
router.post("/contactoCreate", validacionesContacto, MainController.contactoSave);//crear contacto - save
router.get("/contactoEdit/:id", MainController.contactoEdit);//editar contacto
router.put("/contactoEdit/:id", MainController.contactoUpdate);//editar contacto - update
router.delete("/delete/:id", MainController.contactoDelete);//eliminar contacto



//exportar el router
module.exports = router;