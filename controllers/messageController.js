var express = require("express");
var router = express.Router();

const db = require("../db/queries");

async function getHomepage(req, res) {
  //get messages from db
  //temp
  const messages = [{ user: "she", text: "hi!", added: new Date() }];

  res.render("index", { title: "Mini Messageboard", messages: messages });
}

async function getNewMessageForm(req, res) {
  res.render("form", { title: "Post new Message" });
}

async function postNewMessage(req, res) {
  //todo - implement sql
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });

  res.redirect("/");
}

async function getMessageDetail(messageIndex) {
  //todo - implement sql
  const message = messages[messageIndex];

  if (message) {
    res.render("messageDetail", {
      title: "Message Detail",
      message: message,
    });
  } else {
    res.status(404).send("Message not found");
  }
}

module.exports = {
  getHomepage,
  getNewMessageForm,
  postNewMessage,
  getMessageDetail,
};
