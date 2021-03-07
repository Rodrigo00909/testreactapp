import { getUser, getUsuarioActivo } from "../base/05-funciones"

describe('Pruebas en 05-funciones.test.js', () => {
    test('getUser debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        console.log(user);

        expect(user).toStrictEqual(userTest) // Comparar dos objetos: toEqual
        
    })
    // Getusuario activo debe retornar un objeto
    test('getUsuarioActivo debe devolver un objeto', () => {
        const nombre = 'Fabilo';

        const user = getUsuarioActivo(nombre);
        
        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: nombre
        });
        
    })
    
    
    
})
