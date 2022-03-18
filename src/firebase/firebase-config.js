import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyCPyB5PFSEBqGKbB_pDexH0rJl3jMn_t4A",
	authDomain: "react-app-notes-818f7.firebaseapp.com",
	projectId: "react-app-notes-818f7",
	storageBucket: "react-app-notes-818f7.appspot.com",
	messagingSenderId: "14900070774",
	appId: "1:14900070774:web:84002aeaea54da68475257",
	measurementId: "G-EL5YYVK2QD"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
	db,
	googleAuthProvider,
	firebase
}