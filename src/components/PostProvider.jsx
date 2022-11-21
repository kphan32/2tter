const { createContext, useContext, useState, useEffect } = require("react");

const defaultValue = {
  posts: null,
  loading: true,
  error: null,
  addPost: (post) => {},
};

const context = createContext(defaultValue);

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  useEffect(() => {
    (async () => {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/tweets`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );

      if (resp.status != 200) {
        return setError(resp.status);
      }

      const data = await resp.json();
      setPosts(data);
      setLoading(false);
    })();
  }, [setPosts, setLoading]);

  const ctx = { posts, loading, error, addPost };

  return <context.Provider value={ctx}>{children}</context.Provider>;
};

const usePosts = () => {
  const { posts, loading, error, addPost } = useContext(context);

  return { posts, loading, error, addPost };
};

export { PostsProvider as PostsProvider, usePosts };
