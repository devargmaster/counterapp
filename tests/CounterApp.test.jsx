// tests/CounterApp.test.jsx
import { CounterApp } from '../src/CounterApp.jsx';
import { render, screen } from "@testing-library/react";

describe('pruebas de counter app', () => {
    test('renders without crashing', () => {
        const { container } = render(<CounterApp value={100} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el valor inicial de 100', () => {
        render(<CounterApp value={100} />);
        expect(screen.getByText('100')).toBeTruthy();
    });
});