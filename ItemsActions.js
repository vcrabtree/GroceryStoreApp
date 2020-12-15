export const addItem = itemsIndex => (
    {
      type: 'ADD_ITEM',
      payload: itemsIndex,
    }
  );

  export const removeItem = itemsIndex => (
    {
    type: 'REMOVE_ITEM',
    payload: itemsIndex,
    }
  );