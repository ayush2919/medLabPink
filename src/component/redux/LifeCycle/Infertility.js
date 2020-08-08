import * as ActionTypes from './ActionTypes';

export const Infertility = (state = { isLoading: true,
    errMess: null,
    infertility:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PACKAGES:
            return {...state, isLoading: false, errMess: null, infertility: action.payload};

        case ActionTypes.PACKAGES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};