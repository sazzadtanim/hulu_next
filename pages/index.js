import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Content from "../components/Content";
import Pagination from "../components/Pagination";

export default function Home({ movies, featuredMovies, topMovies }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="SazzadTanim" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Navigation */}
      <Nav />
      {/* Main Content */}
      <Content movies={movies} />
      {/* Featured Movies */}
      <h1 className="text-yellow-400 text-6xl my-10 flex justify-center text-bold">
        Featured today
      </h1>
      <Content movies={featuredMovies} />

      {/* Top movies */}
      <h1 className="text-yellow-400 text-6xl my-10 flex justify-center text-bold">
        Top Movies
      </h1>

      <Content movies={topMovies} />
      {/* pagination */}
      <Pagination />
    </div>
  );
}

export async function getServerSideProps(context) {
  const resp = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=9c3ef9cbaa77b72892d9c3b4c8b66fb7&with_genres=12"
  );
  const s = await resp.json();
  const movies = s.results;

  const featuredMoviesResp = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=9c3ef9cbaa77b72892d9c3b4c8b66fb7&with_genres=28"
  );
  const featuredMoviesRespJson = await featuredMoviesResp.json();

  const featuredMovies = featuredMoviesRespJson.results;

  const topMoviesResp = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=9c3ef9cbaa77b72892d9c3b4c8b66fb7&with_genres=10749"
  );
  const topMoviesRespJson = await topMoviesResp.json();

  const topMovies = topMoviesRespJson.results;
  return {
    props: {
      movies,
      featuredMovies,
      topMovies,
    },
  };
}
