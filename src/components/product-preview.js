import React, { Component } from 'react';
import { contains } from 'jquery';

class ProductPreviewComponent extends Component {
    render() {
        let productPreview = this.props.preview.map((product, index) => {
            return (
                <div className="single-wid-product" key={index}>
                    <a href="single-product.html">
                        <img src={product.image} alt=""
                            className="product-thumb" />
                    </a>
                    <h2><a href="single-product.html">{product.name}</a></h2>
                    <div className="product-wid-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <div className="product-wid-price">
                        <ins>{product.discount_price}</ins> <del>{product.actual_price}</del>
                    </div>
                </div>
            )
        });

        return (
            <div>
                {productPreview}
            </div>
        );
    }
}

export default ProductPreviewComponent;