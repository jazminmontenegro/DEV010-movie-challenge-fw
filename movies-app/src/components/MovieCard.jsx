import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css" // css de tipo modulo se importa el objeto from el modulo 

export function MovieCard({movie}){
    
const imagenUrl="https://image.tmdb.org/t/p/w300" + movie.poster_path;
return (
<li className={styles.movieCard}>
    <Link to={"/movies/" + movie.id}>
    <img 
    width={230}
    height={345}
    className={styles.movieImage} src={imagenUrl} alt={movie.title}/>
    <section>{movie.title}</section>
    </Link>
</li>
)};