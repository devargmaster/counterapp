import {FirstApp} from "../src/FirstApp.jsx";
import {getAllByAltText, getAllByText, render, screen} from "@testing-library/react";
const title= 'Hola soy Goku';
const subtitle= 'Subtitulo';
describe('FirstApp', () => {

    test('debe hacer match con el snapshot', () => {
        const {container, getByText} = render(<FirstApp title={title} subtitle={"test1"} name={"walter"}/>);
       expect(container).toMatchSnapshot();
    });
    test ('debe mostrar el mensaje "Hola soy Goku"', () => {
        render(<FirstApp title={title}/>);
        expect(screen.getByText(title)).toBeTruthy();

        // expect(screen)
    });
    test('debe de mostrar el titulo en un h1', () => {
        render(<FirstApp title={title}/>);
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
    });
    test('el subtitulo debe aparecer en un parrafo', () => {
        render(<FirstApp title={title} subtitle={subtitle}/>);
        expect(screen.getByText(subtitle)).toBeTruthy();
    });


})
