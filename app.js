const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const connection = require('./config/db');

const app = express();

// EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Sessões
app.use(session({
  secret: "segredo-super-seguro",
  resave: false,
  saveUninitialized: false
}));

// Páginas principais
app.get('/', (req, res) => res.render('index'));
app.get('/sobre', (req, res) => res.render('sobre'));

// Página para login
app.get('/login', (req, res) => {
  res.render('login', { erro: null });
});

// Autenticação do usuário
app.post('/login', (req, res) => {
  const { nome, senha } = req.body;

  connection.query(
    "SELECT * FROM usuarios WHERE nome = ? AND senha = ?",
    [nome, senha],
    (err, results) => {
      if (err) return res.send("Erro no login");

      if (results.length === 0) {
        return res.render("login", { erro: "Nome ou senha incorretos." });
      }

      req.session.user = results[0];
      res.redirect("/dicas");
    }
  );
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/dicas');
});

// Página de dicas (ver dicas)
app.get('/dicas', (req, res) => {
  const query = `
    SELECT u.nome, d.conteudo
    FROM dicas d
    JOIN usuarios u ON d.usuario_id = u.id
  `;

  connection.query(query, (err, results) => {
    if (err) return res.send("Erro ao carregar dicas");

    res.render('dicas', {
      dicas: results,
      user: req.session.user || null
    });
  });
});

// Enviar dica (somente logado)
app.post('/dicas', (req, res) => {
  if (!req.session.user) {
    return res.send("Você precisa estar logado para enviar uma dica.");
  }

  const { conteudo } = req.body;

  connection.query(
    "INSERT INTO dicas (usuario_id, conteudo) VALUES (?, ?)",
    [req.session.user.id, conteudo],
    err => {
      if (err) return res.send("Erro ao enviar dica");
      res.redirect("/dicas");
    }
  );
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
