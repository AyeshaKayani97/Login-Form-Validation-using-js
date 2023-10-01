// validation code for inputs 
let emailInput = document.forms['form']['email'];
// console.log(emailInput)
let passwordInput = document.forms['form']['password'];
let emailError = document.getElementById("email_error");
let passwordError = document.getElementById("password_error");

function validated(){
    let hasError = false;    // Initialize a variable to track errors
    
    if(emailInput.value.length < 6 ){
        emailInput.style.border = '1px solid red';
        emailError.style.display = 'block';
        emailInput.focus()
        hasError = true;         // Set hasError to true if there's an error
    } 
    if(passwordInput.value.length < 6 ){
        passwordInput.style.border = '1px solid red';
        passwordError.style.display = 'block';
        passwordInput.focus()
        
        hasError = true;

}
return !hasError;  // Return false only if there's an error, otherwise return true
}

