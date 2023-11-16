const routerLivros = require('./atendimentoRoute');
const router = require('./auth');
const express = require('express');
const app = express();

module.exports = (app, express) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true}));
    app.use(routerLivros);
};