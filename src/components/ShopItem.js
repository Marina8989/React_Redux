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
              <div key={item.id}>
              <Link to={`/shop/${item.id}`}>{item.title}</Link> 
              </div>
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
