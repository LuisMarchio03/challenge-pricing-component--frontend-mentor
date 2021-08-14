import firebase from "firebase/app";
import { firebaseConfig } from "../config/firebase.config";
import 'firebase/auth';

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { firebase, auth }