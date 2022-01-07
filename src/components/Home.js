import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h3>WELCOME TO OUR SHOP</h3>
            <Link to="/shop">
              <button>Head to the shop</button>
            </Link>
        </div>
    )
}

export default Home
