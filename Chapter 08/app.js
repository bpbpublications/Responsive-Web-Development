
window.addEventListener('online', syncNotes);
window.addEventListener('offline', () => console.log("You're offline. Can't sync!"));

function syncNotes() {
    console.log("Syncing notes...");
}

document.getElementById('cameraInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
});
