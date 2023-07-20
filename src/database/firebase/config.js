import firebase from "firebase/app";
import 'firebase/auth'

if(!firebase.apps.length) {

    const firebaseConfig = {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
      };
      
    firebase.initializeApp(firebaseConfig)
}
