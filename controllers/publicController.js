const connection = require('../config/db');

// HOME
exports.home = (req, res) => {
  res.render("index");
};

// SOBRE
exports.sobre = (req, res) => {
  res.render("sobre");
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
