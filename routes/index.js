var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

//GET route for 'create new message' page.
// note: any needed 'locals' must be provided here...
router.get("/new", function (req, res, next) {
  res.render("form", {});
});

module.exports = router;
