/**
 * arquivo: app.js
 * descrição: arquivo responsável por fazer a conexao com o arquivo 'server.js'
 */

const express = require('express')
const cors = require('cors')

const app = express()

// ===> Rotas da API (siteVendas)
const index = require('./routes/index')
const siteVendasRoute = require('./routes/siteVendas.routes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+jason' }));
app.use(cors());

app.use(index);
app.use('/api/', employeeRoute);

module.exports = app; 