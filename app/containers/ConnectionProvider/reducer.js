import produce from 'immer';
import { ACCOUNT_UPDATED } from 'containers/ConnectionProvider/constants';

// The initial state of the App
export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ACCOUNT_UPDATED:
        // draft.account = action.account;
        draft.account = '0xf1f5cb17e17759a4fc1cd1c6edc8aa1bfe6cf8d0';
        break;
    }
  });

export default appReducer;
