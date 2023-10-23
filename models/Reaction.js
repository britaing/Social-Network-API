const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema({
  reactionID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: 'string',
    required: true,
    maxLength: 280
  },
  username: {
    type: 'string',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Reaction = model('thought', reactionSchema);

module.exports = Reaction;