import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class ProductComponent extends Component {
    render() {
        let products = this.props.products.map((product, index) => {
            return (
                <div className="col-md-3 col-sm-6" key={index}>
                    <div className="single-product">
                        <div className="product-f-image">
                            <img src={product.image} alt="" style={{ 'width': "100%" }} />
                            <div className="product-hover">
                                <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to
                                    cart
                                </a>
                                <NavLink to={"/product/" + product.id}
                                    className="view-details-link">
                                    <i className="fa fa-link"></i>
                                    See details
                                </NavLink>

                            </div>
                        </div>

                        <h2><a href="single-product.html">{product.name}</a></h2>

                        <div className="product-carousel-price">
                            <ins>{product.discount_price}</ins> <del>{product.actual_price}</del>
                        </div>
                    </div>
                </div>
            );
        })
        return (
            <div className="row">
                {products}
            </div>
        );
    }
}

export default ProductComponent;