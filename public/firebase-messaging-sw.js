importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDfFrfAdkcBD1gscDp0b8Gew8uX-lqaimw",
  authDomain: "uts-pwa-portofolio.firebaseapp.com",
  projectId: "uts-pwa-portofolio",
  storageBucket: "uts-pwa-portofolio.firebasestorage.app",
  messagingSenderId: "126430312434",
  appId: "1:126430312434:web:a9647d521f1c4bc7dddd6b",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Pesan latar belakang diterima:", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/pwa-192x192.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
