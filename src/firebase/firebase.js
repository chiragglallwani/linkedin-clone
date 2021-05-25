import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDn2jhkGeXYJTpF7yWi_eVYQZlaMz0ubqo",
    authDomain: "linkedin-clone-58fa3.firebaseapp.com",
    projectId: "linkedin-clone-58fa3",
    storageBucket: "linkedin-clone-58fa3.appspot.com",
    messagingSenderId: "760676198201",
    appId: "1:760676198201:web:2fe683e5164f23d23e2ae8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};