import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>This is HomePage</h1>
        <Link to="/list">Go to ListPage</Link>
      </div>
    );
  }
}
