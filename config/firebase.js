/** @format */

import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyD4AbgDx752QgRjgGM1y7o0e3ySICl52dk",

	authDomain: "slack-clone-nextjs-saddam.firebaseapp.com",

	projectId: "slack-clone-nextjs-saddam",

	storageBucket: "slack-clone-nextjs-saddam.appspot.com",

	messagingSenderId: "839447740674",

	appId: "1:839447740674:web:df12d9e49d95fce717c21b",
};

const firebaseApp = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
