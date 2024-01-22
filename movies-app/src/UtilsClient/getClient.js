
const API = 'https://api.themoviedb.org/3';

export function get(path) {
  return new Promise((resolve, reject) => {
    fetch(API + path, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTc3NjFjYzg5ZDRiMjJkNDAxNjUxMmUzMjU4MWQyZCIsInN1YiI6IjY1NGU0Nzc4ZmQ0ZjgwMDBhZTJkZTAyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CONF-GnBy1TKzSr1X1-rnqHfK3VIyMBA_PVfpa-H77s',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!data) {
          throw new Error('Invalid JSON response');
        }
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}