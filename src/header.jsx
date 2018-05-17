import React from 'react';
import _ from 'lodash';
import { NavLink } from 'react-router-dom'

const flexUseCases = [
  { id: 1, name: "Equal Heights", link: "equal-heights" },
  { id: 1, name: "Vertically Center", link: "vertical-center" },
  { id: 1, name: "Horizontally Center", link: "horizontal-center" },
  { id: 1, name: "Center", link: "center" },
  { id: 1, name: "Start", link: "start" },
  { id: 1, name: "End", link: "end" },
  { id: 1, name: "Space Between", link: "space-between" },
  { id: 1, name: "Wrap", link: "wrap" },
];

function generateItem() {
  return (
    _.map(flexUseCases, ({ id, name, link }) => (
      <NavLink
        to={'/' + link}
        activeClassName="navigation__nav-item--active"
        className="navigation__nav-item"
      >
        {name}
      </NavLink>
    ))
  )
}

function Header() {
  return (
    <header className="header">
      <div className="navigation">
        {generateItem()}
      </div>
    </header>
  );
}

export default Header;
