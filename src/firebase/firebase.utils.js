import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyA6g7ctJnV1M30t53uzFQcxFHLCQchtOzg',
    authDomain: 'crwn-db-76097.firebaseapp.com',
    projectId: 'crwn-db-76097',
    storageBucket: 'crwn-db-76097.appspot.com',
    messagingSenderId: '858743509250',
    appId: '1:858743509250:web:196d04ce6368232533721b'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default firebase;