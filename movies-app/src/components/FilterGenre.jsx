import React from 'react';
import styles from './Container.module.css'
import { useNavigate } from 'react-router-dom';


export function GenreFilter({ genres, selectedGenre, onChange }) {
  const navigate = useNavigate();

  const handleGenreChange = (genre) => {
    onChange(genre);
    navigate && navigate(`?genre=${(genre)}`);

  };

  
  return ( 
    <section className={styles.container}>
      <select className={styles.SelectGenreFilter} id="genre" value={selectedGenre} onChange={(e) => handleGenreChange(e.target.value)}>
        <option value="">All Gender</option>
        {genres && genres.length > 0 && (
          genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))
        )}
      </select>
    </section>
  );
}



