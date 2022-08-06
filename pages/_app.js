import "@fontsource/open-sans/600.css";
import "@fontsource/sora/500.css";
import Navfooter from "../components/NavFooter";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen antialiased gradient-bg selection:bg-rose-300 ">
      <Navfooter>
        <Component {...pageProps} />
      </Navfooter>
    </div>
  );
}

export default MyApp;
