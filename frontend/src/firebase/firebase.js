import firebase from "firebase/compat/app";
import "firebase/compat/messaging";
import {getToken} from "firebase/messaging";

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyC5RAgWKOYkm9yr9HtRiD5hOKMuHk82eKg",
  authDomain: "cs732-happy-hippos.firebaseapp.com",
  projectId: "cs732-happy-hippos",
  storageBucket: "cs732-happy-hippos.appspot.com",
  messagingSenderId: "347789660796",
  appId: "1:347789660796:web:86a6c0c56446459b7f2ff9",
  measurementId: "G-24NHB1YJWG"
};
const vapidKey="BDNL-SQPTWBKaRD2-c0G5-A9WoCewRi5VfXrFX5q9T7CYSJGCB52zGO_khLQc8v9sQ-kVi6EWMogpdfzKqK7lK0"


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = firebase.messaging();

// Get the device token
async function getDeviceToken() {
  return await getToken(messaging, {vapidKey: vapidKey});
}

export { messaging, getDeviceToken };