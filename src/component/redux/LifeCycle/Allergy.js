import * as ActionTypes from './ActionTypes';

export const Allergy = (state = { isLoading: true,
    errMess: null,
    allergy:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PACKAGES:
            return {...state, isLoading: false, errMess: null, allergy: action.payload};

        case ActionTypes.PACKAGES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};