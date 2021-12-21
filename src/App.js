import {connect} from 'react-redux';
import {incrementCounter, decrementCounter} from './store/counter/actions';

function App(props) {
    return(
        <div>
            <h2>{props.counter}</h2>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>decrement</button>
        </div>
    )
} 

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = {
    increment: incrementCounter,
    decrement: decrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(App)