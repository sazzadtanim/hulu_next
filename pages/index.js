import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Content from "../components/Content";

export default function Home({ movies }) {
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
      {/* footers */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const resp = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=9c3ef9cbaa77b72892d9c3b4c8b66fb7&with_genres=28"
  );
  const s = await resp.json();
  const movies = s.results;

  return {
    props: {
      movies,
    },
  };
}
