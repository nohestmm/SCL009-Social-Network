

export const validateUser = (name, mail, password) => {
if (name === '' || mail === '' || password === '' || password.length<6) {
    return true;
    
}
return false;
}

//validar undefined y null
// uno para true y otro para false
//por cada parámetro q recibe la f(x) hacerle un if
// if (mail ==="" || mail.length===0|| typeOf(mail) === "undefined")