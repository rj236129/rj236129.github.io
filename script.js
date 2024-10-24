import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrgBPLAkNooS4jjYrsrGVORVUsC3RFM2Q",
  authDomain: "meriappnotification.firebaseapp.com",
  projectId: "meriappnotification",
  storageBucket: "meriappnotification.appspot.com",
  messagingSenderId: "65356991475",
  appId: "1:65356991475:web:4f593b340bdb83156da086",
  measurementId: "G-G3E1S4TDDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup functionality
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = signupForm.name.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Store user data in Firestore
        await setDoc(doc(db, "users", user.uid), {
            name: name,
            email: email
        });

        document.getElementById("message").innerText = "Signup successful!";
    } catch (error) {
        document.getElementById("message").innerText = error.message;
    }
});

// Retrieve user data
document.getElementById("getUserData").addEventListener("click", async () => {
    const user = auth.currentUser;
    if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            document.getElementById("userData").innerText = JSON.stringify(docSnap.data(), null, 2);
        } else {
            document.getElementById("userData").innerText = "No user data found.";
        }
    } else {
        document.getElementById("userData").innerText = "No user is signed in.";
    }
});
