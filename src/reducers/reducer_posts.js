import { FETCH_POSTS, FETCH_POST } from '../actions';
import _ from 'lodash';

// set initial state to be an empty object
export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POSTS:
    // use the lodash mapKeys function to coerce the payload from an array to an object
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data }
    default:
      return state;
  }
}