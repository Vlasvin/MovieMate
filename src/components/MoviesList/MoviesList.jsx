import {
  MovieList,
  MovieItem,
  MovieListImg,
  MovieName,
  MovieOverlay,
} from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const baseUrl = 'https://image.tmdb.org/t/p/w400';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/images=1000x700';

  return (
    <MovieList>
      {movies.map(movie => {
        const name = movie.name ?? movie.title;
        if (location.pathname.includes('/movies')) {
          return (
            <MovieItem key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                <MovieListImg
                  src={
                    movie.poster_path
                      ? `${baseUrl}${movie.poster_path}`
                      : defaultImg
                  }
                  alt={`Poster for ${name}`}
                />
                <MovieOverlay>
                  <MovieName> {name}</MovieName>
                </MovieOverlay>
              </Link>
            </MovieItem>
          );
        } else {
          return (
            <MovieItem key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                <MovieListImg
                  src={
                    movie.poster_path
                      ? `${baseUrl}${movie.poster_path}`
                      : defaultImg
                  }
                  alt={`Poster for ${name}`}
                />
                <MovieOverlay>
                  <MovieName> {name} </MovieName>
                </MovieOverlay>
              </Link>
            </MovieItem>
          );
        }
      })}
    </MovieList>
  );
};

export default MoviesList;
