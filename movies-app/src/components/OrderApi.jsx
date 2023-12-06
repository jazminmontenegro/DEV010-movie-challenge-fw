import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const OrderFilter = ({ selectedSortBy, onSortChange }) => {
  const navigate = useNavigate();

  const handleSortChange = (newSortBy) => {
    onSortChange(newSortBy);
    //navigate(`?sort_by=${newSortBy}`);
    navigate(`?sort_by=` +newSortBy);
  };

  return (
    <div>
      <label htmlFor="sort">Sort By:</label>
      <select
        id="sort"
        value={selectedSortBy}
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <option value="popularity.desc">Popularity</option>
        <option value="release_date.desc">Release Date</option>
        
      </select>
    </div>
  );
};

export default OrderFilter;