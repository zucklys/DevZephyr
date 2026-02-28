// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DevZephyr title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DevZephyr/i);
    expect(titleElement).toBeInTheDocument();
});
