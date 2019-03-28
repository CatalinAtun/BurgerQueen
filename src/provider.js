import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCCiSe0bw3ssZeLj3kBqxRihNiKCTmy-4c",
    authDomain: "burger-queen-34357.firebaseapp.com",
    databaseURL: "https://burger-queen-34357.firebaseio.com",
    projectId: "burger-queen-34357",
    storageBucket: "burger-queen-34357.appspot.com",
    messagingSenderId: "1078583422587"
};
firebase.initializeApp(config);

export const database = firebase.database();