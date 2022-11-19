const { createContext, useContext, useState, useEffect } = require("react");

const defaultValue = {
  tweets: null,
  loading: true,
  addTweet: (tweet) => {},
};

const context = createContext(defaultValue);

const TweetsProvider = ({ children }) => {
  const [tweets, setTweets] = useState(null);
  const [loading, setLoading] = useState(true);

  const addTweet = (tweet) => {
    setTweets([...tweets, tweet]);
  };

  useEffect(() => {
    setTimeout(() => {
      setTweets([
        tweet("Kavin Phan", "kphan", "this is a test tweet 1"),
        tweet("Kebin T", "yakuzi", "this is a test tweet 2"),
      ]);
      setLoading(false);
    }, 1000);
  }, [setTweets, setLoading]);

  const ctx = { tweets, loading, addTweet };

  return <context.Provider value={ctx}>{children}</context.Provider>;
};

const useTweets = () => {
  const { tweets, loading, addTweet } = useContext(context);

  return { tweets, loading, addTweet };
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
