const express = require("express");
const db = require("./model");
const router = express.Router();

router.get("/", (req, res) => {
  db.find().then((todo) => res.status(200).json(todo));
});

module.exports = router;
