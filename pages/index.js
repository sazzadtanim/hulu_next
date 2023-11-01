import Head from "next/head";
import { useEffect, useState } from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Pagination from "../components/Pagination";

export default function Home() {
  const API_URL = "https://api.themoviedb.org/3/";
  const API_KEY = "b4a549abb798b19dbb7e63335d135053";

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [counts, setCounts] = useState({
    total_pages: 500,
    total_results: 10000,
  });

  const hasNext = counts.total_pages > currentPage;

  const loadMoreItems = () => {
    // just set the page, the effect will respond to it
    if (hasNext) {
      setCurrentPage((page) => page + 1);
    }
  };

  const onChangeSearch = (value) => {
    // reset page to 1 when changing search
    setSearchTerm(value);
    setCurrentPage(1);
  };

  useEffect(() => {
    const endpoint =
      searchTerm === ""
        ? `${API_URL}discover/movie?api_key=${API_KEY}&vote_average.gte=7.0&vote_average.lte=9.0&page=${currentPage}`
        : `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
            searchTerm
          )}&page=${currentPage}`;

    // could use async/await but promise/then is fine too
    setLoading(true);
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        // API doesn't actually throw an error if no API key
        if (!json?.results) {
          throw new Error(json?.statusMessage ?? "Error");
        }
        console.log(json);
        // replace state on page 1 of a new search
        // otherwise append to exisiting
        setMovies((previous) =>
          currentPage === 1 ? json.results : [...previous, ...json.results]
        );
        setCounts({
          total_pages: json.total_pages,
          total_results: json.total_results,
        });
      })
      .catch((error) => console.error("Error:", error))
      .finally(() => setLoading(false));
  }, [searchTerm, currentPage]);

  const handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight - 1) {
      loadMoreItems();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  });

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
      {/* <Content movies={movies} /> */}
      {/* Featured Movies */}
      <h1 className="text-yellow-400 text-6xl my-10 flex justify-center text-bold">
        TOP RATED
      </h1>

      {loading ? <div>Loading...</div> : <Content movies={movies} />}

      {/* Top movies */}
      {/* <h1 className="text-yellow-400 text-6xl my-10 flex justify-center text-bold">
        Top Movies
      </h1> */}

      {/* <Content movies={topMovies} /> */}
      {/* pagination */}
      <Pagination />
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const resp = await fetch(
//     "https://api.themoviedb.org/3/discover/movie?api_key=9c3ef9cbaa77b72892d9c3b4c8b66fb7&with_genres=12"
//   );
//   const s = await resp.json();
//   const movies = s.results;

//   const featuredMoviesResp = await fetch(
//     "https://api.themoviedb.org/3/discover/movie?api_key=9c3ef9cbaa77b72892d9c3b4c8b66fb7&vote_average.gte=7.0&vote_average.lte=9.0"
//   );

//   const featuredMoviesRespJson = await featuredMoviesResp.json();

//   const featuredMovies = featuredMoviesRespJson.results;

//   const topMoviesResp = await fetch(
//     "https://api.themoviedb.org/3/discover/movie?api_key=9c3ef9cbaa77b72892d9c3b4c8b66fb7&with_genres=10749"
//   );
//   const topMoviesRespJson = await topMoviesResp.json();

//   const topMovies = topMoviesRespJson.results;
//   return {
//     props: {
//       movies,
//       featuredMovies,
//       topMovies,
//     },
//   };
// }
