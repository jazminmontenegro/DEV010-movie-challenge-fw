import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { LandingPage } from './pages/LandingPage';
import { MemoryRouter } from 'react-router-dom';
import { MovieDetails}  from './pages/MovieDetails';
import '@testing-library/jest-dom';


// test('renders learn react link', () => {
//   render(<App/>);
//   const linkElement = screen.getByText(MovieDetails);
//   expect(linkElement).toBeInTheDocument();
// });

// Prueba para LandingPage
test('renders LandingPage correctly', () => {
  render(
    <MemoryRouter> 
      <LandingPage />
    </MemoryRouter>
  );

  // Realiza las verificaciones necesarias para LandingPage en el contexto del enrutador 
  // se utiliza memoryRouter porque permite simular el enrutamiento sin afectar la url
});

// Prueba para MovieDetails
test('renders MovieDetails correctly', () => {
  render(
    <MemoryRouter>
      <MovieDetails />
    </MemoryRouter>
  );

  // Realiza las verificaciones necesarias para MovieDetails en el contexto del enrutador
});

