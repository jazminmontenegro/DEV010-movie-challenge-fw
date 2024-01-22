import React from 'react';
import styles from './Container.module.css'
import { useNavigate } from 'react-router-dom';


const OrderFilter = ({ selectedSortBy, onSortChange }) => {
  const navigate = useNavigate();

  const handleSortChange = (newSortBy) => {
    onSortChange(newSortBy);
    navigate(`?sort_by=` +newSortBy);
  };
 

  return (
    <section className={styles.container}>  
      <select className={styles.SelectOrderFilter}
        id="sort"
        value={selectedSortBy}
        onChange={(e) => handleSortChange(e.target.value)}
      >
        
        <option value="popularity.desc">Popularity</option>
        <option value="release_date.desc">Release Date</option>
        
      </select>
    </section>
  );
};

export default OrderFilter;


