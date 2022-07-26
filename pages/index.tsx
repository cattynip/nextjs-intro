import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

interface IPopularMovieItem {
  adult: boolean,
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface IPopularMovie {
  page: string;
  results: IPopularMovieItem[];
}

function Home() {
  const [movies, setMovies] = useState<IPopularMovieItem[]>([]);

  useEffect(() => {
    (async () => {
      const data: IPopularMovie = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(data.results);
    })();
  }, []);

  return (
    <div>
      <Seo title="Home" />
      <h1>Home</h1>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}

export default Home;
