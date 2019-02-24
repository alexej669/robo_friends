import {CHANGE_SEARCH_FIELD} from './constants.js';

const initialState = { SearchBar:'' }

export const searchRobots = (state = initialState, action = {}) =>{
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return {...state,SearchBar:action.payload};
		default:
			return state;
	}
}