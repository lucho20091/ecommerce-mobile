const container = document.getElementById('container');
let state = "start"
// rendering HTML
const renderStart = () => {
    container.style.backgroundColor = '#8E6CEF'
    container.innerHTML = `
    <img class="container-img" src="assets/Rectangle 13.png" /> 
    `
}

const renderSignIn = () => {
    state = "signIn"
    container.style.backgroundColor = '#FFF'
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
                <button id="btn-sign-in" type="button">Continue</button>
                <button id="btn-google" type="button"><i class="fa-brands fa-google"></i> Continue with Google</button>
                <p>Dont have an Account? <a href="#" id="create-account">Create one</a></p>
                <p>Forgot Password? <a id="reset-pass">Reset</a></p>
            </form>
    </div> 
    `
    document.querySelector("#reset-pass").addEventListener("click", renderResetPass)
    document.getElementById("create-account").addEventListener("click", renderSignUp)
    document.querySelector("#btn-google").addEventListener("click", signGoogle)
    document.getElementById("btn-sign-in").addEventListener("click", signInEmailPass)
}

const renderSignUp = () => {
    state = "signUp"
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
                <button id="formButton" type="button">Continue</button>
                <p>Forgot Password? <a id="reset-pass">Reset</a></p>
            </form>
            <a href="#" class="go-back"><i class="fa-solid fa-chevron-left"></i></a>
    </div>
    `

    document.querySelector(".go-back").addEventListener("click", renderSignIn)
    document.querySelector("#reset-pass").addEventListener("click", renderResetPass)
    document.querySelector("#formButton").addEventListener("click", () => {
        const firstName = document.getElementById('firstName').value
        const lastName = document.getElementById('lastName').value
        const fullName = `${firstName} ${lastName}`
        signUpEmailPass(fullName)
    })
    }


const renderResetPass = () => {
    container.innerHTML = `
        <div class="reset-password-account">
            <h1>Forgot Password</h1>
            <form class="reset-password-form">
                <input type="email" id="email-reset-pass"
                        placeholder="Enter Email Address"/>
                <button id="reset-form" type="button">Continue</button>
            </form>
            <a href="#" class="go-back"><i class="fa-solid fa-chevron-left"></i></a>
        </div>
    `
    // const newEl = document.createElement('input')
    // document.querySelector('.reset-password-form').appendChild(newEl)
    document.querySelector(".go-back").addEventListener("click", renderSignIn)
    document.querySelector('#reset-form').addEventListener("click", resetPassword)
}

const renderHomePage = (user) => {
    container.style.backgroundColor = "#FFF"
    container.innerHTML = `
        <div class="homepage">
            <div class="top">
                <div class="profile" id="div-profile">
                    <img src=${user.photoURL || "./assets/avatar.png"} alt="">
                </div>
                <div class="category">
                    <select name="category" id="category">
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                    </select>
                </div>
                <div class="cart">
                    <img src="./assets/cart2.png" alt="">
                </div>
            </div>
            <div class="main">
                <div class="search">
                    <input type="text" placeholder="Search">
                </div>
                <div class="categories">
                    <button><img src="./assets/buttons/Ellipse 1.png" alt="">Hoodies</button>
                    <button><img src="./assets/buttons/Ellipse 2 (3).png" alt="">Shorts</button>
                    <button><img src="./assets/buttons/Ellipse 3.png" alt="">Shoes</button>
                    <button><img src="./assets/buttons/Ellipse 4.png" alt="">Bag</button>
                    <button><img src="./assets/buttons/Ellipse 3 (1).png" alt="">Accesories</button>
                </div>
                <div class="selling">
                    <div class="top-selling">
                        <h2>Top Selling</h2>
                        <div class="items">
                            <div class="card">
                                <img src="./assets/harrington jacket.png" alt="">
                                <i class="fa-regular fa-heart"></i>
                                <p>Mens Harrington Jacket</p>
                                <p>$148.00</p>
                            </div>
                            <div class="card">
                                <img src="./assets/cirro mens slides.png" alt="">
                                <i class="fa-regular fa-heart"></i>
                                <p>Mens Harrington Jacket</p>
                                <p>$55</p>
                                <span>$100.97</span>
                            </div>
                            <div class="card">
                                <img src="./assets/harrington jacket.png" alt="">
                                <i class="fa-regular fa-heart"></i>
                                <p>Mens Harrington Jacket</p>
                                <p>$148.00</p>
                            </div>
                        </div>
                    </div>

                    <div class="new-selling">
                        <h2>New in Selling</h2>
                        <div class="items">
                            <div class="card">
                                <img src="./assets/harrington jacket.png" alt="">
                                <i class="fa-regular fa-heart"></i>
                                <p>Mens Harrington Jacket</p>
                                <p>$148.00</p>
                            </div>
                            <div class="card">
                                <img src="./assets/cirro mens slides.png" alt="">
                                <i class="fa-regular fa-heart"></i>
                                <p>Mens Harrington Jacket</p>
                                <p>$55</p>
                                <span>$100.97</span>
                            </div>
                            <div class="card">
                                <img src="./assets/harrington jacket.png" alt="">
                                <i class="fa-regular fa-heart"></i>
                                <p>Mens Harrington Jacket</p>
                                <p>$148.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu">
                <button> <img src="./assets/menu/home2.png" alt=""></button>
                <button> <img src="./assets/menu/notifications.png" alt=""></button>
                <button> <img src="./assets/menu/orders.png" alt=""></button>
                <button id="btn-profile"> <img src="./assets/menu/profile.png" alt=""></button>
            </div>
            
        </div>
    `
    document.querySelector('#btn-profile').addEventListener('click', () => renderProfile(user))
    document.querySelector('#div-profile').addEventListener('click', () => renderProfile(user))
}

