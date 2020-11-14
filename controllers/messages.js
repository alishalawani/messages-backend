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
		.then(() => {
			Message.find({})
				.then((messages) => {
					res.json(messages);
				})
				.catch(console.error);
		})
		.catch(console.error);
});

//update a message by id
router.put('/:id', (req, res) => {
	Message.findOneAndUpdate({ _id: req.params.id })
		.then(() => {
			Message.find({})
				.then((messages) => {
					res.json(messages);
				})
				.catch(console.error);
		})
		.catch(console.error);
});

//delete message by id
router.delete('/:id', (req, res) => {
	Message.findOneAndDelete({ _id: req.params.id })
		.then(() => {
			Message.find({})
				.then((messages) => {
					res.json(messages);
				})
				.catch(console.error);
		})
		.catch(console.error);
});
module.exports = router;
