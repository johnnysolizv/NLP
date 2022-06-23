const express = require("express");
const app = express();
const port = 8000;
app.use(express.json()); // para que el enrutamiento del metodo trabaje con json
app.use(express.urlencoded({ extended: true }));
const nlpInit = require("../server/classifier.js");
console.log("🚀 ~ file: server.js ~ line 7 ~ nlpInit", nlpInit);
const Singleton = require("./singleton.js");
console.log("🚀 ~ file: server.js ~ line 8 ~ Singleton", Singleton);

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
app.post("/singleton", (req, res) => {
  Singleton.getInstance().then((response) => {
    response
      .process("es", req.body.message)
      .then((data) => {
        res.status(200).json(data);
        let intent = data.intent;
        let answer = data.answer;
        let score = data.score;
        console.log("🚀 ~ file: server.js ~ line 34 ~ response.process ~ req.body.message:", req.body.message, "~ data.intent:", intent, "~ data.answer:", answer, "~ data.score:", score);

        const json = {
          message: req.body.message,  
          intent: intent,
          answer: answer,
          score: score,
        };

        console.log("🚀 ~ file: server.js ~ line 43 ~ .then ~ json", json);
      })
      .catch((err) => {});
  });
});

require("./routes/nlp.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));

//para instalar el nodemon si da problemas con algun token o autenticacion, se agrega esta linea de comando en el powershell de windows como administrador set-executionpolicy remotesigned
