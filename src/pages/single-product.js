import React, { Component } from 'react';
import axios from 'axios';

import LoaderComponent from '../components/loader';

class SingleProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productInfo: false
        }
    }
    componentDidMount() {
        const productId = this.props.match.params.id;
        const productURL = "https://shop143.herokuapp.com/telebuy/api/product/" + productId;
        axios.get(productURL)
            .then((response) => {
                this.setState({
                    productInfo: response.data
                })
            })
            .catch((errors) => {
                console.error(errors)
            })
    }
    render() {
        return (
            <div className="single-product-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    {!this.state.productInfo ?
                        <LoaderComponent size={{ 'width': 150, 'height': 150 }}></LoaderComponent> :
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product-content-right">
                                    <div className="product-breadcroumb">
                                        <a href="">Home</a>
                                        <a href="">Category Name</a>
                                        <a href="">{this.state.productInfo.name}</a>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="product-images">
                                                <div className="product-main-img">
                                                    <img src={this.state.productInfo.image} alt="" style={{ width: "90%" }} />
                                                </div>


                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="product-inner">
                                                <h2 className="product-name">{this.state.productInfo.name}</h2>
                                                <div className="product-inner-price">
                                                    <ins>{this.state.productInfo.discount_price}</ins> <del>{this.state.productInfo.actual_price}</del>
                                                </div>

                                                <form action="" className="cart">
                                                    <div className="quantity">
                                                        <input type="number" size="4" className="input-text qty text" title="Qty"
                                                            name="quantity" min="1" step="1" />
                                                    </div>
                                                    <button className="add_to_cart_button" type="submit">Add to cart</button>
                                                </form>

                                                <div className="product-inner-category">
                                                    <p>Category: <a href="">{this.state.productInfo.category}</a>. Tags: <a href="">awesome</a>, <a
                                                        href="">best</a>, <a href="">sale</a>, <a href="">shoes</a>. </p>
                                                </div>

                                                <div role="tabpanel">
                                                    <ul className="product-tab" role="tablist">
                                                        <li role="presentation" className="active"><a href="#home" aria-controls="home"
                                                            role="tab" data-toggle="tab">Description</a></li>
                                                        <li role="presentation"><a href="#profile" aria-controls="profile"
                                                            role="tab" data-toggle="tab">Reviews</a></li>
                                                    </ul>
                                                    <div className="tab-content">
                                                        <div role="tabpanel" className="tab-pane in active" id="home">
                                                            <h2>Product Description</h2>
                                                            <p>{this.state.productInfo.description}</p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>
            </div>
        );
    }
}

export default SingleProductPage;