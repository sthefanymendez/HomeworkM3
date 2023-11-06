var fs = require("fs");
var http = require("http");
const path = require("path")
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️ */
/* AQUÍ DEBAJO PUEDES ESCRIBIR LA CONSTANTE DEL PUERTO */
const PORT = 3001;

/* ⚠️ LA LÍNEA SIGUIENTE TIENE QUE QUEDAR COMO ESTÁ PARA PODER EXPORTAR EL SERVIDOR ⚠️ */

const server = http.createServer((req, res) => {
  if (req.url === "/api") {
    const filePath = path.join(__dirname, 'utils', 'dogsData.json')
    
    fs.readFile(filePath, (error, data) => {
      if (error) {
        res.writeHead(404, { "Content-Type": "text/plain" })
        res.end("json not found")
      } else {
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(data)
      }
    })
  } else {
    res.end("Holaaa")
  }
})

server.listen(PORT, () => {
  console.log("Servido en", PORT)
})
  