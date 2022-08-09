import "@fontsource/open-sans/600.css";
import "@fontsource/sora/500.css";
import Navfooter from "../components/NavFooter";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen antialiased gradient-bg selection:bg-rose-300 ">
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navfooter>
        <Component {...pageProps} />
      </Navfooter>
    </div>
  );
}

export default MyApp;
