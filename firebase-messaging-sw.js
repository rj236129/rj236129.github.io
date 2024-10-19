// Import and configure the Firebase Messaging service worker
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging.js');

// Your Firebase configuration details (same as used in your main project)
firebase.initializeApp({
    apiKey: "AIzaSyDrgBPLAkNooS4jjYrsrGVORVUsC3RFM2Q",
    authDomain: "meriappnotification.firebaseapp.com",
    projectId: "meriappnotification",
    storageBucket: "meriappnotification.appspot.com",
    messagingSenderId: "65356991475",
    appId: "1:65356991475:web:42a3cde0e379992b6da086",
    measurementId: "G-J5VF6VJYFH"
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages
const messaging = firebase.messaging();

// Handle background messages (push notifications)
messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    
    // Customize your notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png' // optional, change this to your logo if needed
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
