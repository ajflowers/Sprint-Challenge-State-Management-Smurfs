import { CHASING_SMURFS, SMURFS_CAPTURED, SMURFS_GOT_AWAY} from '../actions'

const initialState = {
    smurfs: [],
    isHunting: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHASING_SMURFS:
            return {
                ...state,
                isHunting: true,
                error: ''
            }
        case SMURFS_CAPTURED:
            return {
                ...state,
                smurfs: action.payload,
                isHunting: false,
                error: ""
            }
        case SMURFS_GOT_AWAY:
            return {
                ...state,
                isHunting: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default reducer;