import * as ActionTypes from '../ActionTypes';

export const Diabetes = (state = { isLoading: true,
    errMess: null,
    diabetes:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PACKAGES:
            return {...state, isLoading: false, errMess: null, diabetes: action.payload.diabetesPackages};

        case ActionTypes.PACKAGES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};