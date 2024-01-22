import React from 'react'
import styles from '../src/pages/MovieDetails.module.css'
import { LandingPage } from './pages/LandingPage'
import { MovieDetails } from './pages/MovieDetails'
import {BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
//  Componentes y utilidades proporcionadas por react-router-dom para manejar enrutamiento en la aplicación.


export function App() {
  return (
    <Router>
      <div>
        <header>
          {/* Solo muestra el botón en la página de detalles de la película */}
          <Routes>
            <Route path="/movies/:movieId" element={<Link to="/"><button className={styles.buttonImg}></button></Link>} />
            <Route path="/" element={null} />
          </Routes>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
           
          </Routes>
        </main>
      </div>
    </Router>
  )
}

  
  
  
  
  

