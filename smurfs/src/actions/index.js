import axios from 'axios';

export const CHASING_SMURFS = 'CHASING_SMURFS';
export const SMURFS_CAPTURED = 'SMURFS_CAPTURED';
export const SMURFS_GOT_AWAY = 'SMURFS_GOT_AWAY';

export const smurfHunting = () => dispatch => {
    dispatch({ type: CHASING_SMURFS });
    axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => dispatch({ type: SMURFS_CAPTURED, payload: res.data }))
        .catch(err => console.log(err))
}
