import {
    GET_SMURFS,
    POST_SMURF
} from '../actions/formActions';

const initialState = {
    smurfs: []
};

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS:
            return {
                ...state,
                smurfs: action.payload
            };
        default:
            return state;
    }
};