import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        let cartItems = this.props.cartItems.map((item, index) => {
            return (
                <tr className="cart_item" key={index}>
                    <td className="product-remove">
                        <a title="Remove this item" className="remove" href="#">X</a>
                    </td>

                    <td className="product-thumbnail">
                        <a href="single-product.html"><img width="145" height="145"
                            alt="poster_1_up" className="shop_thumbnail"
                            src={item.image} /></a>
                    </td>

                    <td className="product-name">
                        <a href="single-product.html">{item.name}</a>
                    </td>

                    <td className="product-price">
                        <span className="amount">{item.price}</span>
                    </td>

                    <td className="product-quantity">
                        <div className="quantity buttons_added">
                            <input type="button" className="minus" value="-" />
                            <input type="number" size="4" className="input-text qty text"
                                title="Qty" value={item.quantity} min="0" step="1" />
                            <input type="button" className="plus" value="+" />
                        </div>
                    </td>

                    <td className="product-subtotal">
                        <span className="amount">{item.total}</span>
                    </td>
                </tr>
            );
        })
        return (cartItems);
    }
}

export default CartItem;