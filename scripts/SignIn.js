import { getId } from './function.js';
import { renderCreateAccount } from './CreateAccount.js'
import { pushFun, myRef } from './Firebase.js'

// create account
const dbRef = myRef();
pushFun(dbRef, "hi this is sign in");

// sign in

function getDataSignIn(e, email, pass){
    e.preventDefault()
    const myObj = {
        email: email.value,
        password: pass.value
    }
    localStorage.setItem("SignIn", JSON.stringify(myObj))
    checkSignIn()
}

// compare sign in with create account

function checkSignIn(){
    const signInValue = JSON.parse(localStorage.getItem("SignIn"))
    const dataValue = JSON.parse(localStorage.getItem("Data"))
    if (signInValue.email !== dataValue.email){
        alert("invalid email")
    }
    if (signInValue.password !== dataValue.password){
        alert("invalid password")
    } else {
        console.log("login success")
    }
}


// signIn logic and createAccount logic
// we grab de elements, add an event listener, then sent the elements
// as parameters to the function for the logic
function signInLogic(){
    const emailSignIn = getId("email-sign-in")
    const passwordSignIn = getId("password-sign-in")
    const btnSignIn = getId("btn-sign-in")
    const createLink = getId("create-link")
    btnSignIn.addEventListener("click", (e)=>{
        getDataSignIn(e,emailSignIn, passwordSignIn)})
    createLink.addEventListener("click", renderCreateAccount)
}


// container renders
//  we render the html and then we call another function to grab the 
// new html elements and insert event listeners

const container = getId("container")
function renderLogo(){
    container.style.backgroundColor = "#8E6CEF"
    container.innerHTML = `        
    <img class="container-img" src="assets/Rectangle 13.png" />
`
}

function renderSignIn(){
    container.style.backgroundColor = "#FFF"
    container.innerHTML = `
        <div class="sign-in">
            <h1>Sign in</h1>
            <form class="sign-in-form">
                <input type="email"
                        placeholder="Email Address"
                        id="email-sign-in"/>
                <input type="password"
                        placeholder="Password"
                        id="password-sign-in"/>
                <button id="btn-sign-in">Continue</button>
                <p>Dont have an Account? <a href="#" id="create-link">Create one</a></p>
            </form>
         </div>`
    signInLogic()
}



document.addEventListener("click", (e)=>console.log(e.target))


renderLogo()
setTimeout(()=>{
    renderSignIn()
}, 2000)


export {renderSignIn}