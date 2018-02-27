import React, { Component } from 'react';
import Items from './Items';
import './Room.css';

const directions = {
  e: 'East',
  w: 'West',
  n: 'North',
  s: 'South'
};

export default class Room extends Component{
  render() {
    const { room, onMove, onItem, action } = this.props; // eslint-disable-line
    const { title, description, image, doors, items } = room;
  
    return (
      <div className="room" style={{ backgroundImage: `url(${image})` }}>
        <div id="roomLayer">
          <h2>{title}</h2>
          <p>{description}</p>
          { items.length > 0 && <h3>You see:</h3> }
          <Items items={items} onItem={onItem}/>
          <h3>Doors</h3>
          <ul className="doors">
            {Object.keys(doors).map(key => (
              <li key={key}>
                <button onClick={() => onMove(doors[key])}>{directions[key]}</button>
              </li>
            ))}
          </ul>
          {action && <p className = "action">{action}</p>}
        </div>
      </div>
    );
  }
}