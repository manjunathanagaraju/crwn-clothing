import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { getFirestore, collection, onSnapshot} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtT_ltYNYZKD487XL1RXD54GoScFSQxuc",
  authDomain: "crwn-project-b2d59.firebaseapp.com",
  projectId: "crwn-project-b2d59",
  storageBucket: "crwn-project-b2d59.appspot.com",
  messagingSenderId: "505562989402",
  appId: "1:505562989402:web:02c6c23e930a669b086963",
  measurementId: "G-5YR2K4WYYF"
};


const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    'prompt': 'select_account'
  });
  const firestore = getFirestore();

export const createUserProfileDocument =async (userAuth, additionalData) =>{
   if(!userAuth) return;
     onSnapshot(collection(firestore, `cd${userAuth.uid}`), (snapshot) =>{
        console.log(snapshot);
     })
} 

  export const signInWithGoogle = () => signInWithPopup(auth, provider);

