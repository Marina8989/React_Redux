import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getUser} from './features/users/usersSlice';

function App(){
   const {users} = useSelector(state => state.users);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getUser())
   }, [dispatch])
    return(
        <div>
            <h2>Users Display List</h2>
            {users && users.map(user => <h2 key={user.id}>{user.name}</h2>)}
        </div>
    )
}

export default App