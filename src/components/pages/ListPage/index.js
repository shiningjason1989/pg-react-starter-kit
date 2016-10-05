import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ListPage extends Component {
  render() {
    const items = [1, 2, 3];
    return (
      <div>
        <h1>This is ListPage</h1>
        <ul>
          {items.map((item) => (
            <li key={item}><Link to={`detail/${item}`}>item#{item}</Link></li>
          ))}
        </ul>
        <Link to="/">Back to HomePage</Link>
      </div>
    );
  }
}
