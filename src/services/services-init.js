/**
 * Initialization of all services
 */
import React from 'react';
import firebase, { firebaseConfig } from '../settings/firebase-configs';

// Initialize Firebase
firebase.initializeApp(firebaseConfig.dev);

// Get Firebase references
export const provider = new firebase.auth.GoogleAuthProvider(); // provider
export const database = firebase.database(); // database
export const auth = firebase.auth(); // auth
export const storage = firebase.storage(); // images and ...


// export const UserContext = React.createContext({}); // User Context

export default database;
