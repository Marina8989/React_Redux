import { useState } from 'react';
import {connect} from 'react-redux';
import {incrementCounter, decrementCounter, userNumberCounter} from './store/counter/actions';

function App(props) {
    const [value, setValue] = useState('')
    return(
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <h2>{props.counter}</h2>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>decrement</button>
            <button onClick={() => props.userNumberCounter(value)}>Add a number</button>
        </div>
    )
} 

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = {
    increment: incrementCounter,
    decrement: decrementCounter,
    userNumberCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(App)