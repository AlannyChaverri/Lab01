const express = require("express");
require("dotenv").config();
const cors = require("Cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.routesPathUser = "/api/users";
    this.routesPathProduct = "/api/Products";
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.static("public"));
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.routesPathUser, require("../routes/users"));
    this.app.use(this.routesPathProduct, require("../routes/Products"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;
