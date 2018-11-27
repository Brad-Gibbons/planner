import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var config = {
apiKey: "AIzaSyBIx-NTG5rWRMkigqJPdPicT1wxeg1pCnM",
authDomain: "planner-4c4ce.firebaseapp.com",
databaseURL: "https://planner-4c4ce.firebaseio.com",
projectId: "planner-4c4ce",
storageBucket: "planner-4c4ce.appspot.com",
messagingSenderId: "1020113614617"
};
firebase.initializeApp(config);

firebase.firestore().settings({timestampsInSnapshots: true});


export default firebase;