import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { KEY } from '../../../translatekey';

const Convert = ({ language, text }) => {
  const [translation, setTranslation] = useState([]);
  useEffect(() => {
    const translateApi = async () => {
      if (!text) {
        return;
      }
      const {
        data: {
          data: { translations },
        },
      } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: KEY,
          },
        }
      );
     setTranslation(translations[0].translatedText);
    };
    translateApi();
  }, [text, language]);
  return <div>{translation}</div>;
};
export default Convert;
