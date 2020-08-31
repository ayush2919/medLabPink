import * as ActionTypes from '../ActionTypes';

export const Anemia = (state = { isLoading: true,
    errMess: null,
    anemia:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PACKAGES:
            return {...state, isLoading: false, errMess: null, anemia: action.payload.anemiaPackages};

        case ActionTypes.PACKAGES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};