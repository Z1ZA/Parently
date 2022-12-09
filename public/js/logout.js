import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';

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
let logoutButton = document.getElementById('logoutButton');
console.log(logoutButton);

logoutButton.addEventListener('click', (e) => {
  e.preventDefault();
  const auth = getAuth(app);
  signOut(auth)
    .then(() => {
      alert('sukses logout');
      location.href = '/';
    })
    .catch((error) => {});
});
