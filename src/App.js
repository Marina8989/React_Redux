import {connect} from 'react-redux';


function App(props) {
    return(
        <div>
            <h2>{props.counter}</h2>
            <h2>Start editing...</h2>
        </div>
    )
} 

const mapStateToProps = (state) => ({
    counter: state.counter
})

export default connect(mapStateToProps)(App)