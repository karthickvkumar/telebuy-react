import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class ImageCarousel extends Component {
    render() {
        let images = this.props.images.map((img, index) => {
            return (
                <div key={index}>
                    <img src={img} style={{ height: "650px" }} />
                </div>
            )
        })
        return (
            <div>
                <Carousel>
                    {images}
                </Carousel>
            </div>
        );
    }
}

export default ImageCarousel;