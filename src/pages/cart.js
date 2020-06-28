import React, { Component } from 'react';

import CartItem from '../components/cart-item';

class CartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [
                {
                    name: "Samsung Galaxy s5",
                    image: "https://i.ibb.co/Hpzbb2g/product-1.jpg",
                    price: "$650.00",
                    quantity: 1,
                    total: "$650.00"
                }
            ]
        }
    }
    render() {
        return (
            <div className="single-product-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="product-content-right">
                                <div className="woocommerce">
                                    <form method="post" action="#">
                                        <table cellSpacing="0" className="shop_table cart">
                                            <thead>
                                                <tr>
                                                    <th className="product-remove">&nbsp;</th>
                                                    <th className="product-thumbnail">&nbsp;</th>
                                                    <th className="product-name">Product</th>
                                                    <th className="product-price">Price</th>
                                                    <th className="product-quantity">Quantity</th>
                                                    <th className="product-subtotal">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <CartItem {...this.state}></CartItem>
                                                <tr>
                                                    <td className="actions" colSpan="6">
                                                        <div className="coupon">
                                                            <label for="coupon_code">Coupon:</label>
                                                            <input type="text" placeholder="Coupon code" value=""
                                                                id="coupon_code" className="input-text" name="coupon_code" />
                                                            <input type="submit" value="Apply Coupon" name="apply_coupon"
                                                                className="button" />
                                                        </div>
                                                        <input type="submit" value="Update Cart" name="update_cart"
                                                            className="button" />
                                                        <input type="submit" value="Checkout" name="proceed"
                                                            className="checkout-button button alt wc-forward" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                    <div className="cart-collaterals">
                                        <div className="cart_totals ">
                                            <h2>Cart Totals</h2>

                                            <table cellSpacing="0">
                                                <tbody>
                                                    <tr className="cart-subtotal">
                                                        <th>Cart Subtotal</th>
                                                        <td><span className="amount">£15.00</span></td>
                                                    </tr>

                                                    <tr className="shipping">
                                                        <th>Shipping and Handling</th>
                                                        <td>Free Shipping</td>
                                                    </tr>

                                                    <tr className="order-total">
                                                        <th>Order Total</th>
                                                        <td><strong><span className="amount">£15.00</span></strong> </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartPage;