import React, { Component } from 'react';
import axios from 'axios';

// import HeaderComponent from '../components/header';
import ProductListComponent from '../components/product-list';
import ProductComponent from '../components/product';
import LoaderComponent from '../components/loader';
import FooterComponent from '../components/footer';

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMessage: 'Latest Smartphones',
            products: []
        }
    }

    componentDidMount() {
        const productURL = "https://shop143.herokuapp.com/telebuy/api/products";
        axios.get(productURL)
            .then((response) => {
                this.setState({
                    products: response.data
                })
            })
            .catch((errors) => {
                console.error(errors)
            })
    }

    render() {
        return (
            <div>
                {/* <HeaderComponent></HeaderComponent> */}
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product-bit-title text-center">
                                    <h2>Smartphones</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductListComponent {...this.state} style={{ minHeight: "550px" }}>
                    {this.state.products.length == 0 ?
                        <LoaderComponent size={{ 'width': 150, 'height': 150 }}></LoaderComponent> :
                        <ProductComponent {...this.state}></ProductComponent>
                    }
                </ProductListComponent>
                <FooterComponent></FooterComponent>
            </div>
        );
    }
}

export default ShopPage;