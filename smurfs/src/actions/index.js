import axios from 'axios';

export const CHASING_SMURFS = 'CHASING_SMURFS';
export const SMURFS_CAPTURED = 'SMURFS_CAPTURED';
export const SMURFS_GOT_AWAY = 'SMURFS_GOT_AWAY';

export const smurfHunting = () => dispatch => {
    dispatch({ type: CHASING_SMURFS });
    axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => dispatch({ type: SMURFS_CAPTURED, payload: res.data }))
        .catch(err => dispatch ({type: SMURFS_GOT_AWAY, payload: err.response}))
}

export const smurfCaught = newSmurf => dispatch => {
    console.log('logging');
    axios
        .post(`http://localhost:3333/smurfs`, newSmurf)
        .then(res => console.log(res))
        .catch(err => dispatch ({type: SMURFS_GOT_AWAY, payload: err.response}))
}
