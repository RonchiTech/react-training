import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Convert from './Convert/Convert';
const languageOptions = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
];
const Translate = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <Dropdown
        message="Select a language"
        options={languageOptions}
        selected={selectedLanguage}
        onSelectedChange={setSelectedLanguage}
      />
      <hr/>
      <h3 className="ui header">Output:</h3>
      <Convert language={selectedLanguage} text={text} />
    </div>
  );
};
export default Translate;
