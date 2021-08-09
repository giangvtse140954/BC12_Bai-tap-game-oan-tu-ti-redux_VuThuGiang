import { CHOOSE_ITEM, RANDOM_ITEM } from '../constants/gameConstants';

const initialState = {
  playerItem: 'keo',
  computerItem: 'keo',
  timeCount: 0,
  winCount: 0,
};
const gameReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHOOSE_ITEM:
      return { ...state, playerItem: payload };
    case RANDOM_ITEM:
      const randomNum = Math.floor(Math.random() * 3);
      const items = ['keo', 'bua', 'bao'];
      let count = state.winCount;
      if (
        (state.playerItem === 'keo' && items[randomNum] === 'bao') ||
        (state.playerItem === 'bua' && items[randomNum] === 'keo') ||
        (state.playerItem === 'bao' && items[randomNum] === 'bua')
      )
        count += 1;
      return {
        ...state,
        computerItem: items[randomNum],
        timeCount: state.timeCount + 1,
        winCount: count,
      };
    default:
      return state;
  }
};
export default gameReducers;
