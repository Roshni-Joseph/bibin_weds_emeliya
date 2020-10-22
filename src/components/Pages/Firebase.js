import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBiL680t3DWx1q7pgpiU92eWhoen6WiQtU",
    authDomain: "bibin-emeliya.firebaseapp.com",
    databaseURL: "https://bibin-emeliya.firebaseio.com",
    projectId: "bibin-emeliya",
    storageBucket: "bibin-emeliya.appspot.com",
    messagingSenderId: "162124132378",
    appId: "1:162124132378:web:9f7ae8bd5cfbc20318a1a3",
    measurementId: "G-8BRFY8XQBK"
})

var db = firebaseApp.firestore();
const auth= firebase.auth()

 export { db, auth };