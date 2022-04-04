"use strict";

// Smooth navigation inside the landing page.
document.querySelector(".about").addEventListener("click",function (e){
    e.preventDefault();
    document.querySelector("#who-are-vi").scrollIntoView({behavior:"smooth"})
});

// Showing login pop up window when log-in is clicked, by removing hidden class.
const logInSection = document.querySelector(".log-in-section");
const overlay = document.querySelector(".overlay");
const createNewUser = document.querySelectorAll(".new-user-field");

document.querySelector(".log-in").addEventListener("click",function (){
    logInSection.classList.remove("hidden");
    overlay.classList.remove("hidden");

});

// Activating hidden class when esc is pressed
document.addEventListener("keydown",function (e){
    if(e.key === "Escape"){
        logInSection.classList.add("hidden");
        overlay.classList.add("hidden");
        for (let i=0;i<createNewUser.length;i++){
            createNewUser[i].classList.add("hidden");
        }
    }
});

// Activating hidden input fields such that user can create a new user account.
document.querySelector(".new-user").addEventListener("click",function (){
    for (let i=0;i<createNewUser.length;i++){
        createNewUser[i].classList.remove("hidden");
    }

})

// This will be activated when the inputs are valid and user toggles to signup.
//TODO implement logic
let propertyToRemove = document.querySelector(".log-in-btn");
document.addEventListener("keydown",function (e){
    if(e.key === "d"){
        console.log(e.key);
        propertyToRemove.style.backgroundColor="#d23f3f";
        propertyToRemove.style.color="#fff";
        propertyToRemove.disabled = false;

    }
});

const newUser = document.querySelector(".new-user");
    newUser.addEventListener("click",function (){
        propertyToRemove.innerHTML = "Sign Up";
        document.querySelector(".log-in-form-heading").classList.add("hidden");
        document.querySelector(".log-in-form-heading-signup").classList.remove("hidden");
        newUser.classList.add("hidden");
})




