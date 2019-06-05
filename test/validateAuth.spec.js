import { validateUser } from '/assets/js/validate.js';
//testing
describe("función validateUser" ,() => {
    it("debería retornar false si es que falta un campo", () => {
        expect(validateUser("moco","", "123456").toBe(false))
        expect(validateUser ())
    })
})

//método toHaveLength(6)