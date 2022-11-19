import { PostsProvider } from "../components/PostProvider";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PostsProvider>
      <Component {...pageProps} />
    </PostsProvider>
  );
}

export default MyApp;
