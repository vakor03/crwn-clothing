import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAXZkqq92VpN7jTaeElVSh277BrDGx0qxI",
    authDomain: "crwn-db-1951b.firebaseapp.com",
    projectId: "crwn-db-1951b",
    storageBucket: "crwn-db-1951b.appspot.com",
    messagingSenderId: "497501320263",
    appId: "1:497501320263:web:9be168bf2053e21745ad62",
    measurementId: "G-WJFPBT56YB"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
