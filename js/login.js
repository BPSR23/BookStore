"use strict";

const login = document.querySelector(".login");
login.addEventListener("click", validate);


function validate(e){
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    if ( username.includes("@srmist.edu.in") && password.includes("abc@123") && confirmpassword === password){
    alert ("Login successfully");
    window.location.replace ("index.html"); 
    }
    else{
        alert("Enter a Valid Email Address");
    }
};