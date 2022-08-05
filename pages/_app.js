import "@fontsource/fira-mono";
import "@fontsource/ibm-plex-mono";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/inter/variable.css";
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
