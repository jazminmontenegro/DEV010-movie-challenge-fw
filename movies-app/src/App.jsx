//import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css"
import { LadingPage } from "./pages/LandingPage";
import { MovieDetails } from "./pages/MovieDetails";
import {BrowserRouter as Router,
    Route,
    Routes,
    Link,
  } from "react-router-dom";


  export function App() {
    return (
      <Router>
        <div>
          <header>
            <Link to="/">
            <h1 className={styles.title}>Movies</h1>
            </Link>
          </header>
          <main>
            <Routes>
            <Route exact path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/" element={<LadingPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    );
  }

  
  
  
  
  
  

