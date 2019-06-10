export const validateRegister = (name, mail, password) => {
    if (name === '' || mail === '' || password === '' || typeof(mail) ==='undefined' || password.length<6 || typeof(mail) === 'object') {
        return true;
        
    }
    return false;
    }
    
    export const validateMail = (email) => {
        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(email)){
            return false;
        }else {
            return true;
        }   
    }
    //validar undefined y null
    // uno para true y otro para false
    //por cada parámetro q recibe la f(x) hacerle un if
    // if (mail ==="" || mail.length===0|| typeOf(mail) === "undefined")