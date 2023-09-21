/**
 * arquivo: routes/siteVendas.routes.js
 * descrição: arquivo responsável pelas rotas da API
 */

const router = require('express-promise-router')()
const siteVendasController = require('../controllers/siteVenda.controller')

// ==> Definindo rotas da url do site de vendas gamer

// ==> Rota responsável por criar um novo (Usuário): (POST): localhost:3000/api/cadastro
router.post('/cadastro', siteVendasController.test)

module.exports = router