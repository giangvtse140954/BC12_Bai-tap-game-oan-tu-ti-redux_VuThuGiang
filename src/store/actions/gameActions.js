import { CHOOSE_ITEM, RANDOM_ITEM } from '../constants/gameConstants';

export const chooseItem = (item) => ({
  type: CHOOSE_ITEM,
  payload: item,
});
export const randomItem = () => ({
  type: RANDOM_ITEM,
});
