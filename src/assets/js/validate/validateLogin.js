
export const validateLogin = (mail, password) => {
    if (mail === "" || password ==="" || mail.length=== 0 || password.length === 0 || password.length <6 || typeof(mail) === "undefined" || typeof(password)=== "undefined") {
        return true;
    }
    return false;
}
