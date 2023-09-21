/**
 * arquivo: controllers/employee.contoller.js
 * descrição: arquivo responsável pela lógica do CRUD (API - Employee)
 */ 

const db = require('../config/database.js');

exports.test = async(req, res) => {
    console.log(req.body);
    res.redirect('http://localhost:4200/home')
}