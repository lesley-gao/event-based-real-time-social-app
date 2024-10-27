import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";
import { TAGS_ENUM } from "./models/Event-schema.js";


const firebaseConfig = {
    credential: applicationDefault(),
    apiKey: "AIzaSyC5RAgWKOYkm9yr9HtRiD5hOKMuHk82eKg",
    authDomain: "cs732-happy-hippos.firebaseapp.com",
    projectId: "cs732-happy-hippos",
    storageBucket: "cs732-happy-hippos.appspot.com",
    messagingSenderId: "347789660796",
    appId: "1:347789660796:web:86a6c0c56446459b7f2ff9",
    measurementId: "G-24NHB1YJWG"
};

const firebaseApp = initializeApp(firebaseConfig);

export const messaging = getMessaging(firebaseApp);

export function sendEventNotification(event) {
    const notificationBody = `A new event is about to start!\n${event.title} at ${event.address.detailed_address} at ${event.startTime}!`;

    const pushCondition = event.tags.map(tag => `'${tag}' in topics`).join(" || ");

    const message = {
        notification: {
            title: "Happy Hippos Event Notification",
            body: notificationBody,
        },
        condition: pushCondition
    };
    if (event.imageUrl) {
        message.notification.image = event.imageUrl;
    }

    messaging.send(message).then((response) => {
        console.log("Successfully sent message:", response);
    }).catch((error) => {
        console.error("Error sending message:", error);
    });
}

export function registerToken(token, tags) {
    tags.forEach(tag => {
        messaging.subscribeToTopic(token, tag).then(() => {

        }).catch((error) => {
            console.log(`Error subscribing ${token} to ${tag}: ${error}`);
        });
    });
}

export function unregisterToken(token) {
    TAGS_ENUM.forEach(tag => {
        messaging.unsubscribeFromTopic(token, tag).then(() => {
        }).catch(() => {

        });
    });
}