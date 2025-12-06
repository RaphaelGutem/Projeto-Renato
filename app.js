const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const connection = require('./config/db');

const app = express();

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Sessões
app.use(session({
  secret: "segredo-super-seguro",
  resave: false,
  saveUninitialized: false
}));

// Função auxiliar para passar user em todas as renderizações
const renderWithUser = (res, view, params = {}) => {
  res.render(view, { user: res.req.session.user || null, ...params });
};

// ==================== ROTAS ====================

// Página inicial
app.get('/', (req, res) => renderWithUser(res, 'index'));

// Página sobre
app.get('/sobre', (req, res) => renderWithUser(res, 'sobre'));

// ==================== CADASTRO ====================

// Formulário de cadastro
app.get('/register', (req, res) => renderWithUser(res, 'register', { erro: null }));

// Processar cadastro
app.post('/register', (req, res) => {
  const { nome, senha } = req.body;

  if (!nome || !senha) {
    return renderWithUser(res, 'register', { erro: 'Todos os campos são obrigatórios' });
  }

  // Verificar se o nome já existe
  connection.query(
    "SELECT * FROM usuarios WHERE nome = ?",
    [nome],
    (err, results) => {
      if (err) return renderWithUser(res, 'register', { erro: 'Erro no servidor' });

      if (results.length > 0) {
        return renderWithUser(res, 'register', { erro: 'Nome já cadastrado' });
      }

      // Inserir novo usuário
      connection.query(
        "INSERT INTO usuarios (nome, senha) VALUES (?, ?)",
        [nome, senha],
        (err2) => {
          if (err2) return renderWithUser(res, 'register', { erro: 'Erro ao cadastrar' });
          res.redirect('/login');
        }
      );
    }
  );
});

// ==================== LOGIN ====================

// Formulário de login
app.get('/login', (req, res) => renderWithUser(res, 'login', { erro: null }));

// Processar login
app.post('/login', (req, res) => {
  const { nome, senha } = req.body;

  connection.query(
    "SELECT * FROM usuarios WHERE nome = ? AND senha = ?",
    [nome, senha],
    (err, results) => {
      if (err) return res.send("Erro no login");

      if (results.length === 0) {
        return renderWithUser(res, 'login', { erro: "Nome ou senha incorretos." });
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

// ==================== DICAS ====================

// Mostrar dicas
app.get('/dicas', (req, res) => {
  const query = `
    SELECT u.nome, d.conteudo
    FROM dicas d
    JOIN usuarios u ON d.usuario_id = u.id
  `;

  connection.query(query, (err, results) => {
    if (err) return res.send("Erro ao carregar dicas");

    renderWithUser(res, 'dicas', { dicas: results });
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

// ==================== SERVIDOR ====================
app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
