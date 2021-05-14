const express = require("express");
const db = require("./model");
const router = express.Router();

router.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  db.find().then((todo) => res.status(200).json(todo));
});

router.post("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  db.add(req.body)
    .then((data) => res.status(201).json({ message: data }))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  db.update(req.params.id, req.body)
    .then(() => {
      res.status(200).json("update successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  db.remove(req.params.id)
    .then(() => {
      res.status(200).json("remove successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
