import { useEffect, useState } from 'react';

const RandomQuote = () => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const urlAPI = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=Hope',
          {
            headers: {
              'X-Api-Key': '+mr1FvMIt4HlhcKrCXdR0A==rs3ITjGGJPN7xufO',
              'Content-Type': 'application/json',
            },
          },
        );
        const response = await urlAPI.json();
        setQuote(response);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setQuote, setIsLoading]);

  if (isLoading) return <p className="white">Quote Loading... please wait.</p>;
  if (hasError) return <div className="white">Sorry something went wrong</div>;

  return (
    <div className="quote">
      {quote.map((data) => (
        <>
          <p key={quote.indexOf(data)}>{data.quote}</p>
          <h3>{data.author}</h3>
        </>
      ))}
    </div>
  );
};

export default RandomQuote;
