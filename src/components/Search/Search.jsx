import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  console.log(results);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (search) {
        const fetchData = async () => {
          const { data } = await axios.get(
            'https://en.wikipedia.org/w/api.php',
            {
              params: {
                action: 'query',
                list: 'search',
                format: 'json',
                origin: '*',
                srsearch: search,
              },
            }
          );
          setResults(data.query.search);
        };
        fetchData();
      } else {
        setResults([]);
      }
    }, 700);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="__blank"
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            type="text"
            placeholder=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};
export default Search;
