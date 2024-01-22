import React from 'react'
import { MoviesGrid } from "../components/MoviesGrid"
import { Search } from "../components/Search"

// LandingPage actúa como el contenedor principal para la página de inicio de la aplicación, incluyendo componentes como Search y MoviesGrid

export function LandingPage() {
  return (
    <section data-testid="landing-page">
      <Search/>
      <MoviesGrid />
    </section>
  )
}