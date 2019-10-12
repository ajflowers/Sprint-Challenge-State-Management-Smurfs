import { CHASING_SMURFS, SMURFS_CAPTURED, SMURFS_GOT_AWAY} from '../actions'

const initialState = {
    smurfs: [
        {
            name: "Dopey",
            age: 200,
            height: "5cm",
            id: 0
          },
          {
            name: "Sleepy",
            age: 200,
            height: "5cm",
            id: 1
          }
    ],
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
                ...state
            }
        default:
            return state;
    }
};

export default reducer;