import React from "react";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { get } from "../UtilsClient/getClient";
import Pagination from "./Pagination";
import { useQuery } from "../hooks/useQuery";
import { GenreFilter } from "./FilterGenre";
import OrderFilter from "./OrderApi";

// export function MoviesGrid() {
//   const [movies, setMovies] = useState([])
//   const [currentPage, setCurrentPage] = useState(1)
//   const [totalPages, setTotalPages] = useState(1)

//   const query = useQuery();
//   const search = query.get('search');
//   console.log(search)

//   useEffect(() => {
//     const searchUrl= search ? "/search/movie?query=" + search : `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc` // const searchUrl = search ? "/search/movie?query=" + encodeURIComponent(search) : `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc`;

//     get(searchUrl)
//       .then((data) => {
//         setMovies(data.results)
//         setTotalPages(data.total_pages)
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error)
//       })
//   }, [currentPage,search])

//   return (
//     <section>
//       <ul className={styles.moviesGrid}>
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </ul>

//       {totalPages && !search &&(
//         <Pagination
//           pageCount={totalPages}
//           onPageChange={setCurrentPage}
//           currentPage={currentPage}
//           maxPage={500} // Establece el límite máximo de la página
//         />
//       )}

//     </section>
//   )
// }

// export function MoviesGrid() {
//   const [movies, setMovies] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [selectedGenre, setSelectedGenre] = useState('All'); // Nuevo estado para el género seleccionado

//   const query = useQuery();
//   const search = query.get('search');

//   useEffect(() => {
//     const searchUrl = search
//       ? `/search/movie?query=${search}&page=${currentPage}&with_genres=${selectedGenre}`
//       : `/discover/movie?with_genres=${selectedGenre}&include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc`;

//     get(searchUrl)
//       .then((data) => {
//         setMovies(data.results);
//         setTotalPages(data.total_pages);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, [currentPage, search,selectedGenre]);

//   return (
//     <section>
//       {/* Selector de género */}
//       <label htmlFor="genre">Select Genre:</label>
//       <select id="genre" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
//         <option value="All">All</option>
//         <option value="28">Action</option>
//         <option value="35">Comedy</option>
//         {/*  para otros géneros */}
//       </select>

//       <ul className={styles.moviesGrid}>
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </ul>

//       {totalPages && (
//         <Pagination
//           pageCount={totalPages}
//           onPageChange={setCurrentPage}
//           currentPage={currentPage}
//           maxPage={500}
//         />
//       )}
//     </section>
//   );
// }

// export function MoviesGrid() {
//   const [movies, setMovies] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [selectedGenre, setSelectedGenre] = useState('');
//   const [genres, setGenres] = useState([]);

//   const query = useQuery();
//   console.log({ query})
//   const search = query.get('search');

//   useEffect(() => {
//     const fetchGenres = async () => {
//       try {
//         const response = await get('/genre/movie/list');
//         setGenres(response.genres);
//       } catch (error) {
//         console.error('Error fetching genres:', error);
//       }
//     };

//     fetchGenres();
//   }, []);

//   useEffect(() => {
//     const searchUrl = search
//       ? `/search/movie?query=${search}&page=${currentPage}`
//       : `/discover/movie?with_genres=${selectedGenre}&include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc`;

//     get(searchUrl)
//       .then((data) => {
//         setMovies(data.results);
//         setTotalPages(data.total_pages);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, [currentPage, search, selectedGenre]);

//   return (
//     <section>
//       <GenreFilter genres={genres} selectedGenre={selectedGenre} onChange={setSelectedGenre} />

//       <ul className={styles.moviesGrid}>
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </ul>

//       {totalPages > 1 && (
//         <Pagination
//           pageCount={totalPages}
//           onPageChange={setCurrentPage}
//           currentPage={currentPage}
//           maxPage={500}
//         />
//       )}
//     </section>
//   );
// }

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genres, setGenres] = useState([]);
  const [sortBy, setSortBy] = useState("popularity.desc"); // Establece el valor inicial del filtro de orden

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await get("/genre/movie/list");
        setGenres(response.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    fetchData();
  }, [currentPage, search, selectedGenre, sortBy]);

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    setCurrentPage(1);
    fetchData();
  };

  const fetchData = () => {
    console.log("Current Page:", currentPage);
    console.log("Total Pages:", totalPages);
    const apiUrl = search
      ? `/search/movie?query=${search}`
      : `/discover/movie?with_genres=${selectedGenre}&include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=${sortBy}`;

    get(apiUrl)
      .then((data) => {
        console.log("API Response:", data);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <section>
      <GenreFilter
        genres={genres}
        selectedGenre={selectedGenre}
        onChange={setSelectedGenre}
      />

      <OrderFilter selectedSortBy={sortBy} onSortChange={handleSortChange} />

      <ul className={styles.moviesGrid}>
        {/* {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))} */}
        {movies && movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No hay películas disponibles.</p>
        )}
      </ul>

      {totalPages > 1 && (
        <Pagination
          pageCount={totalPages}
          onPageChange={setCurrentPage}
          currentPage={currentPage}
          maxPage={500}
        />
      )}
    </section>
  );
}
