import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

function MainLayout({ children }) {
  return (
    <div className="root__container">
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default MainLayout;
