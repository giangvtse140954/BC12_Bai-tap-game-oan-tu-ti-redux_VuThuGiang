import React, { Component } from 'react';
import { connect } from 'react-redux';
import CharacterAction from './CharacterAction';
import GameInfo from './GameInfo';
import './MainGame.css';
import { randomItem } from '../store/actions/gameActions';

class MainGame extends Component {
  render() {
    const isPlayer = true;
    return (
      <div className='game-container d-flex justify-content-between'>
        <CharacterAction
          player='player'
          isPlayer={isPlayer}
          item={this.props.playerItem}
        />
        <div style={{ textAlign: 'center' }}>
          <GameInfo />
          <button
            type='button'
            class='btn btn-success'
            onClick={this.props.randomItem}
          >
            Play game
          </button>
        </div>
        <CharacterAction
          player='playerComputer'
          item={this.props.computerItem}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  playerItem: state.game.playerItem,
  computerItem: state.game.computerItem,
});
export default connect(mapStateToProps, { randomItem })(MainGame);
