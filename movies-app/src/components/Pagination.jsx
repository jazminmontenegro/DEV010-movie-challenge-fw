import React from "react"
import PropTypes from 'prop-types'
import ReactPaginate from "react-paginate"
import styles from "./Pagination.module.css"

const Pagination = ({ pageCount, onPageChange, currentPage, maxPage }) => {
  // Esta función maneja el cambio de página
  const handlePageClick = (selectedPage) => {
    // Impide que la página actual sea mayor que maxPage
    if (selectedPage.selected + 1 <= maxPage) {
      onPageChange(selectedPage.selected + 1)
    }
  }
  
  return (
    <ReactPaginate
      pageCount={Math.min(pageCount, maxPage)}  // Limita el número de páginas mostradas al mínimo entre el total de páginas y maxPage
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      onPageChange={handlePageClick}  // Utiliza la función definida para manejar el cambio de página
      containerClassName={styles.pagination}
      activeClassName={styles.active}
      initialPage={currentPage - 1}
      disableInitialCallback={true} // Evitar llamada inicial cuando currentPage es igual al initialPage
      nextLabel={currentPage < maxPage ? "Next" : "No more pages"}  // Cambia la etiqueta del botón "Next" según la página actual y maxPage
      breakLabel={"..."}
      previousLabel={currentPage > 1 ? "Previous" : "No previous pages"}  // Cambia la etiqueta del botón "Previous" según la página actual
    />
  )
}
     
export default Pagination