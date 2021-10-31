
import firebase from "firebase/app";
import "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDngylxGOsqFEnAIBtB4hV2hZfQAFaDcdk",
  authDomain: "cartas-locas-react.firebaseapp.com",
  projectId: "cartas-locas-react",
  storageBucket: "cartas-locas-react.appspot.com",
  messagingSenderId: "655831977707",
  appId: "1:655831977707:web:472cbf07802ce56ba378ae"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFiresotre = () => {
    return firebase.firestore(app)
}