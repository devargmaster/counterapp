import {retornaArreglo} from "../../src/base-pruebas/07-deses-arr.js";

describe('pruebas en 07 deses', () => {
    test('debe retornar un string y un numero', () => {
       const [letters, numbers] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);
    })
});