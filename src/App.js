import {useEffect} from 'react';
import {connect} from 'react-redux';
import {getData, removeUser} from './store/users/actions';

function App(props){
    useEffect(() => {
       props.getData();
    }, [])
   return(
       <div style={{display: 'flex'}}>
          {props.isLoading && <h3>Loading...</h3>}
          <div>
            <ul>
           {props.users.map(user => <li key={user.name} onClick={() => props.removeUser(user)}>{user.name}</li>)}
            </ul>
            <ul>
                {props.deletedUsers.map(user => <li key={user.name}>{user.name}</li>)}
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)