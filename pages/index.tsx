import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

interface IPopularMoviesItem {
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

interface IPopularMovies {
  page: string;
  results: IPopularMoviesItem[];
}

interface IMovieClickProps {
  id: number;
  title: string;
}

function Home({ results }: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();

  const onClickMovieCard = ({ id, title }: IMovieClickProps) => {
    router.push({
      pathname: `/movies/${id}`,
      query: {
        title,
      },
    },
      `movies/${id}`,
    );
  };

  return (
    <div className="box">
      <Seo title="Home" />
      <div className="title">
        <h1>Home</h1>
      </div>

      <div className="movies">
        {results?.map((movie: IPopularMoviesItem) => (
          <div className="movie" key={movie.id} onClick={() => { onClickMovieCard({ id: movie.id, title: movie.original_title }) }}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <h4>
              <Link
                href={{
                  pathname: `/movies/${movie.id}`,
                  query: {
                    title: movie.original_title,
                  },
                }}
                as={`/movies/${movie.id}`}
              >
                <a>
                  {movie.original_title}
                </a>
              </Link>
            </h4>
          </div>
        ))}
      </div>

      <style jsx>{`
        .box {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;
        }
        .container {
          width: 100%;
        }
        .movies {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
          text-align: center;
          width: 100%;
        }
        .movie {
          cursor: pointer;
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
          font-size: 22px;
          text-align: center;
        }
      `}</style>
    </div >
  );
}

/*
 * This function is run server side only.
 * Then, return of this function will be placed in Home function that is called by <Components /> component that receives results of this function as a props.
 * And, <Components /> component will give a results props to Home function.
*/
export async function getServerSideProps({ }: GetServerSideProps) {
  const { results }: IPopularMovies = await (await fetch("http://localhost:3000/api/movies")).json();

  return {
    props: {
      results
    }
  };
}

export default Home;
