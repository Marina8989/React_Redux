import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
    return (
        <div>
          <ToastContainer />
          <Navbar />
          <Switch>
              <Route exact path="/" >
                <Home />
              </Route>
              <Route path="/add" >
                <h1>add</h1>
              </Route>
              <Route path="/edit/:id" >
                <h1>edit</h1>
              </Route>
           </Switch>
        </div>
    )
}

export default App