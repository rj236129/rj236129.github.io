// Sign Up Event
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("User signed up successfully");
            // Optional: Redirect to another page or show user info
        })
        .catch(error => {
            alert(error.message);
        });
});

// Login Event
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("User logged in successfully");
            // Redirect to user dashboard or display user data
        })
        .catch(error => {
            alert(error.message);
        });
});

// Google Login
document.getElementById('googleLoginButton').addEventListener('click', function () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(result => {
            alert("Google sign-in successful");
        })
        .catch(error => {
            alert(error.message);
        });
});

// Display User Data
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        const userData = `Email: ${user.email}, UID: ${user.uid}`;
        console.log(userData);
        // Fetch user data from Firestore if needed
    }
});
