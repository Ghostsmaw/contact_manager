const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    name: {
      type: "string",
      required: [true, "Please add a contact name"],
    },
    email: {
      type: "string",
      required: [true, "Please add a contact email address"],
    },
    phone: {
      type: "string",
      required: [true, "Please add a contact phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema)