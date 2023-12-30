import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDewbssZHpDVt1uN_y1-wxleqf8cnf7xQU",
    authDomain: "whatsapp-clone-a2ade.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-a2ade.firebaseio.com",
    projectId: "whatsapp-clone-a2ade",
    storageBucket: "whatsapp-clone-a2ade.appspot.com",
    messagingSenderId: "1002280133076",
    appId: "1:1002280133076:web:ea41f92a359fb4a6473641"
};


const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export default firestore;
