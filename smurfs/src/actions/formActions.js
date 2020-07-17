import axios from 'axios';

export const SUBMIT_SMURF = 'SUBMIT_SMURF';
export const GET_SMURFS = 'GET_SMURFS';
// export const submitSmurf = () => dispatch => {
//     axios
//     .post()
// }

export const getSmurfs = () => dispatch => {
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: GET_SMURFS, payload: res.data });
            console.log(res.data);
        })
        .catch(err => console.log(err));
};