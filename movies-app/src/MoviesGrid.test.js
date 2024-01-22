
import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { MoviesGrid } from "./components/MoviesGrid";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import { screen, fireEvent } from '@testing-library/react';
import Pagination from './components/Pagination';
import { get } from './UtilsClient/getClient';
import { GenreFilter } from './components/FilterGenre';
import { BrowserRouter } from 'react-router-dom';
import Contenedor from './components/Container';

test('renders LandingPage correctly', () => {
  render(
    <MemoryRouter> 
      <MoviesGrid />
    </MemoryRouter>
  );
})

// Pagination.test.js

describe('Pagination Component', () => {
  it('renders without crashing', () => {
    render(
      <Pagination
        pageCount={10}
        onPageChange={() => {}}
        currentPage={1}
        maxPage={10}
      />
    );
    // componente se renderice correctamente
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('handles page click correctly', () => {
    const onPageChangeMock = jest.fn();
    render(
      <Pagination
        pageCount={10}
        onPageChange={onPageChangeMock}
        currentPage={1}
        maxPage={10}
      />
    );

    // Simula un cambio de página haciendo clic en el botón "Next"
    fireEvent.click(screen.getByText('2'));

    // Verifica que la función onPageChange se haya llamado con el número correcto de página
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

});

// test para getClient

let selectedGenre;
let currentPage;
let sortBy;

beforeEach(() => {
  // Configura el estado antes de cada prueba
  selectedGenre = 'Action';
  currentPage = 1; // valor de página actual
  sortBy = 'Popularity';// valor de sortBy
});

describe('API tests', () => {
  test('get function resolves with valid data', async () => {
    // Mocking funcion fetch
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ mockData: `/discover/movie?with_genres=${selectedGenre}&include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=${sortBy}` }),
      })
    );

    // llamando la funcion
    const result = await get(`/discover/movie?with_genres=${selectedGenre}&include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=${sortBy}`);

  
    expect(result).toEqual({ mockData: `/discover/movie?with_genres=${selectedGenre}&include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=${sortBy}` });
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining(`/discover/movie?with_genres=${selectedGenre}&include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=${sortBy}`), expect.any(Object));
  });

  test('get function handles HTTP error', async () => {
    // Mocking la funcion HTTP error
    global.fetch = jest.fn(() => Promise.resolve({ ok: false, status: 404 }));

    // llamando la  function
    await expect(get('/nonexistentPath')).rejects.toThrow('HTTP error! Status: 404');
  });

});

// test para FilterGenre

// Mock de useNavigate para que devuelva una función simulada
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('GenreFilter Component', () => {
  // Datos de ejemplo de géneros
  const genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Drama' },
    
  ];

  it('renders GenreFilter component with options', () => {
    render(
      <BrowserRouter>
        <GenreFilter genres={genres} selectedGenre={1} onChange={() => {}} />
      </BrowserRouter>
    );

    // Asegura que el componente se renderice con las opciones correctas
    expect(screen.getByText('All Gender')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(screen.getByText('Drama')).toBeInTheDocument();
    // Add more expectations for other genres
  });

  it('calls onChange and navigate when a genre is selected', () => {
    const onChangeMock = jest.fn();
    const navigateMock = jest.fn();

    //  Configura useNavigate simulado para devolver la función navigateMock
    require('react-router-dom').useNavigate.mockReturnValue(navigateMock);

    render(
      <BrowserRouter>
        <GenreFilter genres={genres} selectedGenre={1} onChange={onChangeMock} />
      </BrowserRouter>
    );

    //  Simula el cambio de género
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '2' } }); //combobox" se refiere a un elemento HTML <select> que proporciona una lista desplegable de opciones

    // Asegura que onChange se llame con el argumento correcto
    expect(onChangeMock).toHaveBeenCalledWith('2');

    // Asegura que navigate se llame con la URL correcta
    expect(navigateMock).toHaveBeenCalledWith('?genre=2');
  });
});



