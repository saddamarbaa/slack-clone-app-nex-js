import firebase from "firebase";

const firebaseConfig = {
	apiKey: process.env.API_KEY,
<<<<<<< HEAD

	authDomain: process.env.AUTH_DOMAIN,

	projectId: process.env.PROJECT_ID,

	storageBucket: process.env.STORAGE_BUCKET,

	messagingSenderId: process.env.MESSAGING_SENDER_ID,

	appId: process.env.APP_ID,
=======
	authDomain: process.env.AUTH_DOMAIN,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAIN_SENDER_ID,
	appId: process.env.APPID,
>>>>>>> 761787fd30388f0ba6872c3e56557cbd085a0ef6
};

const firebaseApp = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
