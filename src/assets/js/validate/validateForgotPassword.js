export const validateForgotPassword = (email) =>{

    if (email === '' || typeof(email) === "undefined" ) {
        return true;
        
    }
    return false;

}