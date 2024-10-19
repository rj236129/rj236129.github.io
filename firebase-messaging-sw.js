<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "WMEcSO4LN0E_evO3SOyOdSkHblB0DY-DumwN2ebySGo",
    authDomain: "meriappnotification.firebaseapp.com",
    projectId: "meriappnotification",
    storageBucket: "meriappnotification.appspot.com",
    messagingSenderId: "65356991475",
    appId: "1:65356991475:web:42a3cde0e379992b6da086",
    measurementId: "G-J5VF6VJYFH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
