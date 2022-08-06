export function config() {
           // Your web app's Firebase configuration
   const firebaseConfig = {
    apiKey: "AIzaSyCVTvuAkyyTjMPbnda-gyQHupR6EODTjok",
    authDomain: "meenakshi-control-system-6ad84.firebaseapp.com",
    databaseURL: "https://meenakshi-control-system-6ad84-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "meenakshi-control-system-6ad84",
    storageBucket: "meenakshi-control-system-6ad84.appspot.com",
    messagingSenderId: "227334513595",
    appId: "1:227334513595:web:34b07bf770e2c7d81bda9e"
    };
       // Initialize Firebase
       firebase.initializeApp(firebaseConfig);
       var db = firebase.firestore();
        return db;
      }