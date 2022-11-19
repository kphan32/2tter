const { createContext, useContext, useState, useEffect } = require("react");

const defaultValue = {
  posts: null,
  loading: true,
  addPost: (post) => {},
};

const context = createContext(defaultValue);

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  useEffect(() => {
    setTimeout(() => {
      setPosts([
        post("Kavin Phan", "kphan", "this is a test post 1"),
        post("Kebin T", "yakuzi", "this is a test post 2"),
        post("Kavin Phan", "kphan", "this is a test post 1"),
        post("Kebin T", "yakuzi", "this is a test post 2"),
        post("Kavin Phan", "kphan", "this is a test post 1"),
        post("Kebin T", "yakuzi", "this is a test post 2"),
        post("Kavin Phan", "kphan", "this is a test post 1"),
        post("Kebin T", "yakuzi", "this is a test post 2"),
        post("Kavin Phan", "kphan", "this is a test post 1"),
        post("Kebin T", "yakuzi", "this is a test post 2"),
        post("Kavin Phan", "kphan", "this is a test post 1"),
        post("Kebin T", "yakuzi", "this is a test post 2"),
        post("Kavin Phan", "kphan", "this is a test post 1"),
        post("Kebin T", "yakuzi", "this is a test post 2"),
        post("Kavin Phan", "kphan", "this is a test post 1"),
        post("Kebin T", "yakuzi", "this is a test post 2"),
        post("Kavin Phan", "kphan", "this is a test post 1"),
        post("Kebin T", "yakuzi", "this is a test post 2"),
      ]);
      setLoading(false);
    }, 1000);
  }, [setPosts, setLoading]);

  const ctx = { posts: posts, loading, addPost };

  return <context.Provider value={ctx}>{children}</context.Provider>;
};

const usePosts = () => {
  const { posts, loading, addPost } = useContext(context);

  return { posts, loading, addPost };
};

const post = (username, handle, body, createdAt) => {
  return {
    username,
    handle,
    body,
    createdAt,
  };
};

export { PostsProvider as PostsProvider, usePosts };
