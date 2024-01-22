import React from 'react';
import { render, screen, act} from '@testing-library/react';
import {App} from './App';
import { LandingPage } from './pages/LandingPage';
import { MemoryRouter } from 'react-router-dom';
import { MovieDetails}  from './pages/MovieDetails';
import '@testing-library/jest-dom';



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

// renderizar los componentes de app

test('renders App component', async () => {
  render(<App />);
  // Utiliza act para manejar las promesas de forma asíncrona
  await act(async () => {
    const  landingPageElement = screen.getByTestId('landing-page');
    expect(landingPageElement).toBeInTheDocument();
  });
});

// test para pobrar moviesGrid



// 
// jest.mock('./UtilsClient/getClient'); // Realiza un mock del módulo getClient

// const mockData = {
//   genres: [
//     { id: 28, name: 'Action' },
//     { id: 35, name: 'Comedy' },
//   ],
//   results: [
//     { id: 1, title: 'Movie 1' },
//     { id: 2, title: 'Movie 2' },
//   ],
//   total_pages: 1,
// };

// describe('MoviesGrid component', () => {
//   beforeEach(() => {
//     getClient.get.mockResolvedValue(mockData); // Configura el mock para devolver los datos simulados
//   });

//   test('renders MoviesGrid correctly', async () => {
//     render(<MoviesGrid />);

  
//     // Espera a que los datos se carguen y el componente se actualice
//     await waitFor(() => {
//       expect(screen.getByText('Movie 1')).toBeInTheDocument();
//       expect(screen.getByText('Movie 2')).toBeInTheDocument();
//     });
//   });

//   test('handles sorting change', async () => {
//     render(<MoviesGrid />);

//     // Espera a que los datos se carguen y el componente se actualice
//     await waitFor(() => {
//       expect(screen.getByText('Movie 1')).toBeInTheDocument();
//       expect(screen.getByText('Movie 2')).toBeInTheDocument();
//     });

//     // Cambia la opción de ordenamiento
//     userEvent.selectOptions(screen.getByLabelText('Ordenar por'), 'popularity.asc');

//     // Espera a que los datos se vuelvan a cargar con el nuevo ordenamiento
//     await waitFor(() => {
//       expect(screen.getByText('Movie 2')).toBeInTheDocument();
//       expect(screen.getByText('Movie 1')).toBeInTheDocument();
//     });
//   });
// });
