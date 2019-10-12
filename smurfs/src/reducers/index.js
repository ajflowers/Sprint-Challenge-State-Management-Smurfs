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
        default:
            return state;
    }
};

export default reducer;