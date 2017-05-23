import React, { Component } from 'react';


class Navigation extends Component {
  render() {
    return (
      <nav className="main-navigation">
        <section className="left-links">
          <button className="button primary"> boards </button>
        </section>

        <section className="logo">
          Trelio
        </section>

        <section className="right-links">
          <button className="button primary"> mark ronquillo </button>
        </section>
      </nav>
    )
  }
}

export default Navigation;
