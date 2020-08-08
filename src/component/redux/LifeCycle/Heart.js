import * as ActionTypes from './ActionTypes';

export const Heart = (state = { isLoading: true,
    errMess: null,
    heart:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PACKAGES:
            return {...state, isLoading: false, errMess: null, heart: action.payload};

        case ActionTypes.PACKAGES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};