import { MovieProps } from "../App";
import { Header } from "./Header";
import { MovieCard } from "./MovieCard";

interface ContentProps {
  genreTitle: string;
  movies: MovieProps[];
}

export function Content({ genreTitle, movies }: ContentProps) {
  return (
    <div className="container">
      <Header title={genreTitle} />

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
