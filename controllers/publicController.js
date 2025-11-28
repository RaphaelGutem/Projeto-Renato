exports.home = (req, res) => {
    res.render('index'); // agora usa a view que tem conteúdo
};


exports.sobre = (req, res) => {
    res.render('sobre');
};

exports.formDicas = (req, res) => {
    res.render('dicas');
};

exports.enviarDica = (req, res) => {
    res.send("Dica enviada (depois vamos salvar no MySQL)");
};
