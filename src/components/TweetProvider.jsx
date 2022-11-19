const { createContext, useContext, useState, useEffect } = require("react");

const defaultValue = {
  tweets: null,
  loading: true,
};

const context = createContext(defaultValue);

const TweetsProvider = ({ children }) => {
  const [tweets, setTweets] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTweets([
        tweet("Kavin Phan", "kphan", "this is a test tweet 1"),
        tweet("Kebin T", "yakuzi", "this is a test tweet 2"),
      ]);
      setLoading(false);
    }, 1000);
  }, [setTweets, setLoading]);

  const ctx = { tweets, loading };

  return <context.Provider value={ctx}>{children}</context.Provider>;
};

const useTweets = () => {
  const { tweets, loading } = useContext(context);

  return { tweets, loading };
};

const tweet = (username, handle, body, createdAt) => {
  return {
    username,
    handle,
    body,
    createdAt,
  };
};

export { TweetsProvider, useTweets };
