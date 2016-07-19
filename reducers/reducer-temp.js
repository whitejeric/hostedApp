import {LOG_STATE} from '../actions/index'; //just grabbing the name, not the function

export default function(state = {}, action){
  switch (action.type){
    case LOG_STATE:
      console.log('Getting the current state and publishing it to console...');
      console.log(state);
      return state;
  }
  return state;
}
