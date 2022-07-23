import { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        nav {
          background-color: tomato;
        }

        a {
          text-decoration: none;
          font-weight: 900;
        }

        .active {
          color: yellow;
        }
      `}</style>

    </div>
  );
}

export default App;
