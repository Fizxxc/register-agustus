// firebase.js (gunakan ES module CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCSKBHxE8YIDFsEW-8TpGSOHuZJ5CliIkg",
  authDomain: "fingerpinauth.firebaseapp.com",
  databaseURL: "https://fingerpinauth-default-rtdb.firebaseio.com",
  projectId: "fingerpinauth",
  storageBucket: "fingerpinauth.appspot.com", // Diperbaiki: sebelumnya `firebasestorage.app`, seharusnya `.appspot.com`
  messagingSenderId: "395896869935",
  appId: "1:395896869935:web:f05223a2c140bd88d662da",
  measurementId: "G-6S5NHHLFW0"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ✅ Export untuk digunakan di file lain
export { app, db, ref, push, set };
