const signupForm=document.querySelector("form");
const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");
const usernameInput=document.getElementById("username");
const passwordInput=document.getElementById("password");
const confirmPasswordInput=document.getElementById("confirmpassword");

signupForm.addEventListener('submit', function(event){
    event.preventDefault();

    const name=nameInput.value.trim();
    const email=emailInput.value.trim();
    const username=usernameInput.value.trim();
    const password=passwordInput.value.trim();
    const confirmpassword=confirmPasswordInput.value.trim();


//clear the error messages
    errorMessage.textContent='';

    //validate inputs
    if(name==='' || email==='' || username==='' || password==='' || confirmpassword===''){
        errorMessage.textContent='please fill in all the fields';
        return;
    }
    if(password!== confirmpassword){
        errorMessage.textContent='check your password and try again'
        return;

    }

})

