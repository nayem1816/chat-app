const mongoose = require("mongoose");
const messageModel = mongoose.Schema(
  {
    content: {
      type: String,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    seenBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
    },
    attachment: {
      fileName: {
        type: String,
      },
      fileType: {
        type: String,
      },
      publicId: {
        type: String,
      },
      fileData: {
        type: String,
      },
      description: {
        type: String,
      },
    },
    linkShare: {
      link: {
        type: String,
      },
      title: {
        type: String,
      },
      description: {
        type: String,
      },
    },
    __v: false,
  },
  { timestamps: true }
);

const MessageModel = mongoose.model("Message", messageModel);
module.exports = MessageModel;
