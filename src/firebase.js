import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCOM16_MhT-FMZQa9pOxvi7I9qNO1l70_c",
  authDomain: "clone-4287a.firebaseapp.com",
  databaseURL: "https://clone-4287a.firebaseio.com",
  projectId: "clone-4287a",
  storageBucket: "clone-4287a.appspot.com",
  messagingSenderId: "99805730018",
  appId: "1:99805730018:web:a23c593809850639607abb",
  measurementId: "G-D01KDKGH1X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
