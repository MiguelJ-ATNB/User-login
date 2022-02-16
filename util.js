// Login form

let userInEl = document.getElementById("username");
let passInEl = document.getElementById("password");
let buttonEl = document.getElementById("login-btn");
let outputEl = document.getElementById("output");

//Click function

buttonEl.addEventListener("click" , VerifyLogin)

//Verify the login

function VerifyLogin(){

    //VALUES. ******REMEMBER VALUES****** 
    // The 2 .values have made this assignment take 2 classes.

    let username= userInEl.value;
    let password = passInEl.value;

    // Check

    if(username === "admin" && password === "1234" ){
    outputEl.innerHTML = "!Login Successful!"

    }else if(username !== "admin"){
        outputEl.innerHTML = "Invalid Username :("

    }else if(username === "admin" && password !== "1234"){
    outputEl.innerHTML = "Invalid Password :( " 
}

}