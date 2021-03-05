import { getSaludo } from '../base/02-template-string';

describe('Pruebas en 02-template-string.test.js', () => {
    test('getSaludo debe de retornar Hola + variable', () => {
        const nombre = 'Federico';
        
        const saludo = getSaludo(nombre);

        
        expect(saludo).toBe('Hola ' + nombre);
    })

    test('getSaludo debe devolver Hola Carlos si no existe un parametro ', () => {
        const saludo = getSaludo();
        
        expect(saludo).toBe('Hola Carlos'); 
    })
    
})
