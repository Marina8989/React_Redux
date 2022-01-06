import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from  "./store/users/actions"; 

function App(props){
  console.log(props.users)
  useEffect(()=> {
     props.getData();
  }, [])
  return(
      <div>
         <h3>List of Names</h3>
         {props.isLoading && <h3>Loading...</h3>}
         {props.users.map(user => <div key={user.id}>{user.name}</div>)}
      </div>
  )
}

const mapStateToProps = (state) => ({
   users: state.users.data,
   isLoading: state.users.isLoading,
   isError: state.users.isError
})
const mapDispatchToProps = {
  getData
}

export default connect(mapStateToProps, mapDispatchToProps)(App);