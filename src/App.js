import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddContact from './components/AddContact';

const App = () => {
    return (
        <div>
          <ToastContainer />
          <Navbar />
          <Switch>
              <Route exact path="/" component={() => <Home />} />
              <Route path="/add" component={() => <AddContact />}/>
              <Route path="/edit/:id" >
                <h1>edit</h1>
              </Route>
           </Switch>
        </div>
    )
}

export default App