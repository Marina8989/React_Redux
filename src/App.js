import React from "react";
import { Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ShopItem from "./components/ShopItem";
import Item from "./components/Item";

function App(){
    return (
        <div style={{margin: "0 auto", textAlign: "center"}}>
            <Navbar />
            <h2>eCommerce Shop</h2>
            <Switch>
                <Route exact path="/" component={() => <Home />} />
                <Route exact path="/shop" component={() => <ShopItem />} />
                <Route exact path="/shop/:id" component={() => <Item />} />
            </Switch>
        </div>
    )
}

export default App;