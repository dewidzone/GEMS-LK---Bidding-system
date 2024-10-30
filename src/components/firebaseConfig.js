
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDkDkay5Zoz85c13IIP5r8Vn3X9Hlf0Vas",
    authDomain: "contact-us-89bf6.firebaseapp.com",
    databaseURL: "https://contact-us-89bf6-default-rtdb.firebaseio.com",
    projectId: "contact-us-89bf6",
    storageBucket: "contact-us-89bf6.appspot.com",
    messagingSenderId: "58995772938",
    appId: "1:58995772938:web:53920e73590ca1cbc959f3"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, push };
