import { TweetsProvider } from "../components/TweetProvider";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <TweetsProvider>
      <Component {...pageProps} />
    </TweetsProvider>
  );
}

export default MyApp;
