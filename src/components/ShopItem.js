import React, {useEffect} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getData } from "../store/ShopStore/shopActions.js";


const ShopItem = (props) => {
   useEffect(() => {
        props.getData();
   }, [])

    console.log(props.shop)
    return (
        <div>
          {props.isLoading && <h3>Loading...</h3>}
          {props.shop.map(item =>
             <>
              <Link to={`/shop/${item.id}`} key={item.id}>
               <h3>{item.title} - <span>${item.price}</span></h3>
              </Link>
              <img src={item.image} style={{width: "100px", height: "100px"}} />
              <h5>{item.description}</h5>
             </> 
          )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    shop: state.shop.data,
    isLoading: state.shop.isLoading,
    isError: state.shop.isError
})

const mapDispatchToProps = {
    getData
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopItem);
