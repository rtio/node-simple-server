const { carros } = require('../db');

function getCarros(req, res) {
    res.statusCode = 200;
    res.end(JSON.stringify(carros));
    return;
}

function getCarro(req, res) {
    const id = req.url.split('/')[2];
    const carro = carros.find(p => p.id == id);
    if (carro) {
      res.statusCode = 200;
      res.end(JSON.stringify(carro));
      return;
    }
    res.statusCode = 404;
    res.end();
    return;
}

module.exports = {
    getCarros,
    getCarro
};