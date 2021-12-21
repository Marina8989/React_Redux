import {connect} from 'react-redux';
import {incrementCounter} from './store';


function App(props) {
    return(
        <div>
            <h2 onClick={props.increment}>{props.counter}</h2>
            <h2>Start editing...</h2>
        </div>
    )
} 

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = {
    increment: incrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(App)