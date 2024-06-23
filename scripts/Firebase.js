// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg5eQ_tZbO4xLl0UAoFpo72lYBfgtU0SE",
  authDomain: "sign-in-b652c.firebaseapp.com",
  projectId: "sign-in-b652c",
  storageBucket: "sign-in-b652c.appspot.com",
  messagingSenderId: "183534117853",
  appId: "1:183534117853:web:63dc4f91d2536e61530c34",
  databaseURL: "https://sign-in-b652c-default-rtdb.firebaseio.com/"
};

const appSettings = {
    databaseURL: "https://sign-in-b652c-default-rtdb.firebaseio.com/"
}

// Initialize Firebase
const app = initializeApp(appSettings);
const database = getDatabase(app);

const myDbRef = ref(database, 'accounts')

onValue(myDbRef, (snapshot) => {
    const data = snapshot.val()
    localStorage.setItem('Database', JSON.stringify(data))
})
// push(myDbRef, "hi")

function myRef(){
    return myDbRef
}

function pushFun(myDbRef, snapshot){
   push(myDbRef, snapshot)
}

export { pushFun , myRef}
