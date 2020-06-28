import React, { Component } from 'react';
import axios from 'axios';

// import HeaderComponent from '../components/header';
import ImageCarousel from '../components/image-carousel';
import ProductListComponent from '../components/product-list';
import ProductComponent from '../components/product';
import ProductInfoComponent from '../components/product-info';
import ProductPreviewComponent from '../components/product-preview';
import LoaderComponent from '../components/loader';
import FooterComponent from '../components/footer';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require("../images/slider-1.jpg"),
                require("../images/slider-2.jpg"),
                require("../images/slider-3.jpg")
            ],
            displayMessage: 'Latest Products',
            products: [],
            preview: {
                topSelling: [],
                recentlyViewed: [],
                topNew: []
            }
        }
    }

    componentDidMount() {
        const productURL = "https://shop143.herokuapp.com/telebuy/api/products/latest";
        const previewURL = "https://shop143.herokuapp.com/telebuy/api/product/preview";

        const requestProduct = axios.get(productURL);
        const requestPreview = axios.get(previewURL);

        axios.all([requestProduct, requestPreview]).then(axios.spread((...responses) => {
            this.setState({
                products: responses[0].data,
                preview: responses[1].data
            });
        })).catch((errors) => {
            console.error(errors)
        })
    }

    render() {
        return (
            <div>
                {/* <HeaderComponent></HeaderComponent> */}
                <ImageCarousel {...this.state}></ImageCarousel>
                <ProductListComponent {...this.state}>
                    {this.state.products.length == 0 ?
                        <LoaderComponent size={{ 'width': 120, 'height': 120 }}></LoaderComponent> :
                        <ProductComponent {...this.state}></ProductComponent>
                    }
                </ProductListComponent>
                <ProductInfoComponent></ProductInfoComponent>
                <div className="product-widget-area">
                    <div className="zigzag-bottom"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="single-product-widget">
                                    <h2 className="product-wid-title">Top Sellers</h2>
                                    <a className="wid-view-more">View All</a>
                                    {this.state.preview.topSelling.length == 0 ?
                                        <LoaderComponent size={{ 'width': 75, 'height': 75 }}></LoaderComponent> :
                                        <ProductPreviewComponent preview={this.state.preview.topSelling}></ProductPreviewComponent>
                                    }
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-product-widget">
                                    <h2 className="product-wid-title">Recently Viewed</h2>
                                    <a className="wid-view-more">View All</a>
                                    {this.state.preview.recentlyViewed.length == 0 ?
                                        <LoaderComponent size={{ 'width': 75, 'height': 75 }}></LoaderComponent> :
                                        <ProductPreviewComponent preview={this.state.preview.recentlyViewed}></ProductPreviewComponent>
                                    }

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-product-widget">
                                    <h2 className="product-wid-title">Top New</h2>
                                    <a className="wid-view-more">View All</a>
                                    {this.state.preview.topNew.length == 0 ?
                                        <LoaderComponent size={{ 'width': 75, 'height': 75 }}></LoaderComponent> :
                                        <ProductPreviewComponent preview={this.state.preview.topNew}></ProductPreviewComponent>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterComponent></FooterComponent>
            </div>
        );
    }
}

export default HomePage;