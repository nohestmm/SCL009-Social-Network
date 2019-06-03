

export const validateUser = (name, mail, password) => {
if (name === '' || mail === '' || password === '' || password.length<6) {
    return false;
    
}
return true;
}