
///tarea hacer un crud  para usuarios
//create
//read
//update
//delete

const express = require("express");
const app = express();

// importar base de datos

app.post("/users", function (req, res) {
  //recibir datos del query o de los hearders

  const headers = req.headers;
  const querys = req.query;
  // crear un usuario en la base de datos
  console.log(querys);

  console.log(headers);

  //respondes al client con el nuevo suario
  res.json([]);
});

app.listen(3000);
