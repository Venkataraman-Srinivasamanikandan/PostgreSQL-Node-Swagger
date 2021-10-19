const express = require("express"),
  logger = require("morgan"),
  cors = require("cors"),
  http = require("http"),
  swaggerJsDoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");

const app = express(),
  port = 8000,
  swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      servers: [
        {
          url: "http://localhost:8001/api/v1/",
          desription: "PostgreSQL Sample",
        },
      ],
      info: {
        title: "PostgreSQL Sample API's",
        description: "A sample Node.js application to connect PostgreSQL",
        version: "1.0.0",
        contact: {
          name: "Venkataraman S",
          email: "venkataraman@qburst.com",
        },
      },
      host: "http://localhost:8000",
    },
    apis: ["./swaggerDoc/WEB/*js"],
  },
  swaggerSpecification = swaggerJsDoc(swaggerOptions);

// Engine setup
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  "/api/v1/swagger",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecification)
);

const server = http.createServer(app);

server.listen(port, () =>
  console.log(`Express server running on port ` + port)
);

module.exports = server;
