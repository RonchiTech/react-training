import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, message, selected, onSelectedChange }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener('click', (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setIsActive(false);
    });
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
