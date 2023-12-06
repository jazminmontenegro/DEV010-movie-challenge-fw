import React, { useState } from 'react'
import styles from '../components/Search.module.css'
import { FiSearch } from "react-icons/fi"
import { useNavigate } from 'react-router';

export function Search() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    //navigate.push("/?search"+ searchText);
    navigate(`/?search=`+ searchText);
  }
  return (
    <form className= {styles.searchContainer} onSubmit={handleSubmit}>
      <section className={styles.searchBox}>
        <input className={styles.searchInput} 
          type="text" value={searchText} 
          onChange={(e)=> setSearchText(e.target.value)} />   {/*el valor del imput lo va a tener searchText  y setSearchText para cambiar el valor del input*/}
        <button className={styles.searchButton} type="submit">
          <FiSearch size={20} />
        </button>
      </section>
    </form>
  
  )
}
