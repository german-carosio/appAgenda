const express = require("express");
const path = require ("path")
const {body} = require("express-validator")


const validacionesContacto = [
    body('nombre').notEmpty().withMessage('Debe completar el campo Nombre correctamente'),
    body('apellido').notEmpty().withMessage('Debe completar el campo Apellido correctamente'),
    body('telefono').isInt().withMessage('Debe completar el campo Teléfono correctamente'),
    body('direccion').notEmpty().withMessage('Debe completar el campo Dirección correctamente'),
    body('fechaNacimiento').isDate().withMessage('Debe completar el campo Email correctamente'),
    body('email').isEmail().withMessage('Debe completar el campo Email correctamente')
];

module.exports = validacionesContacto;
