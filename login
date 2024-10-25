<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/9.x.x/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.x.x/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.x.x/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.x.x/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.x.x/firebase-messaging.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.x.x/firebase-storage.js"></script>

<script>
  // Firebase configuration for RJ SERVICES
  const firebaseConfig = {
    apiKey: "AIzaSyCbLnj8H_BhbwGuFrJR_MUMYSOUmEaYvww",
    authDomain: "rjapp-6fc09.firebaseapp.com",
    projectId: "rjapp-6fc09",
    storageBucket: "rjapp-6fc09.appspot.com",
    messagingSenderId: "1047396234166",
    appId: "1:1047396234166:android:4af3d994da76a623a68717",
    measurementId: "G-XXXXXXX" // Only if using Google Analytics
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  // Optional: Firebase services initialization
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();
</script>
