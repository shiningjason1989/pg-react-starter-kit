import React, { Component } from 'react';

import Header from './partials/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
