import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';

import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js';

import {
  getDatabase,
  set,
  ref,
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

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

const btnSignup = document.getElementById('btnSignup');

btnSignup.addEventListener('click', (e) => {
  e.preventDefault();
  const usernameSignup = document.getElementById('usernameSignup').value;
  const passwordSignup = document.getElementById('passwordSignup').value;
  const emailSignup = document.getElementById('email').value;

  createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...

      set(ref(database, 'users/' + user.uid), {
        name: usernameSignup,
        email: emailSignup,
        password: passwordSignup,
      })
        .then(() => {
          alert('user telah sukses dibuat');
          location.href = '/login';
        })
        .catch((error) => {
          alert(error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      alert(errorCode);
    });
});
