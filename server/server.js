const express = require("express");
const app = express();
const port = 8000;
app.use(express.json()); // para que el enrutamiento del metodo trabaje con json
app.use(express.urlencoded({ extended: true }));
const nlpInit = require("../server/classifier.js");


app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/classifier", (req, res) => {
  nlpInit().then((response) => {
    response
      .process("es", req.body.message)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {});
  });
});
require("./routes/nlp.routes")(app);

app.listen(port, () => { 
console.log(`Listening on port: ${port}`),
nlpInit().then((response) => {
    response
      .train()
      
  });
}
);

//para instalar el nodemon si da problemas con algun token o autenticacion, se agrega esta linea de comando en el powershell de windows como administrador set-executionpolicy remotesigned
