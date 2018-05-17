import React from 'react';
import _ from 'lodash';
import { NavLink } from 'react-router-dom'

const flexLayouts = [
  { id: 1, name: "Layout 1", link: "layout1" },
  { id: 2, name: "Layout 2", link: "layout2" },
  { id: 3, name: "Layout 3", link: "layout3" },
  { id: 4, name: "Layout 4", link: "layout4" },
  { id: 5, name: "Layout 5", link: "layout5" },
  { id: 6, name: "Layout 6", link: "layout6" },
  { id: 7, name: "Layout 7", link: "layout7" },
  { id: 8, name: "Layout 8", link: "layout8" },
  { id: 9, name: "Layout 9", link: "layout9" },
  { id: 10, name: "Layout 10", link: "layout10" },
];

function generateItem() {
  return (
    _.map(flexLayouts, ({ id, name, link }) => (
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

function Footer() {
  return (
    <footer className="footer">
      <div className="navigation">
        {generateItem()}
      </div>
    </footer>
  );
}

export default Footer;
