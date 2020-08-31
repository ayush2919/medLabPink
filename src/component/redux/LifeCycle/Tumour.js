import * as ActionTypes from '../ActionTypes';

export const Tumour = (state = { isLoading: true,
    errMess: null,
    tumour:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PACKAGES:
            return {...state, isLoading: false, errMess: null, tumour: action.payload.tumourPackages};

        case ActionTypes.PACKAGES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};