const renderProfile = (user) =>{
    container.innerHTML = `
      <div class="profile-page">
            <div class="top">
                <img src=${user.photoURL || "./assets/avatar.png"} alt="">
                <div class="personal-info">
                    <div class="personal-info-text">
                        <p class="name">${user.displayName}</p>
                        <p>${user.email}</p>
                        <p>${user.phoneNumber || "123-456-7890"}</p>
                    </div>
                    <div class="personal-info-edit" >
                        <button id="btn-edit">Edit</button>
                    </div>
                </div>
            </div>
            <div class="main">
                <button>
                    <div class="btn-main">
                        <p>Address</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                </button>
                <button>
                    <div class="btn-main">
                        <p>Wishlist</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                </button>                
                <button>
                    <div class="btn-main">
                        <p>Payment</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                </button>                
                <button>
                    <div class="btn-main">
                        <p>Help</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                </button>
                <button>
                    <div class="btn-main">
                        <p>Support</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                </button>
                <button id="sign-out">Sign Out</button>
            </div>
            <div class="menu">
                <button id="btn-home"> <img src="./assets/menu/home2.png" alt=""></button>
                <button id="btn-notification"> <img src="./assets/menu/notifications.png" alt=""></button>
                <button id="btn-order"> <img src="./assets/menu/orders.png" alt=""></button>
                <button id="btn-profile"> <img src="./assets/menu/profile.png" alt=""></button>
            </div>
        </div>
    `
    document.querySelector('#btn-home').addEventListener('click', () => renderHomePage(user))
    document.querySelector('#sign-out').addEventListener('click', signOutUser)

}

const renderHTML = (parameter, user) => {
    if (parameter === "Start"){
        renderStart()
        setTimeout(() => renderHomePage(user), 2000)
    }
}


// Logic
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js'
import {    getAuth, 
            GoogleAuthProvider,
            signInWithPopup,
            onAuthStateChanged,
            createUserWithEmailAndPassword,
            signInWithEmailAndPassword,
            sendPasswordResetEmail,
            signOut,
            updateProfile        } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js'

    
const firebaseConfig = {
    apiKey: "AIzaSyAaLko1DdrpabLvYw9KX6qWKk0NT9OfOME",
    authDomain: "auth-f17b1.firebaseapp.com",
    projectId: "auth-f17b1",
    storageBucket: "auth-f17b1.appspot.com",
    messagingSenderId: "718814302299",
    appId: "1:718814302299:web:8cdc6021b35c7eeee1af7e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const user = auth.currentUser;
const provider = new GoogleAuthProvider();

const signGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
    }).catch((error) => {
    console.error(error.message)
});
}

const signUpEmailPass = (name) => {
const email = document.getElementById('email').value
const password = document.getElementById('password').value
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setUserName(name)
    // console.log(userCredential)
  })
  .catch((error) => {
    console.error(error.message)
  });
}

const signInEmailPass = () => {
    const email = document.getElementById('email-sign-in').value
    const password = document.getElementById('password-sign-in').value
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // console.log(userCredential)
    })
    .catch((error) => {
        console.error(error.message)
    });
}

const resetPassword = () => {
    const email = document.getElementById('email-reset-pass').value
    sendPasswordResetEmail(auth, email)
  .then((user) => {
    // console.log(user)
  })
  .catch((error) => {
    console.error(error.message)
  });
}

const signOutUser = () => {
    signOut(auth).then(() => {
      }).catch((error) => {
        console.error(error.message)
      });
}

function setUserName(name) {
    updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
      }).catch((error) => {
      });
      
}

const updateUserInfo = () => {

}

onAuthStateChanged(auth, (user) => {
    if (user) {
        // console.log(user)
        renderHTML("Start", user)
    } else {
        renderSignIn()
    }
});
