var fs = require('fs');
var http = require('http');
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️ */
/* Aquí debajo puedes escribir tu servidor */
const PORT = 3000;

http
   .createServer(function (req, res) {
      console.log(`Server raised in port ${PORT}`);

      if (req.url === '/api') {
         fs.readFile('./utils/dogsData.json', (err, data) => {
            if (err) {
               res.writeHead(404, { 'Content-Type': 'text/plain' });
               res.end('json not found');
            } else {
               res.writeHead(200, { 'Content-Type': 'application/json' });
               res.end(data);
            }
         });
         return;
      }

      if (req.url === '/allDogs') {
         fs.readFile('./utils/allDogs.html', 'UTF8', (err, data) => {
            if (err) {
               res.writeHead(404, { 'Content-Type': 'text/plain' });
               res.end('html not found');
            } else {
               res.writeHead(200, { 'Content-Type': 'text/html' });
               res.end(data);
            }
         });
         return;
      }

      fs.readFile(`./utils/images/${req.url}.jpg`, (err, data) => {
         if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('image not found');
         } else {
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            res.end(data);
         }
      });
   })
   .listen(PORT, '127.0.0.1');
