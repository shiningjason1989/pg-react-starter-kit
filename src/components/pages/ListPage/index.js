import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { addItem, deleteItem } from '../../../actions/items';

class ListPage extends Component {
  render() {
    const {
      items,
      addItem,
      deleteItem
    } = this.props;
    return (
      <div>
        <h1>This is ListPage</h1>
        <ul>
          {items.map((item) => (
            <li key={item}>
              <Link to={`detail/${item}`}>item#{item}</Link>
              <button onClick={() => deleteItem(item)}>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={addItem}>Add item</button>
        <br/><br/>
        <Link to="/">Back to HomePage</Link>
      </div>
    );
  }
}

export default connect(
  (state) => ({ items: state.items }),
  { addItem, deleteItem }
)(ListPage);
