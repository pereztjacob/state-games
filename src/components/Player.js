import React, { Component } from 'react';
import Items from './Items';

export default class Player extends Component {
  state = {
    editing: false
  };

  handleEdit = () => {
    this.setState(prev => ({ editing: !prev.editing }));
  };

  render() {
    const { player, onUse, onNameChange } = this.props; // eslint-disable-line
    const { editing } = this.state;

    return (
      <div className = "player">
        {editing ? 
          <input value={player.name} onChange={({ target }) => onNameChange(target.value)}/> :
          <span>{player.name}</span>
        }
        &nbsp;
        <button onClick={this.handleEdit}>{editing ? 'Done' : 'Edit'}</button>
        <Items items = {player.inventory} onItem={onUse}/>
      </div>
    );
  }
}