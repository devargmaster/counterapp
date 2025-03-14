import {getImagen} from "../../src/base-pruebas/11-async-await.js";

describe('async', () => {
    test('getimagen debe retornar url de la imagen', async() => {
    const url = await getImagen();
    console.log(url);
    expect(typeof url).toBe('string');
    })
})