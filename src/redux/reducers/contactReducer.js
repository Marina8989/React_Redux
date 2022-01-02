const initialState = [
    {
       id: 0,
       name: "Raman Sharma",
       number: 123456789
    },
    {
       id: 1,
       name: "test name",
       number: 987654321
    }
]

const contactReducer = ( state = initialState, action) => {
   switch(action.type){
        default:
          return state;
   }
}

export default contactReducer