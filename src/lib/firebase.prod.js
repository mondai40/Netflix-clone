import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// we need to somehow seed the database

// we need a config here
const config = {
  apiKey: 'AIzaSyA7umVVN3wcJ8QN3QfEL5qBKzi-YAv8fvg',
  authDomain: 'netflix-ad8d1.firebaseapp.com',
  databaseURL: 'https://netflix-ad8d1.firebaseio.com',
  projectId: 'netflix-ad8d1',
  storageBucket: 'netflix-ad8d1.appspot.com',
  messagingSenderId: '878830852523',
  appId: '1:878830852523:web:16f0f94442ffebb2281aee',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
