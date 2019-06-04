export const validateForgotPassword = (email) =>{

    if (email === '' || email.length=== 0 || typeof(email) === "undefined" ) {
        return true;
 
    }
    return false;
 
 }