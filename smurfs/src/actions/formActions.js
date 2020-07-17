import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';

export const postSmurf = newSmurf => dispatch => {
    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
        console.log(res);
        dispatch({ type: GET_SMURFS, payload: res.data })
    })
    .catch(err => console.log(err));
}

export const getSmurfs = () => dispatch => {
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: GET_SMURFS, payload: res.data });
            console.log(res.data);
        })
        .catch(err => console.log(err));
};