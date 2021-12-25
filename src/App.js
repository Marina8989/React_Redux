import {useEffect} from 'react';
import {connect} from 'react-redux';
import {getData, remove} from './store/users/actions';

function App(props){
    useEffect(() => {
       props.getData();
    }, [])

   return (
       <div>
         {props.isLoading && <h3>Loading...</h3>}
          <ul>
            {props.users.map(user => <li key={user.id} onClick={() => props.remove(user)}>{user.name}</li>)} 
          </ul>
          <ul>
              {props.deletedUsers.map(user => <li key={user.id}>{user.name}</li>)}
          </ul>
       </div>
   )
}

const mapStateToProps = (state) => ({
   users: state.users.data,
   isLaoding: state.users.isLoading,
   isError: state.users.isError,
   deletedUsers: state.deletedUsers.data
})

const mapDispatchToProps = {
    getData,
    remove
}

export default connect(mapStateToProps, mapDispatchToProps)(App)