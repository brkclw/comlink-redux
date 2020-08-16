import { combineReducers } from "redux";

const INITIAL_STATE = {
  data: [
    'React Native',
    'ReactJS',
    'NodeJS'
  ],
};

function mapData(state, data){
  const newData = Array.from(data);
  return {...state, data:newData};
}

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_COURSE':
      return { ...state, data: [...state.data, action.title] };
    case 'DELETE_COURSE':
      return { ...state, data: []};
    case 'FETCH_DATA':
      return mapData(state, action.data);
      
    default:
      return state;
  }
}

export default combineReducers({courses});
