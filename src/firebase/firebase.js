import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// any datatype can be pushed to firebase. NO ARRAYS, we use this method to store array like objects:
// database.ref('expenses').push({
//     description: 'car repair',
//     note: 'fixed windshield',
//     amount: 150000,
//     createdAt: 100032324441
// });

// Then we can set up the array and put all the objects in it PLUS the key (id) of the object
// database.ref("expenses")
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
// });

// These lines show how to setup firebase with redux: 
// const onValueChange = database.ref().on('value' , (snapshot) => {
//     const val = snapshot.val();
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// }, (e) => {
//     console.log('Error with fetching the data', e);
// });

// SUBSCRIBE! it can have three arguments:
// First one can have different types, like: 'value', 'child_remove', 'child_change', 'child_added',
// etc... | .then can't be used when we subscribe, as .on doesn't support promises, snapshot has
// to be in the second argument:

// const onValueChange = database.ref().on('value' , (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// }, (e) => {
//     console.log('Error with fetching the data', e);
// });


//   database.ref().set({
//     name: 'Tomi',
//     age: 26,
//     job: {
//         title: 'Software developer',
//         company: 'Amazon'
//     },
//     isSingle: false,
//     location: {
//         city: 'Sassari',
//         country: 'Italy'
//     }
//   }).then(() => {
//       console.log('Data is saved');
//   }).catch((e) => {
//       console.log('This failed', e);
//   });

    // database.ref("attributes").set({
    //     height: "170cm",
    //     weight: "70kg"
    // });

    // database.ref("attributes").remove().then(() => {
    //     console.log('Data is removed');
    // }).catch((e) => {
    //     console.log('Failed to remove data', e);
    // });

    // database.ref().update({
    //     name: 'Géza',
    //     age: 33
    // });