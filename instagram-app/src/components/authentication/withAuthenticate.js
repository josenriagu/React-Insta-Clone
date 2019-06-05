import React, { Component } from 'react';

const withAuthenticate = App => {
    return class extends Component {
        render() {
            return <App {...this.props} />;
        }
    };
}

export default withAuthenticate;