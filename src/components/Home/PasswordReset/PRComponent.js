import React from 'react';

class PRComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <h1>Password Reset Component</h1>
        )
    }
}

export default PRComponent;