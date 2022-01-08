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
           <Link to="/shop/id" >Shop Item Page....</Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
    shop: state.shop.data
})

const mapDispatchToProps = {
    getData
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopItem);
