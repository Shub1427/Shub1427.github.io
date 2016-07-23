import { TYPES } from '../actions/user';

const initialState = {
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.UPDATE_USER:
      return {
        user: {
          ...state.user,
          ...action.user,
        },
      };
    default:
      return state;
  }
};
