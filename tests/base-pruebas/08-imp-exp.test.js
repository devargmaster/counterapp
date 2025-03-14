import {getHeroeById, getHeroesByOwner} from "../../src/base-pruebas/08-imp-exp.js";

describe('getHeroesByOwner', () => {
    test('returns an array of heroes', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({id:1, name:'Batman', owner:'DC'});
    });
    test('returns undefined si no existe el id', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    })
    test('returns array with heroes of DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([{id:1, name:'Batman', owner:'DC'},{id:3, name:'Superman', owner:'DC'},{id:4, name:'Flash', owner:'DC'}]);
    })
    test('returns array with heroes of Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
        expect(heroes).toEqual([{id:2, name:'Spiderman', owner:'Marvel'},{id:5, name:'Wolverine', owner:'Marvel'}]);
    })
})