import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, message, selected, onSelectedChange }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setIsActive(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option, index) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={index}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{message}</label>
        <div
          className={`ui selection dropdown ${
            isActive ? 'visible active' : ''
          }`}
          onClick={() => setIsActive((currVal) => !currVal)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${isActive ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};
Dropdown.defaultProps = {
  message: 'Select a color',
};
export default Dropdown;
