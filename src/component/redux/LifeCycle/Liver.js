import * as ActionTypes from '../ActionTypes';

export const Liver = (state = { isLoading: true,
    errMess: null,
    liver:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PACKAGES:
            return {...state, isLoading: false, errMess: null, liver: action.payload.liverPackages};

        case ActionTypes.PACKAGES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};