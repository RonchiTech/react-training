import React, { useState } from 'react';
// import Accordion from './components/Accordion/Accordion'
// import Search from './components/Search/Search'
import Dropdown from './components/Dropdown/Dropdown';
import './App.css';

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a front end javascript framework.',
//   },
//   {
//     title: 'Why use React?',
//     content: 'React is a favorite JS library among engineers',
//   },
//   {
//     title: 'How do you use React?',
//     content: 'You use React by creating components.',
//   },
// ];
const options = [
  {
    label: 'The Red',
    value: 'red',
  },
  {
    label: 'The Green',
    value: 'green',
  },
  {
    label: 'The Blue',
    value: 'blue',
  },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search/> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
    </div>
  );
};

export default App;
