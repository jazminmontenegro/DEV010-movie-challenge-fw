import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { get } from "../UtilsClient/getClient";

// // El componente MoviesGrid hace una solicitud a la API de The Movie Database al montarse para obtener la lista de películas.
// export function MoviesGrid() {
//   // Estado local para almacenar la lista de películas.
//   const [movies, setMovies] = useState([]);
  
//   // useEffect se utiliza para realizar efectos secundarios (como solicitudes a API) en componentes funcionales.
//   useEffect(() => {

//         get('/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc').then((data) => {
//         setMovies(data.results);
      
//       });
//   }, []); // El array de dependencias vacío significa que este efecto se ejecutará solo una vez al montar el componente.

//   // Devuelve un componente JSX que representa la lista de películas utilizando el componente MovieCard.

//   return (
//     <section>
//     <ul className={styles.moviesGrid}>
//       {/* Mapea sobre la lista de películas y renderiza un componente MovieCard para cada una. */}
//       {movies.map((movie) => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
//     </ul>
//     </section>
//   );
// }

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Utiliza el estado de currentPage para hacer la solicitud a la API con la página actual
    get(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc`)
      .then((data) => {
        setMovies(data.results);
      });
  }, [currentPage]);

  const nextPage = () => {
    // Incrementa la página actual cuando se hace clic en "Next Page"
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    // No permitas que la página sea menor que 1 al hacer clic en "Previous Page"
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section>
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
      <div>
        <button  onClick={prevPage}>Previous Page</button>
        <span>Página actual: {currentPage}</span>
        <button className={styles.buttonNext} onClick={nextPage}>Next Page</button>
      </div>
    </section>
  );
}