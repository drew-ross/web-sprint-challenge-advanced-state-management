import {
    GET_SMURFS,
    HANDLE_ERROR
} from '../actions/formActions';

const initialState = {
    smurfs: [],
    error: ''
};

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS:
            return {
                ...state,
                smurfs: action.payload,
                error: ''
            };
        case HANDLE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};