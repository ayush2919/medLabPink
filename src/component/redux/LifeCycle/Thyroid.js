import * as ActionTypes from '../ActionTypes';

export const Thyroid = (state = { isLoading: true,
    errMess: null,
    thyroid:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PACKAGES:
            return {...state, isLoading: false, errMess: null, thyroid: action.payload.thyroidPackages};

        case ActionTypes.PACKAGES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};