const express = require('express');
const cors = require('cors');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const messagesController = require('./controllers/messages');

const app = express();

app.use(express.static(path.join(_dirname, 'client')));


app.use(bodyParser.json());



const privateVapidKey = process.env.PRIVATE_VAPID_KEY;
const publicVapidKey = process.env.PUBLIC_VAPID_KEY;

webpush.setVapidDetails(
	'mailto:alishalawani@gmail.com',
	publicVapidKey,
	privateVapidKey
);
console.log(privateVapidKey)
//subscribe route ..sends the notification to the service worker
app.post('/subscribe', (req, res)=>{
	//Get pushSubscription object
	const subscription = req.body;

	//send a 201 status that shows the the resource has been created
	res.status(201).json({})

	//create payload
	const payload = JSON.stringify({title: 'Push Test'});

	//Pass object into sendNotification
	webpush.sendNotification(subscription, payload).catch(console.error);
})

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
