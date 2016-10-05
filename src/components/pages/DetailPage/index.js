import React, { Component } from 'react';
import { Link } from 'react-router';

export default class DetailPage extends Component {
  render() {
    return (
      <div>
        <h1>This is ItemPage #{this.props.params.id}</h1>
        <Link to="/list">Back to ListPage</Link>
      </div>
    );
  }
}
