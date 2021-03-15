import React, { useState } from 'react';
import Accordion from './components/Accordion/Accordion';
import Search from './components/Search/Search';
import Dropdown from './components/Dropdown/Dropdown';
import Translate from './components/Translate/Translate';
import './App.css';

import { Route, NavLink, Switch } from 'react-router-dom';
const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework.',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components.',
  },
];
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
      <header className='ui secondary pointing menu'>
        <ul>
          <NavLink to="/" exact className="item">
            <li>Accordion</li>
          </NavLink>
          <NavLink to="/list" className="item">
            {' '}
            <li>List</li>
          </NavLink>
          <NavLink to="/dropdown" className="item">
            {' '}
            <li>Dropdown</li>
          </NavLink>
          <NavLink to="/translate" className="item">
            {' '}
            <li>Translate</li>
          </NavLink>
        </ul>
      </header>
      <Switch>
        <Route path="/list">
          <Search />
        </Route>
        <Route path="/dropdown">
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
        </Route>
        <Route path="/translate">
          <Translate />
        </Route>
        <Route exact path="/">
          <Accordion items={items} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
