//llamar al router de express
const express = require("express");
const router = express.Router();

//llamar al controlador
const MainController = require ("../controllers/MainController")

//crear las rutas para "/..."  (app.get)
router.get("/", MainController.index);

//detalle de contacto
router.get("/contacto/:id", MainController.contactoDetail);

//crear contacto
router.get("/contactoCreate", MainController.contactoCreate);
router.post("/contactoCreate", MainController.contactoSave)

//editar contacto
router.get("/contactoEdit/:id", MainController.contactoEdit);
router.put("/contactoEdit/:id", MainController.contactoUpdate);

//eliminar contacto
router.delete("/delete/:id", MainController.contactoDelete)

//exportar el router
module.exports = router;