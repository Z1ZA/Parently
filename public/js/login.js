// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js';

import {
  getDatabase,
  set,
  ref,
  update,
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCV8HXeEoqWJ3gwBfFK7OOkqe5oF_yOj9o',
  authDomain: 'parently-22663.firebaseapp.com',
  databaseURL: 'https://parently-22663-default-rtdb.firebaseio.com',
  projectId: 'parently-22663',
  storageBucket: 'parently-22663.appspot.com',
  messagingSenderId: '157028995796',
  appId: '1:157028995796:web:b0f43dce2afc9f3f1c6141',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  const emailLogin = document.getElementById('emailLogin').value;
  const passwordLogin = document.getElementById('passwordLogin').value;
  signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      let lgDate = new Date();
      update(ref(database, 'users/' + user.uid), {
        last_login: lgDate,
      })
        .then(() => {
          // Data saved successfully!
          alert('user telah sukses login');
          location.href = '/admin';
        })
        .catch((error) => {
          //the write failed
          alert(error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  signOut(auth)
    .then(() => {})
    .catch((error) => {});
});
