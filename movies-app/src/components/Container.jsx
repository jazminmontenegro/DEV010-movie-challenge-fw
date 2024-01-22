import React from 'react';
import { GenreFilter } from './FilterGenre';
import OrderFilter from './OrderApi';
import styles from '../components/Container.module.css';

const Contenedor = () => {
  return (
    <section data-testid="contenedor" className={styles.contenedor}>
      <GenreFilter />
      <OrderFilter />
    </section>
  );
};
  
export default Contenedor;