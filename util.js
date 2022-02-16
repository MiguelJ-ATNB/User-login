// Login form

let userInEl = document.getElementById("username");
let passInEl = document.getElementById("password");
let buttonEl = document.getElementById("login-btn");
let outputEl = document.getElementById("output");

//Click function

buttonEl.addEventListener("click" , VerifyLogin)

//Verify the login

function VerifyLogin(){

    if(userInEl === "admin" && passInEl === "1234" ){
    outputEl.innerHTML = "Login Successful"

    }else if(userInEl !== "admin"){
        outputEl.innerHTML = "Invalid Username"

    }else if(userInEl === "admin" && passInEl !== "1234"){
    outputEl.innerHTML = "Invalid Password" 
}

}