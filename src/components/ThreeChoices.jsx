import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chooseItem } from '../store/actions/gameActions';

class ThreeChoices extends Component {
  render() {
    const id = this.props.item;
    const items = [
      {
        id: 'keo',
        url: './assets/images/keo.png',
      },
      {
        id: 'bua',
        url: './assets/images/bua.png',
      },
      {
        id: 'bao',
        url: './assets/images/bao.png',
      },
    ];
    return (
      <div className='d-flex align-items-center justify-content-around choices'>
        {items.map((item, i) => {
          return (
            <img
              src={item.url}
              alt='action'
              className={`${id === item.id && 'selected'}`}
              key={item.id}
              onClick={() => {
                this.props.chooseItem(item.id);
              }}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.game.playerItem,
});
export default connect(mapStateToProps, { chooseItem })(ThreeChoices);
