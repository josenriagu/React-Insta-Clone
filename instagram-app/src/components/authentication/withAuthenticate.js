import React, { Component } from 'react';

const withAuthenticate = App => Login => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false,
            }
        }
        componentDidMount() {
            if (localStorage.getItem("username")) {
                this.setState({ loggedIn: true })
            }
        }
        render() {
            if (this.state.loggedIn) {
                return <App {...this.props} />;
            }
            return <Login />
        }
    };
}

export default withAuthenticate;