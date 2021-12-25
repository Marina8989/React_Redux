import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getData, removeUser} from './store/users/actions';

function App(props){
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setValue('')
    }
    useEffect(() => {
         props.getData();
    }, [])
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={value} onChange={(e) => setValue(e.target.value)}/>
            </form>
            {props.isLoading && <h3>Loading...</h3>}
            {props.users.map(user => <div key={user.name} onClick={() => props.removeUser(user)}>{user.name}</div>)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.users.data,
    isLoading: state.users.isLoading,
    isError: state.users.isError
})

const mapDispatchToProps = {
    getData,
    removeUser
}

export default connect(mapStateToProps,mapDispatchToProps)(App)