import { validateLogin } from '../src/assets/js/validate/validateLogin.js';
//testing
describe("función validateLogin" ,() => {
    it("debería retornar true si es que falta un campo", () => {
        expect(validateLogin("", "123456")).toBe(true)
      
    })
})

//método toHaveLength(6)