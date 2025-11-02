// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeAcY9r4ogTxsJ5xl66QC2QE9V_mKRlg8",
    authDomain: "e-commerce-authenticatio-a4fb2.firebaseapp.com",
    projectId: "e-commerce-authenticatio-a4fb2",
    storageBucket: "e-commerce-authenticatio-a4fb2.firebasestorage.app",
    messagingSenderId: "483945027843",
    appId: "1:483945027843:web:e67cb930e6f003910ff136",
    measurementId: "G-ZMS7010P5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;