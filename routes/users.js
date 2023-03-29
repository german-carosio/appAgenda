const express = require("express");//llamar express
const router = express.Router();//llamar al router de express
const UsersController = require ("../controllers/UsersController");//llamar al controlador


//crear las rutas para "/..."  (app.get)
router.get("/register", UsersController.register);
router.get("/login", UsersController.login);


//exportar el router
module.exports = router;