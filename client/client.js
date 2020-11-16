const publicVapidKey =
    'BJEoexrZhPFrUHqDVSXFB5xkGb7X0pNg7knp-3okSNSD4at2j1wIgyyRKgQ50NroSvUnrBz0yQyASad3x3gGODE';
    
//check if you are able to use service worker
if ('serviceWorker' in navigator) {
    send().catch(err=>console.error(err));
}

//register service worker, Register Push, Send Push
async function send(){
    //register service worker
    console.log('Registering service worker...');
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/'
    });
    console.log('Service Worker Registered...')

    //register push
    console.log('Register Push...');
    const subscription = await register.pushManager.subscribe({
			userVisibleOnly: true,
			applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
		});
    console.log('Push Registered...')

    //send push notification
    console.log('Sending Push...');
    await fetch('/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers:{
            'content-type': 'application/json'
        }
    });
    console.log('Push Sent...')
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}