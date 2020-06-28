import React, { Component } from 'react';

class PageNotFound extends Component {
    render() {
        return (
            <div>
                <img src={require("../images/no-found.png")} className="center-img" />
            </div>
        );
    }
}

export default PageNotFound;