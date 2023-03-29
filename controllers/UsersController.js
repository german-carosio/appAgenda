//importo fs/path
const fs = require('fs');
const path = require('path');


let UsersController = {

    register: (req,res) => {
        
        res.send('register');
       },

    login: (req,res) => {
        
        res.send('login');
       }
     
   
}
   
//exporto el controlador
module.exports = UsersController;