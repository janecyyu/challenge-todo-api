const express = require("express");
const resultRouter = require("../results/resultRouter.js");
const server = express();

server.use(express.json());
server.use("/", resultRouter);

module.exports = server;
