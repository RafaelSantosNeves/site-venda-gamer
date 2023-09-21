/**
 * arquivo: controllers/employee.contoller.js
 * descrição: arquivo responsável pela lógica do CRUD (API - Employee)
 */ 

const db = require('../config/database.js');


exports.test = async(req, res) => {
    console.log(req.body.credential);
    credential = req.body.credential

    function decodeJWTToken(token) {
        return JSON.parse(atob(token.split(".")[1]))
    }


    //para decodificar credenciais do response
    const responsePayload = decodeJWTToken(credential)
    sessionStorage = [JSON.stringify(responsePayload)]
    console.log(sessionStorage.name)

    this.userProfile = JSON.parse(sessionStorage || "")
    console.log(this.userProfile.email, this.userProfile.given_name, this.userProfile.family_name, this.userProfile.email,)

    res.redirect('http://localhost:4200/home')


  
      function handleSignout() {
        google.accounts.id.disableAutoSelect()
      }
}