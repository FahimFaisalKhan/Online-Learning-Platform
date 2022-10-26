import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApumVdUipNmrIQREq1vtlkqKLYjeLaM3o",
  authDomain: "learning-platform-auth.firebaseapp.com",
  projectId: "learning-platform-auth",
  storageBucket: "learning-platform-auth.appspot.com",
  messagingSenderId: "965113073517",
  appId: "1:965113073517:web:85305a557e05e2171d5464",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
