/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {initializeApp} from 'firebase/app'; // Import Firebase
import {getFirestore} from 'firebase/firestore'; // Import Firestore jika digunakan

const firebaseConfig = {
  apiKey: 'AIzaSyCqgZfo801Ht1dehm5D5k29gzWsnb7SoDU',
  authDomain: 'journeyapp-6138c.firebaseapp.com',
  projectId: 'journeyapp-6138c',
  storageBucket: 'journeyapp-6138c.firebasestorage.app',
  messagingSenderId: '768875452590',
  appId: '1:768875452590:web:9a4356994257298b52353f',
};

// Inisialisasi Firebase
initializeApp(firebaseConfig);
AppRegistry.registerComponent(appName, () => App);
