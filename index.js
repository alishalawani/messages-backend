const express = require('express');
const cors = require('cors');

const messagesController = require('./controllers/messages');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
	res.redirect('/api/messages');
});

app.use('/api/messages', messagesController);
app.set('port', process.env.PORT || 4040);
app.listen(app.set('port'), () => {
	console.log('App listening on port 4040 🤩');
});
