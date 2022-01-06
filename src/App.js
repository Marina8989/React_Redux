import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData, removeUser } from  "./store/users/actions"; 
//import { deletedUser } from "./store/deletedUsers/actions";

function App(props){
  console.log(props.users)
  useEffect(()=> {
     props.getData();
  }, [])
  return(
      <div>
         <h3>List of Names</h3>
         {props.isLoading && <h3>Loading...</h3>}
          <div>
           {props.users.map(user => <div key={user.id} onClick={() => props.removeUser(user)}>{user.name}</div>)}
         </div>
         <br />
         <div>  
           {props.deletedUsers.map(user => <div key={user.name}>{user.name}</div>)}
          </div>
      </div>
  )
}

const mapStateToProps = (state) => ({
   users: state.users.data,
   isLoading: state.users.isLoading,
   isError: state.users.isError,
   deletedUsers: state.deletedUsers.data
})
const mapDispatchToProps = {
  getData,
  removeUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);