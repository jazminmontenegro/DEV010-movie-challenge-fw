import React from 'react';
import { useNavigate } from 'react-router-dom';

 
export function GenreFilter({ genres, selectedGenre, onChange }) {
  const navigate = useNavigate();
  const handleGenreChange = (genre) => {
    onChange(genre);
    navigate(`?genre=${(genre)}`);
  };
    
  return (
    <div>
      <label htmlFor="genre">Select Genre:</label>
      <select id="genre" value={selectedGenre} onChange={(e) => handleGenreChange(e.target.value)}>
        <option value="">All</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
}



