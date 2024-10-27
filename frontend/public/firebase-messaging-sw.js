// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

const IMAGE_BASE_URL = "http://localhost:3000";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyC5RAgWKOYkm9yr9HtRiD5hOKMuHk82eKg",
    authDomain: "cs732-happy-hippos.firebaseapp.com",
    projectId: "cs732-happy-hippos",
    storageBucket: "cs732-happy-hippos.appspot.com",
    messagingSenderId: "347789660796",
    appId: "1:347789660796:web:86a6c0c56446459b7f2ff9",
    measurementId: "G-24NHB1YJWG"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    console.log("????????")
    // Customize notification here
    const type = payload.data ? "data" : "notification";
    const content = payload.data ? payload.data : payload.notification;
    console.log("Type: ", type);

    const notificationTitle = content.title + " in " + type;
    const notificationOptions = {
        body: content.body
    };

    if (content.image) {
        notificationOptions.icon = IMAGE_BASE_URL+"/image/"+content.image;
        console.log("Image found in payload")
    } else {
        notificationOptions.icon = "../images/default-event-image.jpg";
        console.log("No image found in payload")
    }

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});
