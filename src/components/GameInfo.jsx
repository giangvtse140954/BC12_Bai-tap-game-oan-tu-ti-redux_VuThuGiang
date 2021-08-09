import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameInfo extends Component {
  render() {
    return (
      <div className='info'>
        <h1 className='info__title'>I'm iron man, i love you 3000 !!</h1>
        <h1>
          Số bàn thắng: <span>{this.props.winCount}</span>
        </h1>
        <h1>
          Số bàn chơi: <span>{this.props.timeCount}</span>
        </h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  timeCount: state.game.timeCount,
  winCount: state.game.winCount,
});
export default connect(mapStateToProps)(GameInfo);
