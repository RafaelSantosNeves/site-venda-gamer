/**
 * arquivo: controllers/employee.contoller.js
 * descrição: arquivo responsável pela lógica do CRUD (API - Employee)
 */ 

const db = require('../config/database.js');


exports.cadatroUsuario = async(req, res) => {
    credential = req.body.credential

    function decodeJWTToken(token) {
        return JSON.parse(atob(token.split(".")[1]))
    }


    //para decodificar credenciais do response
    const responsePayload = decodeJWTToken(credential)
    sessionStorage = JSON.stringify(responsePayload)

    this.userProfile = JSON.parse(sessionStorage || "")
    
    const { name, email, sub: senha } = this.userProfile

    const { rows } = await db.query(
        "INSERT INTO usuario (email, senha, nome) VALUES($1, $2, $3);",
        [email, senha, name]
    )

    console.log('Usuário cadastrado com sucesso')

    res.status(201).redirect('http://localhost:4200/home')


  
      function handleSignout() {
        google.accounts.id.disableAutoSelect()
      }
}