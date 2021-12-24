import { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {getData} from './store/users/actions';


function App(props){
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
       e.preventDefault();
       setValue('');
    }
     useEffect(() => {
        props.getData();
     }, [])
   return(
       <div>
           <form onSubmit={handleSubmit}>
             <input value={value} onChange={(e) => setValue(e.target.value)} />
           </form>
          {props.users.map(user => <div key={user.name}>{user.name}</div>)}
       </div>
   )
}

const mapStateToProps = (state) => ({
    users: state.users.data
})

const mapDispatchToProps = {
    getData
}

export default connect(mapStateToProps, mapDispatchToProps)(App)