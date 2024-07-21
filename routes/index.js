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
  res.render("form", { title: "Post new Message" });
});

// POST route for creating new messages
router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

//GET message detail.
router.get("/messageDetail/:index", function (req, res, next) {
  const messageIndex = parseInt(req.params.index);
  const message = messages[messageIndex];

  if (message) {
    res.render("messageDetail", {
      title: "Message Detail",
      message: message,
    });
  } else {
    res.status(404).send("Message not found");
  }
});

module.exports = router;
