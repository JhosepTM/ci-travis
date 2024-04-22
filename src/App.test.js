import { render, screen, act } from '@testing-library/react';
import Contador from './components/Contador';

describe('Componente Contador', () => {
  test('debería renderizar el contador inicial en 0', () => {
    render(<Contador />);
    const contador = screen.getByText(/Contador: 0/i);
    expect(contador).toBeInTheDocument();
  });

  test('debería incrementar el contador al hacer clic en el botón "Incrementar"', () => {
    render(<Contador />);
    const button = screen.getByRole('button', { name: /Incrementar/i });
    act(() => { 
      button.click();
    });
    const contador = screen.getByText(/Contador: 1/i);
    expect(contador).toBeInTheDocument();
  });

  test('debería decrementar el contador al hacer clic en el botón "Decrementar"', () => {
    render(<Contador />);
    const contador = screen.getByText(/Contador: 0/i);
    expect(contador).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /Decrementar/i });
    act(() => {
      button.click();
    });
    const nuevoContador = screen.getByText(/Contador: -1/i);
    expect(nuevoContador).toBeInTheDocument();
  });
});