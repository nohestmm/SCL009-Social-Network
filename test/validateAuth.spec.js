import { validateLogin } from '../src/assets/js/validate/validateLogin.js';
import { validateRegister, validateMail } from '../src/assets/js/validate/validateRegister.js';
import { validateForgotPassword } from '../src/assets/js/validate/validateForgotPassword.js';

//testing validateLogin
describe("función validateLogin" ,() => {
    it("debería retornar true si es que falta un campo", () => {
        expect(validateLogin("", "123456")).toBe(true) //mail vacío, password OK
        expect(validateLogin("betanyeli@testing.com", "")).toBe(true) // mail ok, password vacío
        expect(validateLogin("b@.com", "1234")).toBe(true) // mail < 6, password < 6
        expect(validateLogin("", "")).toBe(true) // mail.length = 0, password.length = 0;
    });

    it("debería retornar false si todo OK", () => {
        expect(validateLogin("betanyeli@testing.com", "1234567")).toBe(false) // Retorna false porque está todo OK
    });
});

//testing validateRegister
describe("función validateRegister" ,() => {
    it("debería retornar true si es que falta un campo", () => {
        expect(validateRegister("", "", "")).toBe(true) //Name, Correo, Password vacío
        expect(validateRegister("", undefined, "123456")).toBe(true) //Name.length=0, mail = undefined, pass<6
        expect(validateRegister("", "object", "1234")).toBe(true) //Name vacio, mail = null, pass<6
    });
    it("debería retornar false si todo OK", () => {
      expect(validateRegister("Fighter1993", "nohemy@testing.com", "1234567")).toBe(false) // Retorna false porque está todo OK
    
});
});

describe("función validateMail" ,() => {
    it("debería retornar false si el mail está bien escrito, y true si NO", () => {
        expect(validateMail("betangelii_1234@gmail.com")).toBe(false) //Correo correcto
        expect(validateMail("dharmaa.com")).toBe(true) //Correo incorrecto
    });
});


describe("función validateForgotPassword" ,() => {
    it("debería retornar false si el mail está bien escrito, true si NO", () => {
        expect(validateForgotPassword("")).toBe(true) //Correo incorrecto
        expect(validateForgotPassword(undefined)).toBe(true) //Correo incorrecto
        expect(validateForgotPassword("lachicamanson2000@hotmail.com")).toBe(false) //Correo correcto
    });
});
//método toHaveLength(6)