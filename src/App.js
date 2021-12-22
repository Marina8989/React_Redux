import { useState } from 'react';
import {connect} from 'react-redux';
import {addTodo} from './store/todos/actions';

function App(props) {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      props.addTodo(value);
      setValue('');
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
           <input value={value} onChange={(e) => setValue(e.target.value)} />
        </form>    
            {props.todos.map(todo => <div key={todo}>{todo}</div>)}
        </div>
    )
} 

const mapStateToProps = (state) => ({
    todos: state.todos.data
})

const mapDispatchToProps = {
   addTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(App)