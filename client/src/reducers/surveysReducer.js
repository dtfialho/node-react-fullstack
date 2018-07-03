import { FETCH_SURVEYS } from '../actions/types';

export default function(state = [], action) {
  switch(state) {
    case FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
}
