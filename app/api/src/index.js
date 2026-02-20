const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("API Node.js OK !"));

app.listen(port, () => console.log(`Serveur API démarré sur le port ${port}`));
