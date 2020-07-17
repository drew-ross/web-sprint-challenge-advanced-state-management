import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const HANDLE_ERROR = 'HANDLE_ERROR';

export const getSmurfs = () => dispatch => {
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: GET_SMURFS, payload: res.data });
        })
        .catch(err => dispatch({ type: HANDLE_ERROR, payload: err }));
};

//POST request to server returns updated list of smurfs, so no need for a new action type
export const postSmurf = newSmurf => dispatch => {
    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            dispatch({ type: GET_SMURFS, payload: res.data });
        })
        .catch(err => dispatch({ type: HANDLE_ERROR, payload: err }));
};