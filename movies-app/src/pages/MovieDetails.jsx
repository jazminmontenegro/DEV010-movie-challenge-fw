import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css"
import { useEffect, useState } from "react";
import { get } from "../UtilsClient/getClient";

export function MovieDetails(){
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

   useEffect(() => {
    get("/movie/" + movieId).then(data => {
        setMovie(data);

    })
   },[movieId]);

   if (!movie){
    return null;
   }
    const imagenUrl="https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
    <section className={styles.detailsContainer}>
         <img 
        className={`${styles.column} ${styles.movieImage}`}
        src={imagenUrl}
        alt={movie.title}/>
     <section className={`${styles.column} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
            <strong>Title:</strong>{movie.title}
        </p>
        <p>
            <strong>Genres:</strong>{" "}
            {movie.genres ? movie.genres.map((genre) => genre.name).join(" ,") : "N/A"}
        </p>
        <p>
            <strong>Description:</strong>{movie.overview}
        </p>
     </section>
    </section>
    
  );
}

