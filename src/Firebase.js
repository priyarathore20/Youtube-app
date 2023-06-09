import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZS0OlXhlOUrAKfwBHrL75bKPh_p2iFZw",
  authDomain: "app-cfc02.firebaseapp.com",
  projectId: "app-cfc02",
  storageBucket: "app-cfc02.appspot.com",
  messagingSenderId: "668913848879",
  appId: "1:668913848879:web:0ba70b3c7664eb5531acda",
  databaseURL: "https://app-cfc02-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);