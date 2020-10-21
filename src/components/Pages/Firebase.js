import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCp6pG4ARewhdKfsPAYY1b91TUMBUbs0Zk",
    authDomain: "bibin-weds-emeliya.firebaseapp.com",
    databaseURL: "https://bibin-weds-emeliya.firebaseio.com",
    projectId: "bibin-weds-emeliya",
    storageBucket: "bibin-weds-emeliya.appspot.com",
    messagingSenderId: "780622622900",
    appId: "1:780622622900:web:eaa720d3536b799cab27e1"
})

var db = firebaseApp.firestore();
const auth= firebase.auth()

 export { db, auth };