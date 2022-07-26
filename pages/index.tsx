import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Seo from "../components/Seo";

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

function Home({ results }: InferGetServerSidePropsType<GetServerSideProps>) {
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie: IPopularMovieItem) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{results.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
          text-align: center;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

/*
 * This function is run server side only.
 * Then, return of this function will be placed in Home function that is called by <Components /> component that receives results of this function as a props.
 * And, <Components /> component will give a results props to Home function.
*/
export async function getServerSideProps({ }: GetServerSideProps) {
  const { results }: IPopularMovie = await (await fetch("http://localhost:3000/api/movies")).json();

  return {
    props: {
      results
    }
  };
}

export default Home;
