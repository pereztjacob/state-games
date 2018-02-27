import React, { Component } from 'react';

export default class Items extends Component {
  render() {
    const { items, onItem } = this.props; // eslint-disable-line
    if(!items || items.length === 0) return null;
    return (
      <ul className="items">
        {items.map(item => (
          <li key={item.key}>
            <button onClick={() => onItem(item)}>{item.description}</button>
          </li>
        ))}
      </ul>
    );
  }
}