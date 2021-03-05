describe('Pruebas en el archivo demo.test.js', () => {
    test('Los string deben de ser iguales', () => {
        const mensaje = 'Hola mundo';
    
        const mensaje2 = `Hola mundo`;
    
        expect(mensaje).toBe(mensaje2);
    });
})