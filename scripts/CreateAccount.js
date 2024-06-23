import { getId } from './function.js';
import { renderSignIn } from './SignIn.js'

// create account
function getData(e, firstName, lastName, email, password){
    e.preventDefault()
    const myObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
    }
    localStorage.setItem("Data", JSON.stringify(myObj))
    console.log("account created successfully")
}

// signIn logic and createAccount logic
// we grab de elements, add an event listener, then sent the elements
// as parameters to the function for the logic
function createAccountLogic(){
    const firstName = getId("firstName")
    const lastName = getId("lastName")
    const email = getId("email")
    const password = getId("password")
    const formButton = getId("formButton")
    const goBack = getId("go-back")
    formButton.addEventListener("click", (e)=>{
        getData(e, firstName, lastName, email, password)})
    goBack.addEventListener("click", renderSignIn)
}


// container renders
//  we render the html and then we call another function to grab the 
// new html elements and insert event listeners
function renderCreateAccount(){
    container.innerHTML = `
        <div class="create-account">
            <h1>Create Account</h1>
            <form class="create-account-form">
                <input type="text" id="firstName"
                    placeholder="First Name"/>
                <input type="text" id="lastName"
                    placeholder="Last Name"/>
                <input type="email" id="email"
                        placeholder="Email Address"/>
                <input type="password" id="password"
                        placeholder="Password"/>
                <button id="formButton">Continue</button>
                <p>Forgot Password? <a href="#">Reset</a></p>
            </form>
            <a href="#" id="go-back" class="go-back"><i class="fa-solid fa-chevron-left"></i></a>
        </div>`
    createAccountLogic()
}


export { renderCreateAccount }