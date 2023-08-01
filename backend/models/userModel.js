const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: "string",
      required: [true, "Please add the username"],
    },
    email: {
      type: "string",
      required: [true, "Please add the email address"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: "string",
      required: [true, "Please enter user password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
