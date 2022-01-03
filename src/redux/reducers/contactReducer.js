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
      case "UPDATE_CONTACT":
         const updatedState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
         state = updatedState;
         return state;
      case 'DELETE_CONTACT':
         const deletedItem = state.filter(contact => contact.id !== action.payload && contact);
         state = deletedItem;
         return state;   
      default:
          return state;
   }
}

export default contactReducer