var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Main line into the application
router.get("/", function (req, res) {
  burger.all(function (data) {
    var bgrObject = {
      burger: data
    };
    res.render("index", bgrObject);
  });
});

// GET route for getting all of the burgers
router.get("/api/burgers", function (req, res) {
  burger.all(function (data) {
    res.json(data)
  });
});

// POST route for making a new burger. 
router.post("/api/burgers", function (req, res) {
  burger.create(["name", "eaten"], [
    req.body.name, false], function (result) {
      res.json({ id: result.inserId })
    });
});


// PUT route for eating burgers
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  burger.update({
    eaten: true
  }, condition, function (result) {
    if (result.changeRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;