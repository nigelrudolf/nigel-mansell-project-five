import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCW9UhpevFkU0UtsuAfGOs1krgLdqAjVYM",
    authDomain: "social-media-planner-2fe20.firebaseapp.com",
    databaseURL: "https://social-media-planner-2fe20.firebaseio.com",
    projectId: "social-media-planner-2fe20",
    storageBucket: "social-media-planner-2fe20.appspot.com",
    messagingSenderId: "995865750758",
    appId: "1:995865750758:web:333fa1a679a8dc0e63df27"
};

firebase.initializeApp(firebaseConfig);

export default firebase;