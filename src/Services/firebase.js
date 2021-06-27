import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDld4Sd6Imc45leDb0utNy2nINd1Ec9wzo",
    authDomain: "expense-tracker-pwa-f5334.firebaseapp.com",
    projectId: "expense-tracker-pwa-f5334",
    storageBucket: "expense-tracker-pwa-f5334.appspot.com",
    messagingSenderId: "768546361958",
    appId: "1:768546361958:web:85be6ed98097cb8e3c13a7"
};

firebase.initializeApp(config);
export default firebase;