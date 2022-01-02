const initialState = [
    {
       id: 0,
       name: "Raman Sharma",
       number: 123456789,
       email: "raman@gmail.com"
    },
    {
       id: 1,
       name: "test name",
       number: 1987654321,
       email: "test@gmail.com"
    }
]


const contactReducer = ( state = initialState, action) => {
   switch(action.type){
       case "ADD_CONTACT":
          return [...state, action.payload];
        default:
          return state;
   }
}

export default contactReducer