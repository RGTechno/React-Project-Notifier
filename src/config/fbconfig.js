import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyAhzfgXrWZOiBIxn3N6s0lcXTBZna-V0f4",
    authDomain: "react-5ef99.firebaseapp.com",
    databaseURL: "https://react-5ef99.firebaseio.com",
    projectId: "react-5ef99",
    storageBucket: "react-5ef99.appspot.com",
    messagingSenderId: "346322223928",
    appId: "1:346322223928:web:7449ffa4fa7048ce4477cd",
    measurementId: "G-MV9XDDJ2GH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase