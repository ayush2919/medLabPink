import * as ActionTypes from '../ActionTypes';

export const Kidney = (state = { isLoading: true,
    errMess: null,
    kidney:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PACKAGES:
            // console.log(action.payload);
            return {...state, isLoading: false, errMess: null, kidney: action.payload.kidneyPackages};

        case ActionTypes.PACKAGES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};