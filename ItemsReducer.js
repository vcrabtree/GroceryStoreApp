import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: [
  ],
  possible: [
    'Apple',
    'Pear',
    'Banana',
    'Carrot',
    'Lettuce',
    'Milk'
  ],
};

const itemsReducer = (state = INITIAL_STATE, action) => {
  const {
    current,
    possible,
  } = state;

  switch (action.type) {
    case 'ADD_ITEM':
      // Pulls current and possible out of previous state
      // We do not want to alter state directly in case
      // another action is altering it at the same time

      // Pull friend out of friends.possible
      // Note that action.payload === friendIndex
      const addedItem = possible.splice(action.payload, 1);

      // And put friend in friends.current
      const newItem = {key: current.length.toString(), groceryItem: addedItem}
      current.push(newItem);

      // Finally, update the redux state
      const newState = { current, possible };

      return newState;

    case 'REMOVE_ITEM':
      // Get the index in the current array of the friend to remove
      const removedItem = current[action.payload].groceryItem;

      // Use the splice function in JavaScript to take the friend
      // out of the current array and to get the name of the removed friend
      const removedItem2 = current.splice(action.payload, 1);

      // And put friend into the possible array
      possible.push(removedItem);

      // Finally, update the redux state
      const newState2 = { current, possible };
      return newState2;
    default:
      return state
  }
};

export default combineReducers({
  items: itemsReducer
});