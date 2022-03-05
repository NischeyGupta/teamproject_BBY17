//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
  apiKey: "AIzaSyC3BMHNGmw3Ciy9pRvaNcJnmZEGXjzOLzY",
  authDomain: "bookmyroom-ebf0a.firebaseapp.com",
  projectId: "bookmyroom-ebf0a",
  storageBucket: "bookmyroom-ebf0a.appspot.com",
  messagingSenderId: "218688408404",
  appId: "1:218688408404:web:564d0802fa0716494716c1",
  measurementId: "G-BE4DVK8P2N"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();