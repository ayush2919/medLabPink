import * as ActionTypes from '../ActionTypes';

export const Images = (state = { isLoading: true,
    errMess: null,
    images:[]}, action) => {
    //    console.log(action); 
    switch (action.type) {
        case ActionTypes.ADD_IMG:
            return {...state, isLoading: false, errMess: null, images: action.payload};

        case ActionTypes.IMG_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};