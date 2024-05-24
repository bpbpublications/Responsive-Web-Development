
let db;
const request = indexedDB.open('notesDB', 1);

request.onupgradeneeded = event => {
    db = event.target.result;
    db.createObjectStore('notes', { keyPath: 'id' });
};

request.onsuccess = event => {
    db = event.target.result;
};
