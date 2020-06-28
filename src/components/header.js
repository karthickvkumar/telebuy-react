import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class HeaderComponent extends Component {
    render() {
        return (
            <div className="mainmenu-area">
                <div className="container" style={{ "marginTop": "18px" }}>
                    <div className="row">
                        <div className="navbar-collapse collapse show" style={{ "marginTop": "5px" }}>
                            <ul className="nav navbar-nav">
                                <li>
                                    <NavLink to="/" exact={true} activeClassName="active">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/shop" activeClassName="active">
                                        Shop Page
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/cart" activeClassName="active">
                                        Cart
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/checkout" activeClassName="active">
                                        Checkout
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;