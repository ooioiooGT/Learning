// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import {getFirestore, addDoc, collection, getDoc} from 'firebase/firestore';
import { useNavigate } from "react-router-dom";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE9A2BTKhTnlx7nhpNZB_7-IQO7IhFBAA",
  authDomain: "learning-ooioo.firebaseapp.com",
  projectId: "learning-ooioo",
  storageBucket: "learning-ooioo.appspot.com",
  messagingSenderId: "55622149029",
  appId: "1:55622149029:web:df59eff846fa895dd33e4c",
  measurementId: "G-W3NP5ETYJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)


export const SignIn = async (email, password) => {
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Successfully signed in, userCredential contains user information.
      console.log("Successfully signed in:", userCredential.user.email);
    } catch (error) {
      // Handle sign-in errors
      console.error("Sign-in failed:", error.message);
      alert("Invalid username or password");
    }
  };
  

  export const Signup = async ( email, password) => {
    const navigate = useNavigate();
    try {
        const userCredential = await createUserWithEmailAndPassword( auth, email, password);
        // Successfully signed in, userCredential contains user information.
        console.log("Successfully signed in:", userCredential.user.email);
        navigate("/Profile");
      } catch (error) {
        // Handle sign-in errors
        console.error("Sign-in failed:", error.message);
      }
  }

  export const SaveData = async (firstName, lastName,age,gender,email,firstLanguage,secondLanguage) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
          firstName,
          lastName,
          age,
          gender,
          email,
          firstLanguage,
          secondLanguage
        });
  
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error("faild", error.message);
    }
  }
  export const Readdata = async() => {
    try{
        const data = await getDoc(collection(db , "users"));
        console.log(data);
    }catch (error){
        console.error("faild to read data",error.message)
    }
  }