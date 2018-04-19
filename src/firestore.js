import firebase from "@firebase/app";
import "@firebase/firestore";

const config = {
  apiKey: "AIzaSyArYL1UZz038fAVXuCwbWy1kNFXXfc4vcw",
  authDomain: "starter-kit-ant.firebase.com",
  databaseURL: "https://starter-kit-ant.firebaseio.com",
  projectId: "starter-kit-ant",
  storageBucket: "",
  messagingSenderId: "917857951029"
};

const app = firebase.initializeApp(config);
const firestore = firebase.firestore(app);

export default firestore;