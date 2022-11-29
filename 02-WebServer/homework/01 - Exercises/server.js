var fs = require('fs');
var http = require('http');
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️ */
/* Aquí debajo puedes escribir tu servidor */
const PORT = 3000;

http
   .createServer(function (req, res) {
      console.log(`Server raised in port ${PORT}`);
      fs.readFile(`./images/${req.url}.jpg`, function (err, data) {
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
