const express = require('express');
const Message = require('../db/models/Message');
const router = express.Router();

//Get all messages
router.get('/', (req, res) => {
	Message.find({})
		.then((messages) => {
			res.json(messages);
		})
		.catch(console.error);
});

//get message by id
router.get('/:id', (req, res) => {
	Message.findById({ _id: req.params.id })
		.then((message) => {
			res.json(message);
		})
		.catch(console.error);
});

//create a message
router.post('/', (req, res) => {
	const newMessage = req.body;
	Message.create(newMessage)
		.then((message) => {
			res.json(message);
		})
		.catch(console.error);
});

module.exports = router;
