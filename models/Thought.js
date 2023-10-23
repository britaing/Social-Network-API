const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: "string",
    required: true,
    maxLength: 280,
    minLength: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: "string",
    required: true,
  },
  reactions: [reactionSchema],
},
{
    toJSON: {
      getters: true,
    },
    id: false,
  });
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
