// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeXbF00R1tZL8gKIouyf4OHwGdfyFi4gs",
  authDomain: "chat-app-54684.firebaseapp.com",
  projectId: "chat-app-54684",
  storageBucket: "chat-app-54684.appspot.com",
  messagingSenderId: "161588278876",
  appId: "1:161588278876:web:77878edf5c62769e08d899",
  measurementId: "G-XVPEJX8HN4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const authentication = getAuth(app);

export const storage = getStorage(app);
// export { db, auth };
// export default firebase;
