
test('Esta prueba no debe falla',()=>{
    // eslint-disable-next-line no-constant-condition
   const message1 = 'Hola Mundo';
   const message2 = message1.trim();

    expect(message1).toBe(message2);
})

