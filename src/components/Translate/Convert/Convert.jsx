import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { KEY } from '../../../translatekey';

const Convert = ({ language, text }) => {
  const [translation, setTranslation] = useState('');
  const [debounceText, setDebounceText] = useState(text);

  useEffect(() => {
    const onTextChange = setTimeout(() => {
      setDebounceText(text);
    }, 700);
    return () =>{
        clearTimeout(onTextChange);
    }
  }, [text]);

  useEffect(() => {
    const translateApi = async () => {
      if (!debounceText) {
        return setTranslation('');
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
            q: debounceText,
            target: language.value,
            key: KEY,
          },
        }
      );
      setTranslation(translations[0].translatedText);
    };

    // const searchTime = setTimeout(() => {
    translateApi();
    // }, 700);
    // return () => {
    //   clearTimeout(searchTime);
    // };
  }, [debounceText, language]);
  return <div>{translation}</div>;
};
export default Convert;
