const connection = require('../config/db');
const bcrypt = require('bcrypt');

// HOME
exports.home = (req, res) => {
  res.render("index");
};

// SOBRE
exports.sobre = (req, res) => {
  res.render("sobre");
};

// FORM DE CADASTRO
exports.registerForm = (req, res) => {
  res.render('register', { erro: null });
};

// REGISTRAR USUÁRIO
exports.registerUser = async (req, res) => {
  const { nome, senha } = req.body;

  // validação simples
  if (!nome || !senha) {
    return res.render('register', { erro: 'Preencha todos os campos' });
  }

  try {
    // verifica se já existe usuário com mesmo nome (opcional se UNIQUE no DB)
    const checkSql = 'SELECT id FROM usuarios WHERE nome = ? LIMIT 1';
    connection.query(checkSql, [nome], async (err, results) => {
      if (err) {
        console.error(err);
        return res.render('register', { erro: 'Erro ao verificar usuário' });
      }

      if (results.length > 0) {
        return res.render('register', { erro: 'Nome já em uso' });
      }

      // hash da senha
      const senhaHash = await bcrypt.hash(senha, 10);

      const sql = 'INSERT INTO usuarios (nome, senha) VALUES (?, ?)';
      connection.query(sql, [nome, senhaHash], (err2) => {
        if (err2) {
          console.error(err2);
          // caso de duplicidade no DB (ER_DUP_ENTRY)
          if (err2.code === 'ER_DUP_ENTRY') {
            return res.render('register', { erro: 'Nome já em uso' });
          }
          return res.render('register', { erro: 'Erro ao criar usuário' });
        }

        // sucesso: redireciona para login
        return res.redirect('/login');
      });
    });
  } catch (e) {
    console.error(e);
    return res.render('register', { erro: 'Erro interno' });
  }
};


// LISTAR DICAS
exports.formDicas = (req, res) => {
  const query = `
    SELECT u.nome, d.conteudo
    FROM dicas d
    JOIN usuarios u ON d.usuario_id = u.id
    ORDER BY d.id DESC
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.send("Erro ao carregar dicas");
    }

    res.render("dicas", { dicas: results });
  });
};

// ENVIAR DICA
exports.enviarDica = (req, res) => {
  const { conteudo, usuario_id } = req.body;

  const sql = `
    INSERT INTO dicas (conteudo, usuario_id)
    VALUES (?, ?)
  `;

  connection.query(sql, [conteudo, usuario_id], (err) => {
    if (err) {
      console.error(err);
      return res.send("Erro ao salvar dica");
    }

    res.redirect("/dicas");
  });
};
