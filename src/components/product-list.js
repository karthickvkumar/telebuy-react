import React, { Component } from 'react';

class ProductListComponent extends Component {
    render() {
        return (
            <div className="maincontent-area" style={this.props.style}>
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="latest-product">
                                <h2 className="section-title">{this.props.displayMessage}</h2>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductListComponent;