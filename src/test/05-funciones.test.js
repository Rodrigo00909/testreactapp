import { getUser } from "../base/05-funciones"

describe('Pruebas en 05-funciones.test.js', () => {
    test('getUser debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
        username: 'El_Papi1502'
        }

        const user = getUser();
        console.log(user);

        expect(user).toStrictEqual(userTest)


        
    })
    
    
})
