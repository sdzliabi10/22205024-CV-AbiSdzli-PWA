import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCNBlZ8zWarIfUArvUIzw8OYQfahhMzUNw",
  authDomain: "portofolio-sdzli.firebaseapp.com",
  projectId: "portofolio-sdzli",
  storageBucket: "portofolio-sdzli.firebasestorage.app",
  messagingSenderId: "373203341462",
  appId: "1:373203341462:web:2fa5e60f43bd60537bf2b7",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Fungsi untuk meminta izin dan mendapatkan token
export const requestForToken = async () => {
  try {
    const registration = await navigator.serviceWorker.register(
      "/firebase-messaging-sw.js"
    );
    const token = await getToken(messaging, {
      vapidKey:
        "BJ-1RUBT0GAu-Ab5tffB_rywdqWMoNNZUZKk_g1JSTRzYUgiycnQ5JMyidGM6tEXCAGnMT4JuXQjW24_eP4zJiY",
      serviceWorkerRegistration: registration,
    });
    if (token) {
      console.log("Token diperoleh:", token);
    } else {
      console.log("Token tidak ditemukan.");
    }
  } catch (error) {
    console.error("Gagal memperoleh token:", error);
  }
};

// Fungsi untuk mendengarkan pesan notifikasi
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Pesan diterima:", payload);
      resolve(payload);
    });
  });
