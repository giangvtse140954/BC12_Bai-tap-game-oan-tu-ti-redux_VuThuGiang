import React, { Component } from 'react';
import ThreeChoices from './ThreeChoices';

export default class CharacterAction extends Component {
  render() {
    return (
      <div className='char'>
        <div className='speech-bubble'>
          <img src={`./assets/images/${this.props.item}.png`} alt='action' />
        </div>

        <img src={`./assets/images/${this.props.player}.png`} alt='player' />
        {this.props.isPlayer ? <ThreeChoices /> : null}
      </div>
    );
  }
}
