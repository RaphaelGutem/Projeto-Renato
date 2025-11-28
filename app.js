const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

const publicRoutes = require('./routes/public');

// Definir onde ficam as views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Pasta pública
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/', publicRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
