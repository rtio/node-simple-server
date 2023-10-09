const http = require('http');
const db = require('./db');
const pessoas = db.pessoas;
const carros = db.carros;
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/json');
  if (req.method === 'GET') {
    if (req.url === '/pessoas') {
      res.statusCode = 200;
      res.end(JSON.stringify(pessoas));
    } else if (req.url === '/carros') {
      res.statusCode = 200;
      res.end(JSON.stringify(carros));
    } else if (req.url.match(/\/pessoas\/[0-9]+/)) {
      const id = req.url.split('/')[2];
      const pessoa = pessoas.find(p => p.id == id);
      if (pessoa) {
        res.statusCode = 200;
        res.end(JSON.stringify(pessoa));
      } else {
        res.statusCode = 404;
        res.end();
      }
    } else {
      res.statusCode = 404;
      res.end();
    }
  }
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
