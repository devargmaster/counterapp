import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas.js";

describe('Pruebas en 09-promesas.js', () => {
    test('getHeroeByIdAsync debe retornar un heroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then(hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done();
        });
    });

    test('debe de obtener un error si el heroe por id no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });
    });
});