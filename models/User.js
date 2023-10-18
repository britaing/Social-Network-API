const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought");

const userSchema = new Schema(
    {
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
  thoughts: [thoughtSchema],
  friends: [this],
  toJSON: {
    virtuals: true,
  },
  id: false,
});
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
