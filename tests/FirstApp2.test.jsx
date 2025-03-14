import {FirstApp} from "../src/FirstApp.jsx";
import {getAllByAltText, render} from "@testing-library/react";

describe('FirstApp', () => {
    const title= 'Hola soy Goku';
    test('debe hacer match con el snapshot', () => {
        const {container, getByText} = render(<FirstApp title={title} subtitle={"test1"} name={"walter"}/>);
       expect(container).toMatchSnapshot();
    })
    // test('debe de mostrar el titulo en un div', () => {
    //     const title= 'Titulo';
    //     const {container, getByText,getByTestId} = render(<FirstApp title={title} subtitle={"test1"} name={"walter"}/>);
    //     expect(getByText(title)).toBeTruthy();
    //
    //     expect(getByTestId('test-title').innerHTML).toBe(title);
    //     // const h1 = container.querySelector('h1');
    //     // expect(h1.textContent).toBe(title);
    // })
    // test('debe de mostrar el subtitulo en un prueba', () => {
    //
    //         const title= 'Titulo';
    //         const subtitle= 'Subtitulo';
    //         const {container, getByText} = render(<FirstApp title={title} subtitle={subtitle} name={"walter"}/>);
    //         expect(getByText(subtitle).innerHTML).toBe(subtitle);
    // })
})
