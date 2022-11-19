import { PostsProvider } from "../components/PostProvider";

import "../styles/globals.css";
import "react-circular-progressbar/dist/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <PostsProvider>
      <Component {...pageProps} />
    </PostsProvider>
  );
}

export default MyApp;
