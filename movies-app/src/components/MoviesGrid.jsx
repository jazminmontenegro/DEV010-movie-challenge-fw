import React from "react";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { get } from "../UtilsClient/getClient";
import Pagination from "./Pagination";
import { useQuery } from "../hooks/useQuery";
import { GenreFilter } from "./FilterGenre";
import OrderFilter from "./OrderApi";

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
        const genres = response.genres;
    
        if (genres) {
          setGenres(genres);
          setGenres(response.genres);
        } else {
          console.error("Error fetching genres: Invalid response format", response);
        }
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
    const apiUrl = search
      ? `/search/movie?query=${search}?&page=${currentPage}`
      : `/discover/movie?with_genres=${selectedGenre}&include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=${sortBy}`;
  
    get(apiUrl)
      .then((data) => {
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
