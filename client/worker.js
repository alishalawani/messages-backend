console.log('Service worker loaded');

self.addEventListener('push', event =>{
    const data = event.data.json();
    console.log('Push Received...');
    self.registration.showNotification(data.title, {
			body: 'Notified by Message Board',
			icon: 'f0c404c8486dea5ab74ff001af848ab7.png',
		});
})