import { NextRouter, useRouter } from "next/router";
import Seo from "../../components/Seo";

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: IBelongsToCollection;
  budget: number;
  genres: IGenres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompanies[],
  production_countries: IProductionCountries[],
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ISpokenLanguages[],
  status: string;
  tagline: string;
  title: string;
  video: boolean,
  vote_average: number;
  vote_count: number;
}

interface IBelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

interface IGenres {
  id: number;
  name: string;
}

interface IProductionCompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface IProductionCountries {
  iso_3166_1: string;
  name: string;
}

interface ISpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

type MovieDetailParams = [string, string] | [];

function Detail() {
  const router: NextRouter = useRouter();
  const [title, id] = (router.query.pattern || []) as MovieDetailParams;

  return (
    <div>
      <Seo title={title || "Loading..."} />
      <h1>{title || "Loading..."}</h1>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  return {
    props: {
      pattern: context.params.pattern
    }
  }
};

export default Detail;
