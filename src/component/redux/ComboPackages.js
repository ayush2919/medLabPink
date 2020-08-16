import * as ActionTypes from './ActionTypes';

export const Combos = (state = { isLoading: true,
    errMess: null,
    combos:[]}, action) => {
    //    console.log(action); 
    switch (action.type) {
        case ActionTypes.ADD_COMBOS:
            return {...state, isLoading: false, errMess: null, combos: action.payload};

        case ActionTypes.COMBOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};