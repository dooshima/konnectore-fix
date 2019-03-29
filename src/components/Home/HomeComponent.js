import React from 'react';

class HomeCompoment extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            form: 'login',
        }
    }

    render() {
        return (
            <div className={classes.container}>
                
                <div className={classes.bottomContainer}></div>
            </div>
        )
    }
}