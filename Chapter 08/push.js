
if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.ready.then(function(swReg) {
        swReg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: 'serverPublicKey'
        }).then(function(subscription) {
            console.log('User is subscribed:', subscription);
        }).catch(function(err) {
            console.log('Failed to subscribe the user: ', err);
        });
    });
}
