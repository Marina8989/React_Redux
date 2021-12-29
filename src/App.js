import {useSelector, useDispatch} from 'react-redux';
import {decrease, increase, increseBy33} from './redux/counter';

function App(){
    const {count} = useSelector((state) => state.count);
    const dispatch = useDispatch();
    console.log(count)
    return (
       <div>
           <h2>Counter {count}</h2>
           <button onClick={() => {dispatch(decrease())}}>Decrease</button>
           <button onClick={() => {dispatch(increase())}}>Increase</button>
           <button onClick={() => {dispatch(increseBy33(33))}}>By 33</button>
       </div>
    )
}

export default App