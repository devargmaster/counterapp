import {getUser, getUsuarioActivo} from "../../src/base-pruebas/05-funciones.js";

describe('pruebas en 05-funciones.js', () => {
    test ('getuser debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        console.log(user);
        expect(userTest).toStrictEqual(user);
    });
    test('getUsuarioActivo debe de retornar un objeto', () => {
        const nombre = 'Walter';
        const user= getUsuarioActivo(nombre);
        expect (user).toStrictEqual({
            uid: 'ABC567',
            username: nombre
        })

    })

})