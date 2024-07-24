var express = require("express");
var router = express.Router();

const db = require("../db/queries");
const messageController = require("../controllers/messageController");

/* GET home page. */
router.get("/", messageController.getHomepage);

//GET route for 'create new message' page.
router.get("/new", messageController.getNewMessageForm);

// POST route for creating new messages
router.post("/new", messageController.postNewMessage);

//GET message detail.
router.get("/messageDetail/:index", () => {
  //get message index and pass to controller
  const messageIndex = parseInt(req.params.index);

  messageController.getMessageDetail(messageIndex);
});

module.exports = router;
