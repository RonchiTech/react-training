import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [input, setInput] = useState('');

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    onFormSubmit(input);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={(e) => onFormSubmitHandler(e)}>
        <div className="field">
          <label>Video Search</label>
          <input
            placeholder="Search videos..."
            value={input}
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
