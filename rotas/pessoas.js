const { pessoas } = require('../db');

function getPessoas(req, res) {
    res.statusCode = 200;
    res.end(JSON.stringify(pessoas));
    return;
}

function getPessoa(req, res) {
    const id = req.url.split('/')[2];
    const pessoa = pessoas.find(p => p.id == id);
    if (pessoa) {
      res.statusCode = 200;
      res.end(JSON.stringify(pessoa));
      return;
    }
    res.statusCode = 404;
    res.end();
    return;
}

function getEndereco(req, res) {
    const id = req.url.split('/')[2];
    const pessoa = pessoas.find(p => p.id == id);
    if (pessoa) {
      res.statusCode = 200;
      res.end(JSON.stringify(pessoa.endereco));
      return;
    }
    res.statusCode = 404;
    res.end();
    return;
}

module.exports = {
    getPessoa,
    getPessoas,
    getEndereco
}
