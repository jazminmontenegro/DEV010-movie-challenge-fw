const API= 'https://api.themoviedb.org/3'
export function get(path){
    return ( // Utiliza la función fetch para hacer una solicitud GET a la API de The Movie Database.
    fetch(API + path, {
      headers: {
        // Se incluye la clave de autorización en los encabezados para autenticarse con la API.
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTc3NjFjYzg5ZDRiMjJkNDAxNjUxMmUzMjU4MWQyZCIsInN1YiI6IjY1NGU0Nzc4ZmQ0ZjgwMDBhZTJkZTAyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CONF-GnBy1TKzSr1X1-rnqHfK3VIyMBA_PVfpa-H77s', // ¡Reemplaza esto con tu clave de autorización real!
        'Content-Type': 'application/json', // Indica que el tipo de contenido es JSON.
      },
    })
      // Convierte la respuesta de la solicitud a un objeto JSON.
      .then((result) => result.json())
)}