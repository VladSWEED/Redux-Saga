const initialState = {
  items: [],
  item1: [],
  item2: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEMS': {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case 'SET_ITEM1': {
      return {
        ...state,
        item1: [...state.item1, action.payload],
      };
    }
    case 'SET_ITEM2': {
      return {
        ...state,
        item2: [...state.item2, action.payload],
      };
    }

    default:
  }
  return state;
};
