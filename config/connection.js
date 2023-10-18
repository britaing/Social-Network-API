const { Schema, Types } = require("mongoose");

const user = new Schema({
  username: {
    type: "string",
    unique: true,
    required: true,
    trim: [true, "A username is required"],
  },
  email: {
    type: "string",
    unique: true,
    required: [true, "Please enter an email address"],
    validate: {
      validator: () => Promise.resolve(false),
      message: "Email validation failed",
    },
  },
});
