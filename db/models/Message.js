const mongoose = require('../connection');

const MessageSchema = new mongoose.Schema(
	{
		subject: String,
		message: String,
	},
	{ timestamps: { createdAt: 'created_at' } }
);

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;