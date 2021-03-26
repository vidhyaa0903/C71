import {firebase} from '@firebase/app';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyCV3pABkip3EMPrTBqd1CyWNh4SGSrmW-w",
  authDomain: "willyapp1-98693.firebaseapp.com",
  databaseURL: "https://willyapp1-98693-default-rtdb.firebaseio.com",
  projectId: "willyapp1-98693",
  storageBucket: "willyapp1-98693.appspot.com",
  messagingSenderId: "178143943163",
  appId: "1:178143943163:web:beb2002b0d6a4cf69d135e"
};
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    }

  export default firebase.firestore();